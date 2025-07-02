import { useCallback, useEffect, useState } from 'react'

/**
 * Hook para detectar media queries de forma reativa e SSR-safe
 *
 * @param query - Media query string (ex: '(min-width: 768px)')
 * @param options - Opções de configuração
 * @returns boolean indicando se a media query corresponde
 *
 * @example
 * ```typescript
 * const isMobile = useMediaQuery('(max-width: 767px)')
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
 * ```
 */
export function useMediaQuery(
  query: string,
  options: {
    defaultValue?: boolean
    ssrSafe?: boolean
  } = {}
): boolean {
  const { defaultValue = false, ssrSafe = true } = options

  // Função para verificar se matchMedia está disponível
  const isMatchMediaSupported = useCallback((): boolean => {
    return typeof window !== 'undefined' &&
           typeof window.matchMedia === 'function'
  }, [])

  // Estado inicial - SSR-safe
  const [matches, setMatches] = useState(() => {
    if (!ssrSafe && isMatchMediaSupported()) {
      return window.matchMedia(query).matches
    }
    return defaultValue
  })

  useEffect(() => {
    // Se não há suporte a matchMedia, usar valor padrão
    if (!isMatchMediaSupported()) {
      console.warn('matchMedia não suportado, usando valor padrão')
      setMatches(defaultValue)
      return
    }

    let mounted = true
    const mediaQuery = window.matchMedia(query)

    // Função para atualizar o estado
    const updateMatch = () => {
      if (mounted) {
        setMatches(mediaQuery.matches)
      }
    }

    // Definir valor inicial (importante para hidratação SSR)
    updateMatch()

    // Usar addEventListener (APIs modernas)
    // addListener está deprecated
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMatch)
    } else {
      // Fallback para browsers antigos
      mediaQuery.addListener(updateMatch)
    }

    // Cleanup
    return () => {
      mounted = false
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMatch)
      } else {
        // Fallback para browsers antigos
        mediaQuery.removeListener(updateMatch)
      }
    }
  }, [query, defaultValue, isMatchMediaSupported])

  return matches
}

// Breakpoints padrão para o projeto (baseado no Tailwind)
export const breakpoints = {
  xs: '(min-width: 475px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',

  // Breakpoints específicos para o design
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',

  // Breakpoints para orientação
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',

  // Preferências do sistema
  darkMode: '(prefers-color-scheme: dark)',
  lightMode: '(prefers-color-scheme: light)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  highContrast: '(prefers-contrast: high)',

  // Densidade de pixel
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',

  // Hover capability
  hover: '(hover: hover)',
  noHover: '(hover: none)',

  // Pointer precision
  finePointer: '(pointer: fine)',
  coarsePointer: '(pointer: coarse)'
} as const

// Hooks específicos para breakpoints comuns
export function useIsMobile(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.mobile, { defaultValue })
}

export function useIsTablet(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.tablet, { defaultValue })
}

export function useIsDesktop(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.desktop, { defaultValue })
}

// Hooks para preferências do sistema
export function usePrefersReducedMotion(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.reducedMotion, { defaultValue })
}

export function usePrefersDarkMode(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.darkMode, { defaultValue })
}

export function usePrefersHighContrast(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.highContrast, { defaultValue })
}

// Hook para detectar touch device
export function useIsTouchDevice(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.coarsePointer, { defaultValue })
}

// Hook para detectar tela retina
export function useIsRetina(defaultValue = false): boolean {
  return useMediaQuery(breakpoints.retina, { defaultValue })
}

// Hook para múltiplas media queries
export function useMediaQueries(queries: Record<string, string>) {
  const results: Record<string, boolean> = {}

  Object.entries(queries).forEach(([key, query]) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    results[key] = useMediaQuery(query)
  })

  return results
}

// Hook para breakpoint atual (útil para debugging)
export function useCurrentBreakpoint(): string {
  const breakpointMatches = useMediaQueries({
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl,
    '2xl': breakpoints['2xl']
  })

  // Retorna o maior breakpoint que corresponde
  const activeBreakpoints = Object.entries(breakpointMatches)
    .filter(([, matches]) => matches)
    .map(([name]) => name)

  return activeBreakpoints[activeBreakpoints.length - 1] || 'xs'
}

// Hook avançado para responsive design
export function useResponsiveValue<T>(values: {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}): T | undefined {
  const currentBreakpoint = useCurrentBreakpoint()

  // Ordem dos breakpoints (do menor para o maior)
  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

  // Encontrar o valor apropriado baseado no breakpoint atual
  let selectedValue: T | undefined

  for (const bp of breakpointOrder) {
    if (values[bp as keyof typeof values] !== undefined) {
      selectedValue = values[bp as keyof typeof values]
    }
    if (bp === currentBreakpoint) break
  }

  return selectedValue
}

// Utilitários para trabalhar com media queries
export const mediaQueryUtils = {
  // Converter breakpoint em número (para cálculos)
  getBreakpointValue: (breakpoint: keyof typeof breakpoints): number | null => {
    const query = breakpoints[breakpoint]
    const match = query.match(/(\d+)px/)
    return match ? parseInt(match[1], 10) : null
  },

  // Verificar se um valor está entre dois breakpoints
  isBetween: (min: keyof typeof breakpoints, max: keyof typeof breakpoints): string => {
    const minValue = mediaQueryUtils.getBreakpointValue(min)
    const maxValue = mediaQueryUtils.getBreakpointValue(max)

    if (!minValue || !maxValue) {
      throw new Error('Breakpoints inválidos')
    }

    return `(min-width: ${minValue}px) and (max-width: ${maxValue - 1}px)`
  },

  // Criar media query customizada
  createQuery: (
    type: 'min' | 'max',
    size: number,
    unit: 'px' | 'em' | 'rem' = 'px'
  ): string => {
    return `(${type}-width: ${size}${unit})`
  },

  // Combinar múltiplas media queries
  combine: (queries: string[], operator: 'and' | 'or' = 'and'): string => {
    return queries.join(` ${operator} `)
  }
}

// Hook para detectar mudanças de orientação
export function useOrientation() {
  const isPortrait = useMediaQuery(breakpoints.portrait)
  const isLandscape = useMediaQuery(breakpoints.landscape)

  return {
    isPortrait,
    isLandscape,
    orientation: isPortrait ? 'portrait' : 'landscape'
  } as const
}

// Hook para acessibilidade
export function useAccessibilityPreferences() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const prefersHighContrast = usePrefersHighContrast()
  const prefersDarkMode = usePrefersDarkMode()

  return {
    prefersReducedMotion,
    prefersHighContrast,
    prefersDarkMode,
    // Combinação útil para animações
    shouldReduceMotion: prefersReducedMotion,
    // Combinação útil para contraste
    shouldIncreaseContrast: prefersHighContrast
  }
}

// Hook para debugging (apenas em desenvolvimento)
export function useMediaQueryDebug() {
  const currentBreakpoint = useCurrentBreakpoint()
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  const { orientation } = useOrientation()
  const { prefersReducedMotion, prefersDarkMode } = useAccessibilityPreferences()

  const debugInfo = {
    currentBreakpoint,
    device: {
      isMobile,
      isTablet,
      isDesktop
    },
    orientation,
    preferences: {
      prefersReducedMotion,
      prefersDarkMode
    },
    viewport: typeof window !== 'undefined' ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : null
  }

  // Log apenas em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.debug('Media Query Debug:', debugInfo)
  }

  return debugInfo
}
