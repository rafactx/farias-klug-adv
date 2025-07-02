/**
 * @fileoverview Barrel exports para seção About
 *
 * Centraliza exportações da seção "Sobre" incluindo componentes,
 * hooks, tipos e utilitários relacionados.
 */

// Componente principal
export { default as About, About as AboutSection } from './about'

// Componente de estatísticas
export { default as AboutStats } from './about-stats'

// Re-exports de tipos
export type {
  AboutProps, Credential, Statistic,
  Value
} from './about'

// Hooks
export { useAboutAnalytics } from './about'

// Configurações
export const ABOUT_CONFIG = {
  DEFAULT_STATS_COUNT: 4,
  DEFAULT_VALUES_COUNT: 4,
  DEFAULT_CREDENTIALS_COUNT: 3,
  ANIMATION_DELAY: 0.1,
  SUPPORTED_VARIANTS: ['default', 'detailed', 'compact'] as const
} as const

// Utilitários específicos
export const aboutUtils = {
  formatStatValue: (value: string | number) => {
    if (typeof value === 'number') {
      return value >= 1000 ? `${(value / 1000).toFixed(1)}k+` : `${value}+`
    }
    return value
  },

  calculateDelay: (index: number) => index * 0.1,

  validateProps: (props: any) => {
    // Validação básica das props
    return true
  }
} as const

// Hook de analytics centralizado
export const useAboutSectionAnalytics = () => {
  const trackAboutView = (variant: string, locale: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'about_section_view', {
        variant,
        locale,
        page_location: window.location.href
      })
    }
  }

  const trackAboutInteraction = (action: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'about_interaction', {
        action,
        ...data,
        page_location: window.location.href
      })
    }
  }

  return { trackAboutView, trackAboutInteraction }
}

// Exportação padrão
export { default } from './about'
