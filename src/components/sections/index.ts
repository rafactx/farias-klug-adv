/**
 * @fileoverview Arquivo central de exportação para todas as seções da aplicação
 *
 * Este arquivo serve como ponto único de entrada para importar componentes de seções,
 * facilitando a manutenção e organização do código. Permite importações limpas como:
 *
 * @example
 * import { Hero, About, Areas, Contact } from '@/components/sections'
 * // ao invés de múltiplas importações:
 * // import Hero from '@/components/sections/hero/Hero'
 * // import About from '@/components/sections/about/about'
 * // etc...
 */

/* ──────────────── Hero Section ──────────────── */
// Seção principal da landing page com logo, título e CTAs
export { default as Hero } from './hero/Hero'

/* ──────────────── About Section ──────────────── */
// Seção sobre a empresa e estatísticas
export { default as About } from './about/about'
export { default as AboutStats } from './about/about-stats'

/* ──────────────── Areas Section ──────────────── */
// Seção de áreas de atuação jurídica
export { default as AreaCard } from './areas/area-card'
export { default as Areas } from './areas/areas'

/* ──────────────── Contact Section ──────────────── */
// Seção de contato e informações
export { default as Contact } from './contact/contact'
export { default as ContactInfo } from './contact/contact-info'

/* ──────────────── Grouped Exports ──────────────── */
/**
 * Exportações agrupadas por funcionalidade para facilitar importações específicas
 *
 * @example
 * import { AboutComponents, ContactComponents } from '@/components/sections'
 * const { About, AboutStats } = AboutComponents
 */
export const HeroComponents = {
  Hero: require('./hero/Hero').default,
} as const

export const AboutComponents = {
  About: require('./about/about').default,
  AboutStats: require('./about/about-stats').default,
} as const

export const AreasComponents = {
  Areas: require('./areas/areas').default,
  AreaCard: require('./areas/area-card').default,
} as const

export const ContactComponents = {
  Contact: require('./contact/contact').default,
  ContactInfo: require('./contact/contact-info').default,
} as const

/* ──────────────── All Sections Array ──────────────── */
/**
 * Array com todos os componentes de seção para iteração dinâmica
 * Útil para casos onde você precisa renderizar seções dinamicamente
 *
 * @example
 * ALL_SECTIONS.map((Section, index) => <Section key={index} />)
 */
export const ALL_SECTIONS = [
  require('./hero/Hero').default,
  require('./about/about').default,
  require('./areas/areas').default,
  require('./contact/contact').default,
] as const

/* ──────────────── Section Types ──────────────── */
/**
 * Types para melhor type safety ao trabalhar com seções
 */
export type SectionComponent = React.ComponentType<any>

export type SectionName =
  | 'hero'
  | 'about'
  | 'areas'
  | 'contact'

export interface SectionMap {
  hero: typeof import('./hero/Hero').default
  about: typeof import('./about/about').default
  areas: typeof import('./areas/areas').default
  contact: typeof import('./contact/contact').default
}

/* ──────────────── Section Registry ──────────────── */
/**
 * Registry mapeado para acesso dinâmico a seções por nome
 * Útil para carregamento condicional baseado em configuração
 *
 * @example
 * const sectionName = 'hero'
 * const SectionComponent = SECTION_REGISTRY[sectionName]
 */
export const SECTION_REGISTRY: SectionMap = {
  hero: require('./hero/Hero').default,
  about: require('./about/about').default,
  areas: require('./areas/areas').default,
  contact: require('./contact/contact').default,
} as const

/* ──────────────── Lazy Loading Utilities ──────────────── */
/**
 * Versões lazy-loaded das seções para code splitting
 * Use quando quiser carregar seções sob demanda
 *
 * @example
 * const LazyHero = LAZY_SECTIONS.hero
 * <Suspense fallback={<Loading />}>
 *   <LazyHero />
 * </Suspense>
 */
import { lazy } from 'react'

export const LAZY_SECTIONS = {
  hero: lazy(() => import('./hero/Hero')),
  about: lazy(() => import('./about/about')),
  areas: lazy(() => import('./areas/areas')),
  contact: lazy(() => import('./contact/contact')),
} as const

/* ──────────────── Development Helpers ──────────────── */
/**
 * Helpers para desenvolvimento - apenas em modo dev
 */
if (process.env.NODE_ENV === 'development') {
  /**
   * Lista todos os componentes disponíveis para debug
   */
  export const debugSections = () => {
    console.group('🏗️ Available Sections')
    console.log('Individual:', { Hero: '✅', About: '✅', Areas: '✅', Contact: '✅' })
    console.log('Grouped:', Object.keys({ HeroComponents, AboutComponents, AreasComponents, ContactComponents }))
    console.log('Registry:', Object.keys(SECTION_REGISTRY))
    console.groupEnd()
  }
}
