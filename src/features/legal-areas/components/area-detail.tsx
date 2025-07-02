/**
 * @fileoverview Componente detalhado para áreas jurídicas
 *
 * Seção completa com serviços, processo de trabalho, benefícios e call-to-action.
 * Otimizado para conversão e experiência do usuário com animações suaves.
 *
 * @example
 * ```tsx
 * <AreaDetail
 *   area={legalArea}
 *   locale="pt-br"
 *   showServices
 *   showProcess
 *   onContactClick={() => handleContact()}
 * />
 * ```
 */

'use client'

import { fadeInUp, staggerChild, staggerContainer } from '@/animations/variants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LegalArea, Locale } from '@/types/legal'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Shield,
  Star,
  Users
} from 'lucide-react'
import { memo, useCallback, useMemo, useState } from 'react'

/* ==========================================================================
   TIPOS E INTERFACES
   ========================================================================== */

interface AreaDetailProps {
  /** Área jurídica para exibir */
  area: LegalArea
  /** Idioma atual */
  locale: Locale
  /** Se deve exibir seção de serviços */
  showServices?: boolean
  /** Se deve exibir processo de trabalho */
  showProcess?: boolean
  /** Se deve exibir benefícios */
  showBenefits?: boolean
  /** Se deve exibir formulário de contato */
  showContact?: boolean
  /** Callback para clique em contato */
  onContactClick?: (method: 'whatsapp' | 'email' | 'phone') => void
  /** Classe CSS adicional */
  className?: string
}

interface ProcessStep {
  step: number
  title: string
  description: string
  icon: typeof Shield
  estimatedTime?: string
}

interface Benefit {
  title: string
  description: string
  icon: typeof CheckCircle2
}

/* ==========================================================================
   CONFIGURAÇÕES
   ========================================================================== */

const DETAIL_CONFIG = {
  ANIMATION_DELAY: 0.1,
  STAGGER_DELAY: 0.15,
  SERVICE_ICON_SIZE: 20,
  PROCESS_ICON_SIZE: 24,
  MAX_SERVICES_INITIAL: 6,
  SECTION_SPACING: 'space-y-16 lg:space-y-24'
} as const

const LOCALIZED_CONTENT = {
  'pt-br': {
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas e especializadas para suas necessidades jurídicas',
      showMore: 'Ver Mais Serviços',
      showLess: 'Ver Menos'
    },
    process: {
      title: 'Como Trabalhamos',
      subtitle: 'Metodologia comprovada para alcançar os melhores resultados'
    },
    benefits: {
      title: 'Por Que Escolher Nossa Expertise',
      subtitle: 'Diferenciais que fazem a diferença no seu caso'
    },
    contact: {
      title: 'Pronto para Começar?',
      subtitle: 'Entre em contato conosco e receba uma consulta personalizada',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      phone: 'Telefone',
      cta: 'Falar com Especialista'
    },
    time: {
      hours: 'horas',
      days: 'dias',
      weeks: 'semanas',
      months: 'meses'
    }
  },
  'en': {
    services: {
      title: 'Our Services',
      subtitle: 'Complete and specialized solutions for your legal needs',
      showMore: 'Show More Services',
      showLess: 'Show Less'
    },
    process: {
      title: 'How We Work',
      subtitle: 'Proven methodology to achieve the best results'
    },
    benefits: {
      title: 'Why Choose Our Expertise',
      subtitle: 'Differentials that make a difference in your case'
    },
    contact: {
      title: 'Ready to Get Started?',
      subtitle: 'Contact us and receive a personalized consultation',
      whatsapp: 'WhatsApp',
      email: 'Email',
      phone: 'Phone',
      cta: 'Talk to Specialist'
    },
    time: {
      hours: 'hours',
      days: 'days',
      weeks: 'weeks',
      months: 'months'
    }
  },
  'es': {
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones completas y especializadas para sus necesidades jurídicas',
      showMore: 'Ver Más Servicios',
      showLess: 'Ver Menos'
    },
    process: {
      title: 'Cómo Trabajamos',
      subtitle: 'Metodología comprobada para alcanzar los mejores resultados'
    },
    benefits: {
      title: 'Por Qué Elegir Nuestra Experiencia',
      subtitle: 'Diferenciales que marcan la diferencia en su caso'
    },
    contact: {
      title: '¿Listo para Comenzar?',
      subtitle: 'Contáctenos y reciba una consulta personalizada',
      whatsapp: 'WhatsApp',
      email: 'Email',
      phone: 'Teléfono',
      cta: 'Hablar con Especialista'
    },
    time: {
      hours: 'horas',
      days: 'días',
      weeks: 'semanas',
      months: 'meses'
    }
  },
  'de': {
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Vollständige und spezialisierte Lösungen für Ihre Rechtsbedürfnisse',
      showMore: 'Mehr Dienstleistungen Anzeigen',
      showLess: 'Weniger Anzeigen'
    },
    process: {
      title: 'Wie Wir Arbeiten',
      subtitle: 'Bewährte Methodik zur Erzielung der besten Ergebnisse'
    },
    benefits: {
      title: 'Warum Unsere Expertise Wählen',
      subtitle: 'Unterschiede, die den Unterschied in Ihrem Fall machen'
    },
    contact: {
      title: 'Bereit Anzufangen?',
      subtitle: 'Kontaktieren Sie uns und erhalten Sie eine persönliche Beratung',
      whatsapp: 'WhatsApp',
      email: 'E-Mail',
      phone: 'Telefon',
      cta: 'Mit Experten Sprechen'
    },
    time: {
      hours: 'Stunden',
      days: 'Tage',
      weeks: 'Wochen',
      months: 'Monate'
    }
  }
} as const

/* ==========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================== */

/**
 * Componente AreaDetail
 *
 * Exibe informações detalhadas sobre uma área jurídica incluindo serviços,
 * processo de trabalho, benefícios e opções de contato.
 *
 * @example
 * ```tsx
 * <AreaDetail
 *   area={area}
 *   locale="pt-br"
 *   showServices
 *   showProcess
 *   showBenefits
 *   showContact
 *   onContactClick={(method) => handleContact(method)}
 * />
 * ```
 */
export const AreaDetail = memo<AreaDetailProps>(({
  area,
  locale,
  showServices = true,
  showProcess = true,
  showBenefits = true,
  showContact = true,
  onContactClick,
  className
}) => {
  const [showAllServices, setShowAllServices] = useState(false)
  const content = LOCALIZED_CONTENT[locale]

  // Dados localizados
  const localizedData = useMemo(() => ({
    services: area.services[locale] || [],
    fullDescription: area.fullDescription?.[locale] || area.description[locale]
  }), [area, locale])

  // Serviços com controle de exibição
  const displayedServices = useMemo(() => {
    return showAllServices
      ? localizedData.services
      : localizedData.services.slice(0, DETAIL_CONFIG.MAX_SERVICES_INITIAL)
  }, [localizedData.services, showAllServices])

  // Processo de trabalho padrão
  const processSteps = useMemo<ProcessStep[]>(() => [
    {
      step: 1,
      title: locale === 'pt-br' ? 'Análise Inicial' :
             locale === 'en' ? 'Initial Analysis' :
             locale === 'es' ? 'Análisis Inicial' :
             'Erste Analyse',
      description: locale === 'pt-br' ? 'Avaliação completa do seu caso e identificação das melhores estratégias' :
                   locale === 'en' ? 'Complete evaluation of your case and identification of the best strategies' :
                   locale === 'es' ? 'Evaluación completa de su caso e identificación de las mejores estrategias' :
                   'Vollständige Bewertung Ihres Falls und Identifizierung der besten Strategien',
      icon: Users,
      estimatedTime: '1-2 dias'
    },
    {
      step: 2,
      title: locale === 'pt-br' ? 'Planejamento' :
             locale === 'en' ? 'Planning' :
             locale === 'es' ? 'Planificación' :
             'Planung',
      description: locale === 'pt-br' ? 'Elaboração de estratégia personalizada e cronograma de ações' :
                   locale === 'en' ? 'Development of personalized strategy and action timeline' :
                   locale === 'es' ? 'Elaboración de estrategia personalizada y cronograma de acciones' :
                   'Entwicklung einer personalisierten Strategie und Aktionszeitplan',
      icon: Shield,
      estimatedTime: '2-3 dias'
    },
    {
      step: 3,
      title: locale === 'pt-br' ? 'Execução' :
             locale === 'en' ? 'Execution' :
             locale === 'es' ? 'Ejecución' :
             'Ausführung',
      description: locale === 'pt-br' ? 'Implementação das ações planejadas com acompanhamento constante' :
                   locale === 'en' ? 'Implementation of planned actions with constant monitoring' :
                   locale === 'es' ? 'Implementación de las acciones planificadas con seguimiento constante' :
                   'Umsetzung der geplanten Maßnahmen mit ständiger Überwachung',
      icon: Play,
      estimatedTime: 'Variável'
    },
    {
      step: 4,
      title: locale === 'pt-br' ? 'Acompanhamento' :
             locale === 'en' ? 'Follow-up' :
             locale === 'es' ? 'Seguimiento' :
             'Nachverfolgung',
      description: locale === 'pt-br' ? 'Monitoramento contínuo e ajustes conforme necessário' :
                   locale === 'en' ? 'Continuous monitoring and adjustments as needed' :
                   locale === 'es' ? 'Monitoreo continuo y ajustes según sea necesario' :
                   'Kontinuierliche Überwachung und Anpassungen nach Bedarf',
      icon: Clock,
      estimatedTime: 'Contínuo'
    }
  ], [locale])

  // Benefícios padrão
  const benefits = useMemo<Benefit[]>(() => [
    {
      title: locale === 'pt-br' ? 'Expertise Especializada' :
             locale === 'en' ? 'Specialized Expertise' :
             locale === 'es' ? 'Experiencia Especializada' :
             'Spezialisierte Expertise',
      description: locale === 'pt-br' ? 'Anos de experiência focada exclusivamente nesta área' :
                   locale === 'en' ? 'Years of experience focused exclusively on this area' :
                   locale === 'es' ? 'Años de experiencia enfocada exclusivamente en esta área' :
                   'Jahre der Erfahrung, die ausschließlich auf diesen Bereich fokussiert ist',
      icon: Star
    },
    {
      title: locale === 'pt-br' ? 'Acompanhamento Personalizado' :
             locale === 'en' ? 'Personalized Follow-up' :
             locale === 'es' ? 'Seguimiento Personalizado' :
             'Personalisierte Betreuung',
      description: locale === 'pt-br' ? 'Atenção dedicada e comunicação constante durante todo o processo' :
                   locale === 'en' ? 'Dedicated attention and constant communication throughout the process' :
                   locale === 'es' ? 'Atención dedicada y comunicación constante durante todo el proceso' :
                   'Engagierte Aufmerksamkeit und ständige Kommunikation während des gesamten Prozesses',
      icon: Users
    },
    {
      title: locale === 'pt-br' ? 'Resultados Comprovados' :
             locale === 'en' ? 'Proven Results' :
             locale === 'es' ? 'Resultados Comprobados' :
             'Bewährte Ergebnisse',
      description: locale === 'pt-br' ? 'Histórico consistente de sucesso em casos similares' :
                   locale === 'en' ? 'Consistent track record of success in similar cases' :
                   locale === 'es' ? 'Historial consistente de éxito en casos similares' :
                   'Konsistente Erfolgsgeschichte bei ähnlichen Fällen',
      icon: CheckCircle2
    }
  ], [locale])

  // Handlers
  const handleContactClick = useCallback((method: 'whatsapp' | 'email' | 'phone') => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_detail_contact', {
        area_id: area.id,
        contact_method: method,
        page_location: window.location.href
      })
    }

    onContactClick?.(method)
  }, [area.id, onContactClick])

  const toggleServices = useCallback(() => {
    setShowAllServices(prev => !prev)

    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_services_toggle', {
        area_id: area.id,
        action: showAllServices ? 'collapse' : 'expand',
        total_services: localizedData.services.length
      })
    }
  }, [area.id, showAllServices, localizedData.services.length])

  return (
    <div className={cn('py-16 lg:py-24', DETAIL_CONFIG.SECTION_SPACING, className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Descrição Completa */}
        {area.fullDescription && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 lg:mb-24"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: localizedData.fullDescription }}
              />
            </div>
          </motion.div>
        )}

        {/* Seção de Serviços */}
        {showServices && localizedData.services.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 lg:mb-24"
            aria-labelledby="services-title"
          >
            <div className="text-center mb-12">
              <motion.h2
                id="services-title"
                variants={staggerChild}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {content.services.title}
              </motion.h2>
              <motion.p
                variants={staggerChild}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                {content.services.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {displayedServices.map((service, index) => (
                  <motion.div
                    key={`${service}-${index}`}
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
                    layout
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              {service}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {localizedData.services.length > DETAIL_CONFIG.MAX_SERVICES_INITIAL && (
              <motion.div
                variants={staggerChild}
                className="text-center mt-8"
              >
                <Button
                  variant="outline"
                  onClick={toggleServices}
                  className="inline-flex items-center gap-2"
                >
                  {showAllServices ? content.services.showLess : content.services.showMore}
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    showAllServices && "rotate-180"
                  )} />
                </Button>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* Processo de Trabalho */}
        {showProcess && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 lg:mb-24"
            aria-labelledby="process-title"
          >
            <div className="text-center mb-12">
              <motion.h2
                id="process-title"
                variants={staggerChild}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {content.process.title}
              </motion.h2>
              <motion.p
                variants={staggerChild}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                {content.process.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.15,
                        duration: 0.6
                      }
                    }
                  }}
                  className="relative"
                >
                  {/* Linha conectora */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4" />
                  )}

                  <Card className="text-center hover:shadow-lg transition-all duration-300 relative z-10">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div className="mb-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-2">
                          {step.step}
                        </span>
                        <h3 className="font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>

                      {step.estimatedTime && (
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.estimatedTime}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Benefícios */}
        {showBenefits && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 lg:mb-24"
            aria-labelledby="benefits-title"
          >
            <div className="text-center mb-12">
              <motion.h2
                id="benefits-title"
                variants={staggerChild}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {content.benefits.title}
              </motion.h2>
              <motion.p
                variants={staggerChild}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                {content.benefits.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {benefit.title}
                      </h3>

                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Seção de Contato */}
        {showContact && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12"
            aria-labelledby="contact-title"
          >
            <div className="text-center">
              <motion.h2
                id="contact-title"
                variants={staggerChild}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {content.contact.title}
              </motion.h2>
              <motion.p
                variants={staggerChild}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                {content.contact.subtitle}
              </motion.p>

              <motion.div
                variants={staggerChild}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  onClick={() => handleContactClick('whatsapp')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {content.contact.whatsapp}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleContactClick('email')}
                  className="px-8 py-4"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {content.contact.email}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleContactClick('phone')}
                  className="px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {content.contact.phone}
                </Button>
              </motion.div>
            </div>
          </motion.section>
        )}

      </div>
    </div>
  )
})

// DisplayName para debugging
AreaDetail.displayName = 'AreaDetail'

/* ==========================================================================
   HOOKS E UTILITÁRIOS
   ========================================================================== */

/**
 * Hook para analytics do AreaDetail
 */
export const useAreaDetailAnalytics = () => {
  const trackServiceView = useCallback((areaId: string, serviceIndex: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_service_view', {
        area_id: areaId,
        service_index: serviceIndex,
        page_location: window.location.href
      })
    }
  }, [])

  const trackProcessStepView = useCallback((areaId: string, step: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_process_step_view', {
        area_id: areaId,
        process_step: step,
        page_location: window.location.href
      })
    }
  }, [])

  const trackBenefitView = useCallback((areaId: string, benefit: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'area_benefit_view', {
        area_id: areaId,
        benefit_title: benefit,
        page_location: window.location.href
      })
    }
  }, [])

  return {
    trackServiceView,
    trackProcessStepView,
    trackBenefitView
  }
}

/* ==========================================================================
   EXPORTAÇÕES
   ========================================================================== */

export default AreaDetail
export type { AreaDetailProps, Benefit, ProcessStep }

