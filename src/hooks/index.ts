// hooks/index.ts
// Barrel export para todos os hooks customizados

// =============================================================================
// HOOKS PRINCIPAIS
// =============================================================================

// Hook principal de intersection observer
export { useIntersectionObserver } from './use-intersection-observer'

// Hook principal de media query
export { useMediaQuery } from './use-media-query'

// Hook principal de localStorage
export { useLocalStorage } from './use-local-storage'

// =============================================================================
// INTERSECTION OBSERVER - Hooks Especializados
// =============================================================================

// Hooks básicos para detecção de elementos na tela
export {
  useAnimateOnScroll, // Para highlight automático na navegação
  useIntersectionDebug // Debug em desenvolvimento
  , useInView, // Detecta se elemento está visível
  useInViewOnce, // Detecta uma vez só (para animações)
  useLazyLoad, // Progresso de scroll (0-100%)
  useMultipleIntersection, // Múltiplos elementos simultaneamente
  useNavigationSections, // Integração com Framer Motion
  useScrollProgress
} from './use-intersection-observer'

// Utilitários do intersection observer
export { intersectionUtils } from './use-intersection-observer'

// =============================================================================
// MEDIA QUERIES - Hooks Especializados
// =============================================================================

// Hooks para breakpoints específicos
export {
  useCurrentBreakpoint, // (768px - 1023px)
  useIsDesktop, useIsMobile, // (max-width: 767px)
  useIsTablet, // Retorna breakpoint atual
  useResponsiveValue // Valores diferentes por breakpoint
} from './use-media-query'

// Hooks para preferências do sistema
export {
  useAccessibilityPreferences // Todas as preferências juntas
  , // (prefers-reduced-motion: reduce)
  usePrefersDarkMode, // (prefers-color-scheme: dark)
  usePrefersHighContrast, usePrefersReducedMotion
} from './use-media-query'

// Hooks para características do dispositivo
export {
  useIsRetina, useIsTouchDevice, // Detecta tela retina
  useOrientation // portrait/landscape
} from './use-media-query'

// Hooks avançados para media queries
export {
  useMediaQueries, // Múltiplas queries simultaneamente
  useMediaQueryDebug // Debug de media queries
} from './use-media-query'

// Breakpoints e utilitários
export {
  breakpoints, // Breakpoints pré-definidos
  mediaQueryUtils // Utilitários para criar queries
} from './use-media-query'

// =============================================================================
// LOCAL STORAGE - Hooks Especializados
// =============================================================================

// Hooks básicos
export {
  useSimpleLocalStorage, // Versão simplificada
  useTemporaryCache // Cache com TTL
} from './use-local-storage'

// Hooks específicos para aplicação
export {
  useSiteSettings // Configurações do site (cookies, visitas, etc)
  , useUserPreferences
} from './use-local-storage'

// Utilitários do localStorage
export { localStorageUtils } from './use-local-storage'

// =============================================================================
// HOOKS COMBINADOS - Para Casos Específicos
// =============================================================================

/**
 * Hook combinado para animações responsivas com intersection observer
 *
 * @example
 * ```typescript
 * const { ref, shouldAnimate, isMobile } = useResponsiveAnimation()
 *
 * return (
 *   <motion.div
 *     ref={ref}
 *     animate={shouldAnimate && !isMobile ? 'visible' : 'hidden'}
 *     variants={variants}
 *   >
 *     Conteúdo
 *   </motion.div>
 * )
 * ```
 */
export function useResponsiveAnimation(options: {
  threshold?: number
  disableOnMobile?: boolean
  triggerOnce?: boolean
} = {}) {
  const { threshold = 0.1, disableOnMobile = false, triggerOnce = true } = options

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce
  })

  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  const shouldAnimate = isIntersecting &&
                       !prefersReducedMotion &&
                       !(disableOnMobile && isMobile)

  return {
    ref,
    isIntersecting,
    shouldAnimate,
    isMobile,
    prefersReducedMotion
  }
}

/**
 * Hook para gerenciar tema com preferência do sistema e localStorage
 *
 * @example
 * ```typescript
 * const { theme, setTheme, systemTheme, isSystemTheme } = useTheme()
 * ```
 */
export function useTheme() {
  const [preferences, setPreferences] = useUserPreferences()
  const systemPrefersDark = usePrefersDarkMode()

  const systemTheme = systemPrefersDark ? 'dark' : 'light'
  const currentTheme = preferences.theme === 'system' ? systemTheme : preferences.theme
  const isSystemTheme = preferences.theme === 'system'

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    setPreferences(prev => ({ ...prev, theme }))
  }

  return {
    theme: currentTheme,
    setTheme,
    systemTheme,
    isSystemTheme,
    preferences
  }
}

/**
 * Hook para detecção inteligente de dispositivo
 *
 * @example
 * ```typescript
 * const { deviceType, isTouchDevice, canHover } = useDeviceDetection()
 * ```
 */
export function useDeviceDetection() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()
  const isTouchDevice = useIsTouchDevice()
  const isRetina = useIsRetina()
  const { orientation } = useOrientation()

  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  const canHover = !isTouchDevice
  const isLandscapeMobile = isMobile && orientation === 'landscape'

  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isTouchDevice,
    isRetina,
    orientation,
    canHover,
    isLandscapeMobile
  }
}

/**
 * Hook para navegação inteligente (combina scroll spy + media queries)
 *
 * @example
 * ```typescript
 * const { activeSection, isMobileMenu, shouldStick } = useSmartNavigation([
 *   'hero', 'about', 'areas', 'contact'
 * ])
 * ```
 */
export function useSmartNavigation(sectionIds: string[]) {
  const isMobile = useIsMobile()
  const isDesktop = useIsDesktop()

  const { activeSection, isActive, isVisible } = useNavigationSections(sectionIds, {
    threshold: isMobile ? 0.3 : 0.5,
    rootMargin: isMobile ? '-10% 0px -90% 0px' : '-20% 0px -80% 0px'
  })

  // Detectar se deve mostrar navbar sticky
  const { ref: heroRef, isIntersecting: isHeroVisible } = useIntersectionObserver({
    threshold: 0
  })

  return {
    activeSection,
    isActive,
    isVisible,
    isMobile,
    isDesktop,
    shouldStick: !isHeroVisible,
    heroRef
  }
}

/**
 * Hook para performance e lazy loading inteligente
 *
 * @example
 * ```typescript
 * const { ref, shouldLoad, isVisible } = usePerformantLoad({
 *   rootMargin: '100px',
 *   condition: !isMobile // Só carrega se não for mobile
 * })
 * ```
 */
export function usePerformantLoad(options: {
  rootMargin?: string
  threshold?: number
  condition?: boolean
  delay?: number
} = {}) {
  const {
    rootMargin = '50px',
    threshold = 0.01,
    condition = true,
    delay = 0
  } = options

  const { ref, isIntersecting } = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce: true,
    enabled: condition
  })

  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (isIntersecting && condition) {
      if (delay > 0) {
        const timer = setTimeout(() => setShouldLoad(true), delay)
        return () => clearTimeout(timer)
      } else {
        setShouldLoad(true)
      }
    }
  }, [isIntersecting, condition, delay])

  return {
    ref,
    shouldLoad: shouldLoad && condition,
    isVisible: isIntersecting,
    condition
  }
}

// =============================================================================
// EXPORTS POR CATEGORIA (para imports específicos)
// =============================================================================

// Todos os hooks de intersection observer
export const intersectionHooks = {
  useIntersectionObserver,
  useInView,
  useInViewOnce,
  useLazyLoad,
  useAnimateOnScroll,
  useScrollProgress,
  useMultipleIntersection,
  useNavigationSections,
  useIntersectionDebug
}

// Todos os hooks de media query
export const mediaQueryHooks = {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useCurrentBreakpoint,
  useResponsiveValue,
  usePrefersReducedMotion,
  usePrefersDarkMode,
  usePrefersHighContrast,
  useAccessibilityPreferences,
  useIsTouchDevice,
  useIsRetina,
  useOrientation,
  useMediaQueries,
  useMediaQueryDebug
}

// Todos os hooks de localStorage
export const storageHooks = {
  useLocalStorage,
  useSimpleLocalStorage,
  useTemporaryCache,
  useUserPreferences,
  useSiteSettings
}

// Hooks combinados/avançados
export const advancedHooks = {
  useResponsiveAnimation,
  useTheme,
  useDeviceDetection,
  useSmartNavigation,
  usePerformantLoad
}

// =============================================================================
// TIPOS E UTILITÁRIOS
// =============================================================================

// Re-export de tipos úteis (se necessário)
export type { UseIntersectionObserverOptions } from './use-intersection-observer'

// Re-export de utilitários
export const utils = {
  intersection: intersectionUtils,
  mediaQuery: mediaQueryUtils,
  localStorage: localStorageUtils
}

// =============================================================================
// HOOKS PARA CASOS ESPECÍFICOS DO PROJETO
// =============================================================================

/**
 * Hook específico para o escritório de advocacia
 * Combina preferências de contato, idioma e tema
 */
export function useLawFirmPreferences() {
  const [preferences, setPreferences] = useUserPreferences()
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()

  const updateLanguage = (language: 'pt-br' | 'en' | 'es' | 'de') => {
    setPreferences(prev => ({ ...prev, language }))
  }

  const updateContactPreference = (method: 'whatsapp' | 'email' | 'phone') => {
    setPreferences(prev => ({ ...prev, preferredContact: method }))
  }

  return {
    language: preferences.language,
    updateLanguage,
    theme,
    setTheme,
    preferredContact: preferences.preferredContact || 'whatsapp',
    updateContactPreference,
    isMobile,
    preferences
  }
}

/**
 * Hook para animações das seções do site
 * Otimizado para as seções: Hero, About, Areas, Contact
 */
export function useSectionAnimation(sectionName: string) {
  const { ref, shouldAnimate, isMobile } = useResponsiveAnimation({
    threshold: isMobile ? 0.1 : 0.2,
    disableOnMobile: false,
    triggerOnce: true
  })

  // Estados de animação baseados na seção
  const animationStates = {
    hero: shouldAnimate ? 'animate' : 'initial',
    about: shouldAnimate ? 'animate' : 'initial',
    areas: shouldAnimate ? 'animate' : 'initial',
    contact: shouldAnimate ? 'animate' : 'initial'
  }

  return {
    ref,
    animationState: animationStates[sectionName as keyof typeof animationStates] || 'initial',
    shouldAnimate,
    isMobile
  }
}
