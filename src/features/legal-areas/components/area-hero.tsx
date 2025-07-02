/**
 * @fileoverview Componente Hero para páginas individuais de áreas jurídicas
 *
 * Hero section especializado para áreas de atuação com breadcrumbs,
 * título, descrição, estatísticas e call-to-action personalizado.
 * Otimizado para conversão e SEO.
 *
 * @example
 * ```tsx
 * <AreaHero
 *   area={legalArea}
 *   locale="pt-br"
 *   breadcrumbs={breadcrumbItems}
 * />
 * ```
 */

'use client'

import { staggerChild, staggerContainer } from '@/animations/variants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LegalArea, Locale } from '@/types/legal'
import { motion } from 'framer-motion'
import { ChevronRight, Clock, Shield, Star } from 'lucide-react'
import Link from 'next/link'
import { memo, useCallback, useMemo } from 'react'

/* ==========================================================================
   TIPOS E INTERFACES
   ========================================================================== */

export interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface AreaHeroProps {
  /** Área jurídica para exibir */
  area: LegalArea
  /** Idioma atual */
  locale: Locale
  /** Items do breadcrumb */
  breadcrumbs?: BreadcrumbItem[]
  /** Se deve exibir estatísticas */
  showStats?: boolean
  /** Se deve exibir botão de contato */
  showContactButton?: boolean
  /** Callback para clique no botão de contato */
  onContactClick?: () => void
  /** Classe CSS adicional */
  className?: string
}

interface StatItem {
  label: string
  value: string | number
  icon: typeof Shield
  color: string
}

/* ==========================================================================
   CONFIGURAÇÕES
   ========================================================================== */

const HERO_CONFIG = {
  ANIMATION_DELAY: 0.1,
  STAGGER_DELAY: 0.15,
  ICON_SIZE: 24,
  STAT_ICON_SIZE: 20,
  BACKGROUND_GRADIENT: 'from-blue-50 to-white dark:from-blue-950/20 dark:to-background'
} as const

const CONTACT_MESSAGES = {
  'pt-br': {
    contact: 'Falar com Especialista',
    stats: {
      experience: 'Anos de Experiência',
      cases: 'Casos de Sucesso',
      rate: 'Taxa de Sucesso',
      clients: 'Clientes Atendidos'
    }
  },
  'en': {
    contact: 'Talk to Specialist',
    stats: {
      experience: 'Years of Experience',
      cases: 'Success Cases',
      rate: 'Success Rate',
      clients: 'Clients Served'
    }
  },
  'es': {
    contact: 'Hablar con Especialista',
    stats: {
      experience: 'Años de Experiencia',
      cases: 'Casos de Éxito',
      rate: 'Tasa de Éxito',
      clients: 'Clientes Atendidos'
    }
  },
  'de': {
    contact: 'Mit Experten Sprechen',
    stats: {
      experience: 'Jahre Erfahrung',
      cases: 'Erfolgsfälle',
      rate: 'Erfolgsquote',
      clients: 'Betreute Kunden'
    }
  }
} as const

/* ==========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================== */

/**
 * Componente AreaHero
 *
 * Hero section especializado para páginas de áreas jurídicas com breadcrumbs,
 * informações detalhadas, estatísticas e call-to-action otimizado.
 *
 * @example
 * ```tsx
 * <AreaHero
 *   area={area}
 *   locale="pt-br"
 *   breadcrumbs={[
 *     { name: 'Home', href: '/' },
 *     { name: 'Áreas', href: '/areas' },
 *     { name: area.title['pt-br'], href: `/areas/${area.slug}`, current: true }
 *   ]}
 *   showStats
 *   showContactButton
 *   onContactClick={() => trackContact(area.id)}
 * />
 * ```
 */
export const AreaHero = memo<AreaHeroProps>(({
  area,
  locale,
  breadcrumbs = [],
  showStats = true,
  showContactButton = true,
  onContactClick,
  className
}) => {
  // Dados localizados
  const localizedData = useMemo(() => ({
    title: area.title[locale],
    description: area.description[locale],
    cta: area.cta?.[locale] || CONTACT_MESSAGES[locale].contact
  }), [area, locale])

  // Estatísticas da área
  const stats = useMemo<StatItem[]>(() => {
    const messages = CONTACT_MESSAGES[locale].stats
    const items: StatItem[] = []

    if (area.experienceYears) {
      items.push({
        label: messages.experience,
        value: `${area.experienceYears}+`,
        icon: Clock,
        color: 'text-blue-600'
      })
    }

    if (area.successCases) {
      items.push({
        label: messages.cases,
        value: `${area.successCases}+`,
        icon: Shield,
        color: 'text-green-600'
      })
    }

    if (area.successRate) {
      items.push({
        label: messages.rate,
        value: `${area.successRate}%`,
        icon: Star,
        color: 'text-yellow-600'
      })
    }

    return items
  }, [area, locale])

  // Handler para analytics
  const handleContactClick = useCallback(() => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_area_hero', {
        area_id: area.id,
        area_slug: area.slug,
        area_title: localizedData.title,
        page_location: window.location.href
      })
    }

    onContactClick?.()
  }, [area, localizedData.title, onContactClick])

  // Esquema de cores baseado na área
  const colorScheme = useMemo(() => {
    const primary = area.color?.primary || '#1e40af'
    const secondary = area.color?.secondary || '#e0f2fe'
    const accent = area.color?.accent || '#0369a1'

    return {
      primary,
      secondary,
      accent,
      backgroundClass: `bg-gradient-to-br ${HERO_CONFIG.BACKGROUND_GRADIENT}`,
      badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    }
  }, [area.color])

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={cn(
        'relative py-16 lg:py-24 overflow-hidden',
        colorScheme.backgroundClass,
        className
      )}
      role="banner"
      aria-labelledby="area-hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-background/80" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              variants={staggerChild}
              className="mb-8"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="w-4 h-4 mx-2" />
                    )}
                    {item.current ? (
                      <span
                        className="font-medium text-foreground"
                        aria-current="page"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Lado Esquerdo - Título e Descrição */}
            <div className="lg:col-span-2 space-y-6">
              {/* Badge de Destaque */}
              {area.featured && (
                <motion.div variants={staggerChild}>
                  <Badge
                    variant="secondary"
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1',
                      colorScheme.badgeClass
                    )}
                  >
                    <Star className="w-3 h-3" />
                    {locale === 'pt-br' ? 'Área em Destaque' :
                     locale === 'en' ? 'Featured Area' :
                     locale === 'es' ? 'Área Destacada' :
                     'Hervorgehobener Bereich'}
                  </Badge>
                </motion.div>
              )}

              {/* Título */}
              <motion.div variants={staggerChild}>
                <h1
                  id="area-hero-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                >
                  {localizedData.title}
                </h1>
              </motion.div>

              {/* Descrição */}
              <motion.div variants={staggerChild}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {localizedData.description}
                </p>
              </motion.div>

              {/* Call-to-Action */}
              {showContactButton && (
                <motion.div
                  variants={staggerChild}
                  className="pt-4"
                >
                  <Button
                    size="lg"
                    onClick={handleContactClick}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: colorScheme.primary }}
                  >
                    {localizedData.cta}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Lado Direito - Estatísticas */}
            {showStats && stats.length > 0 && (
              <motion.div
                variants={staggerChild}
                className="lg:col-span-1"
              >
                <Card className="p-6 bg-white/80 dark:bg-card/80 backdrop-blur-sm border-0 shadow-xl">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {locale === 'pt-br' ? 'Nossa Experiência' :
                       locale === 'en' ? 'Our Experience' :
                       locale === 'es' ? 'Nuestra Experiencia' :
                       'Unsere Erfahrung'}
                    </h3>

                    <div className="space-y-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: index * 0.1,
                                duration: 0.5
                              }
                            }
                          }}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              'p-2 rounded-lg bg-background/80',
                              stat.color
                            )}>
                              <stat.icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">
                              {stat.label}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-foreground">
                            {stat.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
})

// DisplayName para debugging
AreaHero.displayName = 'AreaHero'

/* ==========================================================================
   HOOKS E UTILITÁRIOS
   ========================================================================== */

/**
 * Hook para analytics do AreaHero
 */
export const useAreaHeroAnalytics = () => {
  const trackImpression = useCallback((area: LegalArea) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_hero_impression', {
        area_id: area.id,
        area_slug: area.slug,
        is_featured: area.featured,
        page_location: window.location.href
      })
    }
  }, [])

  const trackContactClick = useCallback((area: LegalArea, cta: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_hero_contact', {
        area_id: area.id,
        area_slug: area.slug,
        cta_text: cta,
        page_location: window.location.href
      })
    }
  }, [])

  const trackStatView = useCallback((area: LegalArea, statType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_hero_stat_view', {
        area_id: area.id,
        stat_type: statType,
        page_location: window.location.href
      })
    }
  }, [])

  return {
    trackImpression,
    trackContactClick,
    trackStatView
  }
}

/* ==========================================================================
   EXPORTAÇÕES
   ========================================================================== */

export default AreaHero
export type { AreaHeroProps, BreadcrumbItem, StatItem }
