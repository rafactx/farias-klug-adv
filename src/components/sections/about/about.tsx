/**
 * @fileoverview Seção About principal
 *
 * Componente da seção "Sobre" com informações do escritório, missão,
 * valores, estatísticas e credenciais. Otimizado para conversão e storytelling.
 *
 * @example
 * ```tsx
 * <About
 *   locale="pt-br"
 *   variant="default"
 *   showStats
 *   showCredentials
 * />
 * ```
 */

'use client'

import { slideInLeft, slideInRight, staggerChild, staggerContainer } from '@/animations/variants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Locale } from '@/types/globals'
import { motion } from 'framer-motion'
import {
  Award,
  Calendar,
  Heart,
  MapPin,
  Scale,
  Target,
  Trophy,
  Users
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useCallback, useMemo } from 'react'

/* ==========================================================================
   TIPOS E INTERFACES
   ========================================================================== */

export interface AboutProps {
  /** Idioma atual */
  locale: Locale
  /** Variante do componente */
  variant?: 'default' | 'detailed' | 'compact'
  /** Se deve exibir estatísticas */
  showStats?: boolean
  /** Se deve exibir credenciais */
  showCredentials?: boolean
  /** Se deve exibir imagem principal */
  showImage?: boolean
  /** Se deve exibir botão de contato */
  showContactButton?: boolean
  /** Callback para clique no botão de contato */
  onContactClick?: () => void
  /** Classe CSS adicional */
  className?: string
}

interface Statistic {
  label: string
  value: string | number
  icon: typeof Users
  color: string
  description?: string
}

interface Value {
  title: string
  description: string
  icon: typeof Scale
}

interface Credential {
  title: string
  description: string
  year?: string
  issuer?: string
}

/* ==========================================================================
   CONFIGURAÇÕES
   ========================================================================== */

const ABOUT_CONFIG = {
  ANIMATION_DELAY: 0.1,
  STAGGER_DELAY: 0.15,
  STAT_ICON_SIZE: 24,
  VALUE_ICON_SIZE: 32,
  IMAGE_ASPECT_RATIO: '4/3',
  BACKGROUND_GRADIENT: 'from-blue-50/50 via-white to-green-50/50 dark:from-blue-950/20 dark:via-background dark:to-green-950/20'
} as const

const LOCALIZED_CONTENT = {
  'pt-br': {
    title: 'Sobre Nós',
    subtitle: 'Excelência em Direito Ambiental',
    description: 'Somos um escritório de advocacia especializado em direito ambiental, oferecendo soluções jurídicas completas e estratégicas para empresas e pessoas físicas em Santa Catarina.',
    fullDescription: 'Com anos de experiência e expertise consolidada, atendemos desde grandes corporações até pequenos produtores rurais, sempre com o compromisso de encontrar soluções eficientes e sustentáveis para cada caso.',
    mission: {
      title: 'Nossa Missão',
      text: 'Proteger os interesses dos nossos clientes através de estratégias jurídicas inovadoras e sustentáveis, contribuindo para o desenvolvimento econômico responsável.'
    },
    values: {
      title: 'Nossos Valores',
      items: [
        {
          title: 'Excelência',
          description: 'Buscamos sempre a mais alta qualidade em todos os nossos serviços',
          icon: Trophy
        },
        {
          title: 'Ética',
          description: 'Atuamos com transparência e integridade em todas as nossas relações',
          icon: Scale
        },
        {
          title: 'Compromisso',
          description: 'Dedicação total aos interesses e objetivos dos nossos clientes',
          icon: Target
        },
        {
          title: 'Sustentabilidade',
          description: 'Promovemos práticas que equilibram desenvolvimento e preservação',
          icon: Heart
        }
      ]
    },
    stats: {
      title: 'Nossa Trajetória',
      items: [
        {
          label: 'Anos de Experiência',
          value: '15+',
          icon: Calendar,
          color: 'text-blue-600',
          description: 'Atuando no mercado'
        },
        {
          label: 'Casos de Sucesso',
          value: '1,200+',
          icon: Trophy,
          color: 'text-green-600',
          description: 'Resultados positivos'
        },
        {
          label: 'Clientes Atendidos',
          value: '500+',
          icon: Users,
          color: 'text-purple-600',
          description: 'Empresas e pessoas físicas'
        },
        {
          label: 'Cidades Atendidas',
          value: '50+',
          icon: MapPin,
          color: 'text-orange-600',
          description: 'Em Santa Catarina'
        }
      ]
    },
    credentials: {
      title: 'Reconhecimento',
      subtitle: 'Credenciais que comprovam nossa expertise',
      items: [
        {
          title: 'OAB/SC',
          description: 'Inscritos na Ordem dos Advogados do Brasil - Seção Santa Catarina',
          year: '2008'
        },
        {
          title: 'Especialização em Direito Ambiental',
          description: 'Pós-graduação em Direito Ambiental pela UFSC',
          year: '2010'
        },
        {
          title: 'Certificação ISO 14001',
          description: 'Gestão Ambiental - Consultoria certificada',
          year: '2018'
        }
      ]
    },
    cta: {
      text: 'Conheça Nossa Equipe',
      href: '/sobre'
    }
  },
  'en': {
    title: 'About Us',
    subtitle: 'Excellence in Environmental Law',
    description: 'We are a law firm specialized in environmental law, offering complete and strategic legal solutions for companies and individuals in Santa Catarina.',
    fullDescription: 'With years of experience and consolidated expertise, we serve from large corporations to small rural producers, always committed to finding efficient and sustainable solutions for each case.',
    mission: {
      title: 'Our Mission',
      text: 'Protect our clients\' interests through innovative and sustainable legal strategies, contributing to responsible economic development.'
    },
    values: {
      title: 'Our Values',
      items: [
        {
          title: 'Excellence',
          description: 'We always seek the highest quality in all our services',
          icon: Trophy
        },
        {
          title: 'Ethics',
          description: 'We act with transparency and integrity in all our relationships',
          icon: Scale
        },
        {
          title: 'Commitment',
          description: 'Total dedication to our clients\' interests and objectives',
          icon: Target
        },
        {
          title: 'Sustainability',
          description: 'We promote practices that balance development and preservation',
          icon: Heart
        }
      ]
    },
    stats: {
      title: 'Our Journey',
      items: [
        {
          label: 'Years of Experience',
          value: '15+',
          icon: Calendar,
          color: 'text-blue-600',
          description: 'Operating in the market'
        },
        {
          label: 'Success Cases',
          value: '1,200+',
          icon: Trophy,
          color: 'text-green-600',
          description: 'Positive results'
        },
        {
          label: 'Clients Served',
          value: '500+',
          icon: Users,
          color: 'text-purple-600',
          description: 'Companies and individuals'
        },
        {
          label: 'Cities Served',
          value: '50+',
          icon: MapPin,
          color: 'text-orange-600',
          description: 'In Santa Catarina'
        }
      ]
    },
    credentials: {
      title: 'Recognition',
      subtitle: 'Credentials that prove our expertise',
      items: [
        {
          title: 'OAB/SC',
          description: 'Registered with the Brazilian Bar Association - Santa Catarina Section',
          year: '2008'
        },
        {
          title: 'Environmental Law Specialization',
          description: 'Post-graduation in Environmental Law from UFSC',
          year: '2010'
        },
        {
          title: 'ISO 14001 Certification',
          description: 'Environmental Management - Certified Consulting',
          year: '2018'
        }
      ]
    },
    cta: {
      text: 'Meet Our Team',
      href: '/en/sobre'
    }
  },
  'es': {
    title: 'Sobre Nosotros',
    subtitle: 'Excelencia en Derecho Ambiental',
    description: 'Somos un bufete de abogados especializado en derecho ambiental, ofreciendo soluciones jurídicas completas y estratégicas para empresas y personas físicas en Santa Catarina.',
    fullDescription: 'Con años de experiencia y expertise consolidada, atendemos desde grandes corporaciones hasta pequeños productores rurales, siempre con el compromiso de encontrar soluciones eficientes y sostenibles para cada caso.',
    mission: {
      title: 'Nuestra Misión',
      text: 'Proteger los intereses de nuestros clientes a través de estrategias jurídicas innovadoras y sostenibles, contribuyendo al desarrollo económico responsable.'
    },
    values: {
      title: 'Nuestros Valores',
      items: [
        {
          title: 'Excelencia',
          description: 'Buscamos siempre la más alta calidad en todos nuestros servicios',
          icon: Trophy
        },
        {
          title: 'Ética',
          description: 'Actuamos con transparencia e integridad en todas nuestras relaciones',
          icon: Scale
        },
        {
          title: 'Compromiso',
          description: 'Dedicación total a los intereses y objetivos de nuestros clientes',
          icon: Target
        },
        {
          title: 'Sostenibilidad',
          description: 'Promovemos prácticas que equilibran desarrollo y preservación',
          icon: Heart
        }
      ]
    },
    stats: {
      title: 'Nuestra Trayectoria',
      items: [
        {
          label: 'Años de Experiencia',
          value: '15+',
          icon: Calendar,
          color: 'text-blue-600',
          description: 'Actuando en el mercado'
        },
        {
          label: 'Casos de Éxito',
          value: '1,200+',
          icon: Trophy,
          color: 'text-green-600',
          description: 'Resultados positivos'
        },
        {
          label: 'Clientes Atendidos',
          value: '500+',
          icon: Users,
          color: 'text-purple-600',
          description: 'Empresas y personas físicas'
        },
        {
          label: 'Ciudades Atendidas',
          value: '50+',
          icon: MapPin,
          color: 'text-orange-600',
          description: 'En Santa Catarina'
        }
      ]
    },
    credentials: {
      title: 'Reconocimiento',
      subtitle: 'Credenciales que comprueban nuestra experiencia',
      items: [
        {
          title: 'OAB/SC',
          description: 'Inscritos en el Colegio de Abogados de Brasil - Sección Santa Catarina',
          year: '2008'
        },
        {
          title: 'Especialización en Derecho Ambiental',
          description: 'Posgrado en Derecho Ambiental por la UFSC',
          year: '2010'
        },
        {
          title: 'Certificación ISO 14001',
          description: 'Gestión Ambiental - Consultoría certificada',
          year: '2018'
        }
      ]
    },
    cta: {
      text: 'Conoce Nuestro Equipo',
      href: '/es/sobre'
    }
  },
  'de': {
    title: 'Über Uns',
    subtitle: 'Exzellenz im Umweltrecht',
    description: 'Wir sind eine Anwaltskanzlei, die sich auf Umweltrecht spezialisiert hat und vollständige und strategische Rechtslösungen für Unternehmen und Privatpersonen in Santa Catarina anbietet.',
    fullDescription: 'Mit jahrelanger Erfahrung und konsolidierter Expertise betreuen wir von großen Konzernen bis hin zu kleinen Landwirten, immer mit dem Engagement, effiziente und nachhaltige Lösungen für jeden Fall zu finden.',
    mission: {
      title: 'Unsere Mission',
      text: 'Die Interessen unserer Kunden durch innovative und nachhaltige Rechtsstrategien zu schützen und zur verantwortlichen wirtschaftlichen Entwicklung beizutragen.'
    },
    values: {
      title: 'Unsere Werte',
      items: [
        {
          title: 'Exzellenz',
          description: 'Wir streben immer nach höchster Qualität in allen unseren Dienstleistungen',
          icon: Trophy
        },
        {
          title: 'Ethik',
          description: 'Wir handeln mit Transparenz und Integrität in allen unseren Beziehungen',
          icon: Scale
        },
        {
          title: 'Engagement',
          description: 'Vollständige Hingabe an die Interessen und Ziele unserer Kunden',
          icon: Target
        },
        {
          title: 'Nachhaltigkeit',
          description: 'Wir fördern Praktiken, die Entwicklung und Erhaltung ausbalancieren',
          icon: Heart
        }
      ]
    },
    stats: {
      title: 'Unsere Entwicklung',
      items: [
        {
          label: 'Jahre Erfahrung',
          value: '15+',
          icon: Calendar,
          color: 'text-blue-600',
          description: 'Am Markt tätig'
        },
        {
          label: 'Erfolgsfälle',
          value: '1,200+',
          icon: Trophy,
          color: 'text-green-600',
          description: 'Positive Ergebnisse'
        },
        {
          label: 'Betreute Kunden',
          value: '500+',
          icon: Users,
          color: 'text-purple-600',
          description: 'Unternehmen und Privatpersonen'
        },
        {
          label: 'Betreute Städte',
          value: '50+',
          icon: MapPin,
          color: 'text-orange-600',
          description: 'In Santa Catarina'
        }
      ]
    },
    credentials: {
      title: 'Anerkennung',
      subtitle: 'Zertifizierungen, die unsere Kompetenz belegen',
      items: [
        {
          title: 'OAB/SC',
          description: 'Registriert bei der Brasilianischen Anwaltskammer - Sektion Santa Catarina',
          year: '2008'
        },
        {
          title: 'Spezialisierung Umweltrecht',
          description: 'Postgraduierung in Umweltrecht an der UFSC',
          year: '2010'
        },
        {
          title: 'ISO 14001 Zertifizierung',
          description: 'Umweltmanagement - Zertifizierte Beratung',
          year: '2018'
        }
      ]
    },
    cta: {
      text: 'Lernen Sie Unser Team Kennen',
      href: '/de/sobre'
    }
  }
} as const

/* ==========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================== */

/**
 * Componente About
 *
 * Seção "Sobre" com informações do escritório, estatísticas, valores
 * e credenciais. Adaptável para diferentes contextos de uso.
 *
 * @example
 * ```tsx
 * <About
 *   locale="pt-br"
 *   variant="detailed"
 *   showStats
 *   showCredentials
 *   showContactButton
 *   onContactClick={() => handleContact()}
 * />
 * ```
 */
export const About = memo<AboutProps>(({
  locale,
  variant = 'default',
  showStats = true,
  showCredentials = true,
  showImage = true,
  showContactButton = true,
  onContactClick,
  className
}) => {
  const content = LOCALIZED_CONTENT[locale]

  // Configuração baseada na variante
  const variantConfig = useMemo(() => {
    switch (variant) {
      case 'compact':
        return {
          showFullDescription: false,
          showValues: false,
          maxStats: 2,
          maxCredentials: 2,
          gridCols: 'md:grid-cols-2',
          spacing: 'space-y-12'
        }
      case 'detailed':
        return {
          showFullDescription: true,
          showValues: true,
          maxStats: 4,
          maxCredentials: 3,
          gridCols: 'md:grid-cols-2 lg:grid-cols-4',
          spacing: 'space-y-16 lg:space-y-24'
        }
      default:
        return {
          showFullDescription: true,
          showValues: true,
          maxStats: 4,
          maxCredentials: 3,
          gridCols: 'md:grid-cols-2 lg:grid-cols-4',
          spacing: 'space-y-16'
        }
    }
  }, [variant])

  // Estatísticas filtradas
  const displayedStats = useMemo(() =>
    content.stats.items.slice(0, variantConfig.maxStats),
    [content.stats.items, variantConfig.maxStats]
  )

  // Credenciais filtradas
  const displayedCredentials = useMemo(() =>
    content.credentials.items.slice(0, variantConfig.maxCredentials),
    [content.credentials.items, variantConfig.maxCredentials]
  )

  // Handler para analytics
  const handleContactClick = useCallback(() => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'about_contact_click', {
        section: 'about',
        variant,
        page_location: window.location.href
      })
    }

    onContactClick?.()
  }, [variant, onContactClick])

  return (
    <section
      className={cn(
        'relative py-16 lg:py-24 overflow-hidden',
        `bg-gradient-to-br ${ABOUT_CONFIG.BACKGROUND_GRADIENT}`,
        className
      )}
      aria-labelledby="about-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn('max-w-7xl mx-auto', variantConfig.spacing)}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              id="about-title"
              variants={staggerChild}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              {content.title}
            </motion.h2>
            <motion.p
              variants={staggerChild}
              className="text-xl md:text-2xl text-primary font-medium mb-6"
            >
              {content.subtitle}
            </motion.p>
            <motion.p
              variants={staggerChild}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {content.description}
            </motion.p>
          </motion.div>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

            {/* Lado Esquerdo - Texto */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="space-y-8"
            >
              {variantConfig.showFullDescription && (
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {content.fullDescription}
                  </p>
                </div>
              )}

              {/* Missão */}
              <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  {content.mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.mission.text}
                </p>
              </div>

              {/* CTA Button */}
              {showContactButton && (
                <div className="pt-4">
                  <Link href={content.cta.href}>
                    <Button
                      size="lg"
                      onClick={handleContactClick}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {content.cta.text}
                      <Users className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Lado Direito - Imagem */}
            {showImage && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/guto-hero.jpg"
                    alt="Escritório Farias Klug Advocacia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Badge de Destaque */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">15+ Anos</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Valores */}
          {variantConfig.showValues && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16"
            >
              <motion.div variants={staggerChild} className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.values.title}
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.values.items.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.6
                        }
                      }
                    }}
                  >
                    <Card className="text-center h-full hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                          {value.icon && <value.icon className="w-8 h-8 text-primary" />}
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          {value.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Estatísticas */}
          {showStats && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16"
            >
              <motion.div variants={staggerChild} className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.stats.title}
                </h3>
              </motion.div>

              <div className={cn('grid grid-cols-1 gap-8', variantConfig.gridCols)}>
                {displayedStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.5
                        }
                      }
                    }}
                  >
                    <Card className="text-center hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-8">
                        <div className={cn(
                          'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                          'bg-primary/10 group-hover:bg-primary/20 transition-colors'
                        )}>
                          <stat.icon className={cn('w-8 h-8', stat.color)} />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                          {stat.value}
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {stat.label}
                        </h4>
                        {stat.description && (
                          <p className="text-sm text-muted-foreground">
                            {stat.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Credenciais */}
          {showCredentials && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={staggerChild} className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.credentials.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {content.credentials.subtitle}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayedCredentials.map((credential, index) => (
                  <motion.div
                    key={credential.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.5
                        }
                      }
                    }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                            {credential.title}
                          </CardTitle>
                          {credential.year && (
                            <Badge variant="outline" className="ml-2">
                              {credential.year}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">
                          {credential.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  )
})

// DisplayName para debugging
About.displayName = 'About'

/* ==========================================================================
   HOOKS E UTILITÁRIOS
   ========================================================================== */

/**
 * Hook para analytics da seção About
 */
export const useAboutAnalytics = () => {
  const trackSectionView = useCallback((section: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'about_section_view', {
        section_name: section,
        page_location: window.location.href
      })
    }
  }, [])

  const trackStatClick = useCallback((statLabel: string, statValue: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'about_stat_click', {
        stat_label: statLabel,
        stat_value: statValue,
        page_location: window.location.href
      })
    }
  }, [])

  const trackValueClick = useCallback((valueTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'about_value_click', {
        value_title: valueTitle,
        page_location: window.location.href
      })
    }
  }, [])

  return {
    trackSectionView,
    trackStatClick,
    trackValueClick
  }
}

/* ==========================================================================
   EXPORTAÇÕES
   ========================================================================== */

export default About
export type { AboutProps, Credential, Statistic, Value }

