import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Tipos para configuração do hook
interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  // Opções padrão do IntersectionObserver + extras
  freezeOnceVisible?: boolean    // Para de observar após primeira interseção
  triggerOnce?: boolean         // Alias para freezeOnceVisible
  unobserveOnIntersect?: boolean // Para de observar quando intersecta
  enabled?: boolean             // Permite habilitar/desabilitar o observer
  ssrSafe?: boolean            // Seguro para SSR
  debounceMs?: number          // Debounce para callback
}

interface IntersectionResult {
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
  observer?: IntersectionObserver
}

/**
 * Hook para detectar quando um elemento entra/sai do viewport
 *
 * @param options - Configurações do IntersectionObserver + extras
 * @returns { ref, isIntersecting, entry, observer }
 *
 * @example
 * ```typescript
 * // Uso básico
 * const { ref, isIntersecting } = useIntersectionObserver()
 *
 * // Uso avançado
 * const { ref, isIntersecting, entry } = useIntersectionObserver({
 *   threshold: 0.5,
 *   triggerOnce: true,
 *   rootMargin: '100px'
 * })
 * ```
 */
export function useIntersectionObserver<T extends Element = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
    triggerOnce = false,
    unobserveOnIntersect = false,
    enabled = true,
    ssrSafe = true,
    debounceMs = 0,
    ...restOptions
  } = options

  // Estados
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [observer, setObserver] = useState<IntersectionObserver>()

  // Refs
  const ref = useRef<T>(null)
  const callbackRef = useRef<NodeJS.Timeout>()
  const frozenRef = useRef(false)

  // Verificar se IntersectionObserver está disponível
  const isSupported = useMemo(() => {
    return typeof window !== 'undefined' &&
           'IntersectionObserver' in window
  }, [])

  // Função de callback com debounce opcional
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [currentEntry] = entries

      if (callbackRef.current) {
        clearTimeout(callbackRef.current)
      }

      const updateState = () => {
        // Se já foi "congelado", não atualiza mais
        if (frozenRef.current) return

        const isCurrentlyIntersecting = currentEntry.isIntersecting

        setIsIntersecting(isCurrentlyIntersecting)
        setEntry(currentEntry)

        // Congelar se configurado para trigger once
        if (isCurrentlyIntersecting && (freezeOnceVisible || triggerOnce)) {
          frozenRef.current = true
        }

        // Parar de observar se configurado
        if (isCurrentlyIntersecting && unobserveOnIntersect && observer) {
          observer.unobserve(currentEntry.target)
        }
      }

      if (debounceMs > 0) {
        callbackRef.current = setTimeout(updateState, debounceMs)
      } else {
        updateState()
      }
    },
    [freezeOnceVisible, triggerOnce, unobserveOnIntersect, observer, debounceMs]
  )

  useEffect(() => {
    // Não fazer nada se disabled, não suportado, ou em SSR
    if (!enabled || !isSupported || (ssrSafe && typeof window === 'undefined')) {
      return
    }

    const element = ref.current
    if (!element) return

    // Reset do estado frozen se as opções mudaram
    frozenRef.current = false

    try {
      const observerInstance = new IntersectionObserver(handleIntersection, {
        threshold,
        root,
        rootMargin,
        ...restOptions
      })

      setObserver(observerInstance)
      observerInstance.observe(element)

      return () => {
        observerInstance.disconnect()
        if (callbackRef.current) {
          clearTimeout(callbackRef.current)
        }
      }
    } catch (error) {
      console.error('Erro ao criar IntersectionObserver:', error)
    }
  }, [
    enabled,
    threshold,
    root,
    rootMargin,
    handleIntersection,
    isSupported,
    ssrSafe,
    restOptions
  ])

  // Reset estados quando disabled
  useEffect(() => {
    if (!enabled) {
      setIsIntersecting(false)
      setEntry(undefined)
      setObserver(undefined)
      frozenRef.current = false
    }
  }, [enabled])

  return {
    ref,
    isIntersecting,
    entry,
    observer,
    isSupported
  }
}

// Hook simplificado para casos básicos
export function useInView<T extends Element = HTMLElement>(
  threshold = 0.1
): [React.RefObject<T>, boolean] {
  const { ref, isIntersecting } = useIntersectionObserver<T>({
    threshold,
    triggerOnce: false
  })

  return [ref, isIntersecting]
}

// Hook para trigger once (útil para animações)
export function useInViewOnce<T extends Element = HTMLElement>(
  threshold = 0.1
): [React.RefObject<T>, boolean] {
  const { ref, isIntersecting } = useIntersectionObserver<T>({
    threshold,
    triggerOnce: true
  })

  return [ref, isIntersecting]
}

// Hook para lazy loading com diferentes thresholds
export function useLazyLoad<T extends Element = HTMLElement>(
  options: {
    threshold?: number
    rootMargin?: string
    enabled?: boolean
  } = {}
) {
  const {
    threshold = 0.01,
    rootMargin = '100px',
    enabled = true
  } = options

  return useIntersectionObserver<T>({
    threshold,
    rootMargin,
    triggerOnce: true,
    enabled
  })
}

// Hook específico para animações com Framer Motion
export function useAnimateOnScroll<T extends Element = HTMLElement>(
  options: {
    threshold?: number
    triggerOnce?: boolean
    rootMargin?: string
  } = {}
) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px'
  } = options

  const { ref, isIntersecting } = useIntersectionObserver<T>({
    threshold,
    triggerOnce,
    rootMargin
  })

  // Estado para Framer Motion
  const animationState = isIntersecting ? 'animate' : 'initial'

  return {
    ref,
    isIntersecting,
    animationState,
    // Props prontos para Framer Motion
    motionProps: {
      initial: 'initial',
      animate: animationState,
      variants: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
      }
    }
  }
}

// Hook para contador/progresso baseado em scroll
export function useScrollProgress<T extends Element = HTMLElement>() {
  const [progress, setProgress] = useState(0)

  const { ref, entry } = useIntersectionObserver<T>({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0 a 1 com 0.01 de precisão
    triggerOnce: false
  })

  useEffect(() => {
    if (entry) {
      setProgress(entry.intersectionRatio)
    }
  }, [entry])

  return {
    ref,
    progress: Math.round(progress * 100), // 0-100%
    progressDecimal: progress // 0-1
  }
}

// Hook para múltiplos elementos
export function useMultipleIntersection<T extends Element = HTMLElement>(
  elements: T[],
  options: UseIntersectionObserverOptions = {}
) {
  const [intersections, setIntersections] = useState<Map<T, boolean>>(new Map())

  useEffect(() => {
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        setIntersections(prev => {
          const newMap = new Map(prev)
          entries.forEach(entry => {
            newMap.set(entry.target as T, entry.isIntersecting)
          })
          return newMap
        })
      },
      options
    )

    elements.forEach(element => {
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [elements, options])

  return intersections
}

// Hook para seções de navegação (para highlight no menu)
export function useNavigationSections(
  sectionIds: string[],
  options: {
    threshold?: number
    rootMargin?: string
    offset?: number
  } = {}
) {
  const {
    threshold = 0.5,
    rootMargin = '-20% 0px -80% 0px', // Destaca quando no centro da tela
    offset = 0
  } = options

  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleSections = new Set<string>()
        let topMostSection: string | null = null
        let topMostTop = Infinity

        entries.forEach(entry => {
          const sectionId = entry.target.id

          if (entry.isIntersecting) {
            newVisibleSections.add(sectionId)

            // Encontrar a seção mais próxima do topo
            const rect = entry.boundingRect
            if (rect.top < topMostTop) {
              topMostTop = rect.top
              topMostSection = sectionId
            }
          }
        })

        setVisibleSections(newVisibleSections)
        if (topMostSection) {
          setActiveSection(topMostSection)
        }
      },
      { threshold, rootMargin }
    )

    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds, threshold, rootMargin])

  return {
    activeSection,
    visibleSections,
    isActive: (sectionId: string) => activeSection === sectionId,
    isVisible: (sectionId: string) => visibleSections.has(sectionId)
  }
}

// Utilitários para IntersectionObserver
export const intersectionUtils = {
  // Criar thresholds personalizados
  createThresholds: (steps: number): number[] => {
    return Array.from({ length: steps + 1 }, (_, i) => i / steps)
  },

  // Root margin presets
  rootMargins: {
    immediate: '0px',
    lazy: '100px',
    early: '200px',
    late: '-100px',
    center: '-20% 0px -80% 0px'
  },

  // Threshold presets
  thresholds: {
    immediate: 0,
    partial: 0.1,
    half: 0.5,
    mostly: 0.8,
    complete: 1.0
  }
}

// Hook para debugging (desenvolvimento)
export function useIntersectionDebug<T extends Element = HTMLElement>(
  label: string = 'Element'
) {
  const { ref, isIntersecting, entry } = useIntersectionObserver<T>({
    threshold: intersectionUtils.createThresholds(10) // 0, 0.1, 0.2, ... 1.0
  })

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && entry) {
      console.debug(`[${label}] Intersection:`, {
        isIntersecting,
        ratio: Math.round(entry.intersectionRatio * 100) + '%',
        boundingRect: entry.boundingClientRect,
        rootBounds: entry.rootBounds
      })
    }
  }, [label, isIntersecting, entry])

  return { ref, isIntersecting, entry }
}
