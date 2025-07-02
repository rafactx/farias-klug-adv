/**
 * @fileoverview Exportações centralizadas para componentes da seção About
 *
 * Este arquivo organiza todas as exportações relacionadas à seção "Sobre",
 * facilitando importações limpas e manutenção do código.
 *
 * @example
 * import { About, AboutStats } from '@/components/sections/about'
 * // ou
 * import { AboutComponents } from '@/components/sections/about'
 * const { About, AboutStats } = AboutComponents
 */

/* ──────────────── Individual Exports ──────────────── */
// Componente principal da seção About
export { default as About } from './about'

// Componente de estatísticas do escritório
export { default as AboutStats } from './about-stats'

/* ──────────────── Grouped Exports ──────────────── */
/**
 * Exportação agrupada para facilitar importações organizadas
 *
 * @example
 * import { AboutComponents } from '@/components/sections/about'
 * const { About, AboutStats } = AboutComponents
 */
export const AboutComponents = {
  About: require('./about').default,
  AboutStats: require('./about-stats').default,
} as const

/* ──────────────── Default Export ──────────────── */
/**
 * Exportação padrão do componente principal About
 * Para casos onde você só precisa do componente principal
 *
 * @example
 * import About from '@/components/sections/about'
 */
export { default } from './about'

/* ──────────────── Types ──────────────── */
/**
 * Types relacionados aos componentes About
 */
export type AboutComponent = typeof import('./about').default
export type AboutStatsComponent = typeof import('./about-stats').default

export interface AboutSection {
  About: AboutComponent
  AboutStats: AboutStatsComponent
}

/* ──────────────── Re-exports for convenience ──────────────── */
/**
 * Re-exportações para facilitar acesso a tipos e interfaces
 * dos componentes internos, se necessário
 */
export type { default as AboutProps } from './about'
export type { default as AboutStatsProps } from './about-stats'
