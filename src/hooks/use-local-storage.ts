import { useCallback, useEffect, useRef, useState } from 'react'

// Tipos para o hook
type SetValue<T> = (value: T | ((val: T) => T)) => void

interface UseLocalStorageOptions<T> {
  // Valor padrão quando localStorage está vazio
  defaultValue: T

  // Função para serializar (opcional)
  serialize?: (value: T) => string

  // Função para deserializar (opcional)
  deserialize?: (value: string) => T

  // Se deve sincronizar entre abas
  syncAcrossTabs?: boolean

  // Se deve usar SSR-safe (hidratação)
  ssrSafe?: boolean
}

/**
 * Hook para gerenciar localStorage de forma reativa e type-safe
 *
 * @param key - Chave do localStorage
 * @param options - Opções de configuração
 * @returns [valor, setter, { remove, isLoading, error }]
 *
 * @example
 * ```typescript
 * // Uso básico
 * const [theme, setTheme] = useLocalStorage('theme', { defaultValue: 'light' })
 *
 * // Uso avançado com opções
 * const [preferences, setPreferences] = useLocalStorage('user-prefs', {
 *   defaultValue: { language: 'pt-br', notifications: true },
 *   syncAcrossTabs: true,
 *   ssrSafe: true
 * })
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  options: UseLocalStorageOptions<T>
): [T, SetValue<T>, { remove: () => void; isLoading: boolean; error: string | null }] {
  const {
    defaultValue,
    serialize = JSON.stringify,
    deserialize = JSON.parse,
    syncAcrossTabs = true,
    ssrSafe = true
  } = options

  // Estados
  const [storedValue, setStoredValue] = useState<T>(defaultValue)
  const [isLoading, setIsLoading] = useState(ssrSafe) // Se SSR-safe, começa loading
  const [error, setError] = useState<string | null>(null)

  // Ref para evitar loops infinitos
  const initializing = useRef(true)

  // Função para verificar se localStorage está disponível
  const isLocalStorageAvailable = useCallback((): boolean => {
    try {
      if (typeof window === 'undefined') return false

      const testKey = '__localStorage_test__'
      window.localStorage.setItem(testKey, 'test')
      window.localStorage.removeItem(testKey)
      return true
    } catch {
      return false
    }
  }, [])

  // Função para ler do localStorage
  const readFromStorage = useCallback((): T => {
    try {
      if (!isLocalStorageAvailable()) {
        console.warn(`localStorage não disponível, usando valor padrão para "${key}"`)
        return defaultValue
      }

      const item = window.localStorage.getItem(key)

      if (item === null) {
        return defaultValue
      }

      return deserialize(item)
    } catch (error) {
      console.error(`Erro ao ler localStorage para a chave "${key}":`, error)
      setError(`Erro ao ler dados: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
      return defaultValue
    }
  }, [key, defaultValue, deserialize, isLocalStorageAvailable])

  // Função para escrever no localStorage
  const writeToStorage = useCallback((value: T): void => {
    try {
      if (!isLocalStorageAvailable()) {
        console.warn(`localStorage não disponível, não é possível salvar "${key}"`)
        return
      }

      window.localStorage.setItem(key, serialize(value))
      setError(null)
    } catch (error) {
      console.error(`Erro ao escrever no localStorage para a chave "${key}":`, error)
      setError(`Erro ao salvar dados: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }, [key, serialize, isLocalStorageAvailable])

  // Função para remover do localStorage
  const removeFromStorage = useCallback((): void => {
    try {
      if (!isLocalStorageAvailable()) {
        console.warn(`localStorage não disponível, não é possível remover "${key}"`)
        return
      }

      window.localStorage.removeItem(key)
      setStoredValue(defaultValue)
      setError(null)
    } catch (error) {
      console.error(`Erro ao remover do localStorage a chave "${key}":`, error)
      setError(`Erro ao remover dados: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }, [key, defaultValue, isLocalStorageAvailable])

  // Setter personalizado
  const setValue: SetValue<T> = useCallback((value) => {
    try {
      // Permite função ou valor direto
      const valueToStore = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)
      writeToStorage(valueToStore)
    } catch (error) {
      console.error(`Erro ao definir valor para a chave "${key}":`, error)
      setError(`Erro ao definir valor: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }, [storedValue, writeToStorage, key])

  // Listener para mudanças entre abas
  useEffect(() => {
    if (!syncAcrossTabs || !isLocalStorageAvailable()) return

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          const newValue = deserialize(e.newValue)
          setStoredValue(newValue)
          setError(null)
        } catch (error) {
          console.error(`Erro ao sincronizar localStorage para a chave "${key}":`, error)
          setError(`Erro de sincronização: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
        }
      } else if (e.key === key && e.newValue === null) {
        // Item foi removido em outra aba
        setStoredValue(defaultValue)
        setError(null)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key, defaultValue, deserialize, syncAcrossTabs, isLocalStorageAvailable])

  // Inicialização (hidratação para SSR)
  useEffect(() => {
    if (initializing.current) {
      initializing.current = false

      const value = readFromStorage()
      setStoredValue(value)

      if (ssrSafe) {
        setIsLoading(false)
      }
    }
  }, [readFromStorage, ssrSafe])

  // Verificação periódica para sincronização manual (fallback)
  useEffect(() => {
    if (!syncAcrossTabs || !isLocalStorageAvailable()) return

    const interval = setInterval(() => {
      try {
        const currentValue = readFromStorage()

        // Só atualiza se o valor realmente mudou
        if (JSON.stringify(currentValue) !== JSON.stringify(storedValue)) {
          setStoredValue(currentValue)
        }
      } catch (error) {
        // Silencioso para não poluir console
      }
    }, 1000) // Verifica a cada segundo

    return () => clearInterval(interval)
  }, [readFromStorage, storedValue, syncAcrossTabs, isLocalStorageAvailable])

  return [
    storedValue,
    setValue,
    {
      remove: removeFromStorage,
      isLoading,
      error
    }
  ]
}

// Hook simplificado para casos básicos
export function useSimpleLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, SetValue<T>] {
  const [value, setValue] = useLocalStorage(key, { defaultValue })
  return [value, setValue]
}

// Hook específico para preferências do usuário
export function useUserPreferences() {
  return useLocalStorage('user-preferences', {
    defaultValue: {
      theme: 'light' as 'light' | 'dark',
      language: 'pt-br' as 'pt-br' | 'en' | 'es' | 'de',
      fontSize: 'medium' as 'small' | 'medium' | 'large',
      reducedMotion: false,
      notifications: true,
      autoSave: true
    },
    syncAcrossTabs: true,
    ssrSafe: true
  })
}

// Hook específico para configurações do site
export function useSiteSettings() {
  return useLocalStorage('site-settings', {
    defaultValue: {
      cookiesAccepted: false,
      lastVisit: Date.now(),
      visitCount: 0,
      hasSeenWelcome: false,
      preferredContactMethod: 'whatsapp' as 'whatsapp' | 'email' | 'phone'
    },
    syncAcrossTabs: false, // Configurações específicas da sessão
    ssrSafe: true
  })
}

// Hook para cache temporário
export function useTemporaryCache<T>(key: string, ttl: number = 3600000) { // 1 hora padrão
  const [cache, setCache] = useLocalStorage<{ data: T; timestamp: number } | null>(
    `cache_${key}`,
    { defaultValue: null }
  )

  const getCachedData = useCallback((): T | null => {
    if (!cache) return null

    const now = Date.now()
    const isExpired = now - cache.timestamp > ttl

    if (isExpired) {
      setCache(null)
      return null
    }

    return cache.data
  }, [cache, ttl, setCache])

  const setCachedData = useCallback((data: T): void => {
    setCache({
      data,
      timestamp: Date.now()
    })
  }, [setCache])

  const clearCache = useCallback((): void => {
    setCache(null)
  }, [setCache])

  return {
    data: getCachedData(),
    setData: setCachedData,
    clearCache,
    isExpired: cache ? Date.now() - cache.timestamp > ttl : true
  }
}

// Utilitários adicionais
export const localStorageUtils = {
  // Limpar todo o localStorage (cuidado!)
  clearAll: (): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.clear()
      }
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error)
    }
  },

  // Obter todas as chaves
  getAllKeys: (): string[] => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return Object.keys(window.localStorage)
      }
      return []
    } catch (error) {
      console.error('Erro ao obter chaves do localStorage:', error)
      return []
    }
  },

  // Obter tamanho do localStorage em bytes (aproximado)
  getStorageSize: (): number => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        let total = 0
        for (const key in window.localStorage) {
          if (window.localStorage.hasOwnProperty(key)) {
            total += window.localStorage[key].length + key.length
          }
        }
        return total
      }
      return 0
    } catch (error) {
      console.error('Erro ao calcular tamanho do localStorage:', error)
      return 0
    }
  },

  // Verificar se está próximo do limite (5MB na maioria dos browsers)
  isNearLimit: (): boolean => {
    const size = localStorageUtils.getStorageSize()
    const limitMB = 5
    const limitBytes = limitMB * 1024 * 1024
    return size > limitBytes * 0.8 // 80% do limite
  }
}
