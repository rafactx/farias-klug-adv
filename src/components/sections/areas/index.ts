/**
 * @fileoverview Barrel exports para componentes da seção de áreas de atuação
 *
 * Este arquivo centraliza as exportações dos componentes relacionados às áreas
 * de atuação legal, facilitando importações e mantendo uma API limpa.
 *
 * @example
 * ```typescript
 * // Importação individual
 * import { AreaCard } from '@/components/sections/areas'
 *
 * // Importação múltipla
 * import { Areas, AreaCard } from '@/components/sections/areas'
 *
 * // Importação com renomeação
 * import { Areas as LegalAreas } from '@/components/sections/areas'
 * ```
 */

// =============================================================================
// COMPONENTES PRINCIPAIS
// =============================================================================

/**
 * Componente principal para listagem de áreas de atuação
 * Inclui funcionalidades de filtro, busca e diferentes layouts
 */
export { default as Areas, Areas as AreasSection } from './areas'

/**
 * Componente de card individual para área de atuação
 * Suporta múltiplas variantes e animações
 */
export { default as AreaCard, AreaCard as LegalAreaCard } from './area-card'

// =============================================================================
// RE-EXPORTS DE TIPOS RELACIONADOS
// =============================================================================

/**
 * Re-exportação dos tipos relacionados às áreas legais
 * Facilita o acesso aos tipos sem precisar importar de múltiplos arquivos
 */
export type { LegalArea } from '@/types/legal'

// =============================================================================
// RE-EXPORTS DE DADOS E UTILITÁRIOS
// =============================================================================

/**
 * Re-exportação dos dados e utilitários de áreas legais
 * Permite acesso direto aos dados sem navegar pela estrutura de pastas
 */
export { legalAreas, legalAreasUtils } from '@/data/legal-areas'

// =============================================================================
// CONFIGURAÇÕES E CONSTANTES
// =============================================================================

/**
 * Configurações padrão para componentes de áreas
 */
export const AREAS_CONFIG = {
  /** Número padrão de áreas por página */
  DEFAULT_PER_PAGE: 6,

  /** Delay padrão entre animações de cards */
  ANIMATION_DELAY: 0.1,

  /** Configurações de layout responsivo */
  RESPONSIVE_BREAKPOINTS: {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
  },

  /** Idiomas suportados */
  SUPPORTED_LOCALES: ['pt-br', 'en', 'es', 'de'] as const,

  /** Variantes de card disponíveis */
  CARD_VARIANTS: ['default', 'featured', 'compact'] as const,

  /** Layouts disponíveis */
  LAYOUT_OPTIONS: ['grid', 'list'] as const
} as const

// =============================================================================
// HOOKS PERSONALIZADOS
// =============================================================================

/**
 * Hook personalizado para analytics de áreas
 * Facilita o tracking de interações do usuário
 */
export const useAreasAnalytics = () => {
  const trackAreaView = (areaId: string, locale: string) => {
    // Implementação de tracking (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_view', {
        area_id: areaId,
        locale,
        page_location: window.location.href
      })
    }
  }

  const trackAreaClick = (areaId: string, locale: string, source?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_click', {
        area_id: areaId,
        locale,
        source: source || 'card',
        page_location: window.location.href
      })
    }
  }

  const trackFilterChange = (filter: string, resultCount: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'areas_filter', {
        filter_type: filter,
        result_count: resultCount,
        page_location: window.location.href
      })
    }
  }

  const trackSearch = (searchTerm: string, resultCount: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'areas_search', {
        search_term: searchTerm,
        result_count: resultCount,
        page_location: window.location.href
      })
    }
  }

  return {
    trackAreaView,
    trackAreaClick,
    trackFilterChange,
    trackSearch
  }
}

// =============================================================================
// UTILITÁRIOS ESPECÍFICOS DA SEÇÃO
// =============================================================================

/**
 * Utilitários específicos para a seção de áreas
 */
export const areasUtils = {
  /**
   * Calcula o delay de animação baseado no índice
   */
  calculateAnimationDelay: (index: number, baseDelay = 0.1): number => {
    return index * baseDelay
  },

  /**
   * Gera classe CSS para grid responsivo
   */
  getResponsiveGridClass: (layout: 'grid' | 'list' = 'grid'): string => {
    return layout === 'grid'
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1'
  },

  /**
   * Valida se o locale é suportado
   */
  isSupportedLocale: (locale: string): locale is 'pt-br' | 'en' | 'es' | 'de' => {
    return AREAS_CONFIG.SUPPORTED_LOCALES.includes(locale as any)
  },

  /**
   * Obtém configuração padrão baseada no contexto
   */
  getDefaultConfig: (context: 'homepage' | 'page' | 'section') => {
    const configs = {
      homepage: {
        maxItems: 4,
        featuredOnly: true,
        showControls: false,
        variant: 'featured' as const
      },
      page: {
        maxItems: undefined,
        featuredOnly: false,
        showControls: true,
        variant: 'default' as const
      },
      section: {
        maxItems: 6,
        featuredOnly: false,
        showControls: true,
        variant: 'default' as const
      }
    }

    return configs[context]
  }
} as const

// =============================================================================
// METADADOS PARA DESENVOLVIMENTO
// =============================================================================

/**
 * Informações de versão e manutenção (para debugging)
 */
export const AREAS_METADATA = {
  version: '1.0.0',
  lastUpdated: '2025-01-02',
  maintainer: 'Farias Klug Development Team',
  description: 'Componentes para seção de áreas de atuação legal',
  dependencies: [
    'framer-motion',
    'lucide-react',
    '@/components/ui',
    '@/types/legal',
    '@/data/legal-areas'
  ]
} as const

// =============================================================================
// TIPOS AUXILIARES
// =============================================================================

/**
 * Tipos auxiliares específicos da seção
 */
export type AreaCardVariant = typeof AREAS_CONFIG.CARD_VARIANTS[number]
export type LayoutOption = typeof AREAS_CONFIG.LAYOUT_OPTIONS[number]
export type SupportedLocale = typeof AREAS_CONFIG.SUPPORTED_LOCALES[number]

/**
 * Configuração para contextos específicos
 */
export type ContextConfig = {
  maxItems?: number
  featuredOnly?: boolean
  showControls?: boolean
  variant?: AreaCardVariant
}

// =============================================================================
// EXPORTAÇÃO PADRÃO
// =============================================================================

/**
 * Exportação padrão como o componente principal
 */
export { default } from './areas'
