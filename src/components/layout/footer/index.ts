/**
 * @fileoverview Barrel exports para componentes de footer
 *
 * Centraliza as exportações dos componentes relacionados ao footer,
 * facilitando importações limpas e organizadas.
 *
 * @example
 * ```tsx
 * import { Footer } from '@/components/layout/footer'
 * // ou
 * import Footer from '@/components/layout/footer'
 * ```
 */

// Exportação principal do componente Footer
export { default as Footer, Footer as FooterComponent } from './footer'
export type { FooterProps } from './footer'

// Exportação padrão
export { default } from './footer'
