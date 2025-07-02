'use client'

import { Locale } from '@/types/globals'
import { motion } from 'framer-motion'
import { Calendar, Heart, MapPin, Scale, Target, Trophy, Users } from 'lucide-react'
import { memo } from 'react'

/* ==========================================================================
   INTERFACES
   ========================================================================== */

export interface AboutProps {
  locale: Locale
  variant?: 'default' | 'detailed' | 'compact'
  showStats?: boolean
  showCredentials?: boolean
  className?: string
}

/* ==========================================================================
   DADOS LOCALIZADOS
   ========================================================================== */

const getContent = (locale: Locale) => {
  const content = {
    'pt-br': {
      title: 'Sobre Nós',
      subtitle: 'Excelência em Direito Ambiental',
      description: 'Somos um escritório de advocacia especializado em direito ambiental, oferecendo soluções jurídicas completas e estratégicas para empresas e pessoas físicas em Santa Catarina.',
      values: [
        {
          title: 'Excelência',
          description: 'Buscamos sempre a mais alta qualidade em todos os nossos serviços',
          iconName: 'Trophy'
        },
        {
          title: 'Ética',
          description: 'Atuamos com transparência e integridade em todas as nossas relações',
          iconName: 'Scale'
        },
        {
          title: 'Compromisso',
          description: 'Dedicação total aos interesses e objetivos dos nossos clientes',
          iconName: 'Target'
        },
        {
          title: 'Sustentabilidade',
          description: 'Promovemos práticas que equilibram desenvolvimento e preservação',
          iconName: 'Heart'
        }
      ],
      stats: [
        {
          label: 'Anos de Experiência',
          value: '15+',
          iconName: 'Calendar',
          description: 'Atuando no mercado'
        },
        {
          label: 'Casos de Sucesso',
          value: '1,200+',
          iconName: 'Trophy',
          description: 'Resultados positivos'
        },
        {
          label: 'Clientes Atendidos',
          value: '500+',
          iconName: 'Users',
          description: 'Empresas e pessoas físicas'
        },
        {
          label: 'Cidades Atendidas',
          value: '50+',
          iconName: 'MapPin',
          description: 'Em Santa Catarina'
        }
      ]
    },
    'en': {
      title: 'About Us',
      subtitle: 'Excellence in Environmental Law',
      description: 'We are a law firm specialized in environmental law, offering complete and strategic legal solutions for companies and individuals in Santa Catarina.',
      values: [
        {
          title: 'Excellence',
          description: 'We always seek the highest quality in all our services',
          iconName: 'Trophy'
        },
        {
          title: 'Ethics',
          description: 'We act with transparency and integrity in all our relationships',
          iconName: 'Scale'
        },
        {
          title: 'Commitment',
          description: 'Total dedication to our clients\' interests and objectives',
          iconName: 'Target'
        },
        {
          title: 'Sustainability',
          description: 'We promote practices that balance development and preservation',
          iconName: 'Heart'
        }
      ],
      stats: [
        {
          label: 'Years of Experience',
          value: '15+',
          iconName: 'Calendar',
          description: 'Operating in the market'
        },
        {
          label: 'Success Cases',
          value: '1,200+',
          iconName: 'Trophy',
          description: 'Positive results'
        },
        {
          label: 'Clients Served',
          value: '500+',
          iconName: 'Users',
          description: 'Companies and individuals'
        },
        {
          label: 'Cities Served',
          value: '50+',
          iconName: 'MapPin',
          description: 'In Santa Catarina'
        }
      ]
    },
    'es': {
      title: 'Sobre Nosotros',
      subtitle: 'Excelencia en Derecho Ambiental',
      description: 'Somos un bufete de abogados especializado en derecho ambiental, ofreciendo soluciones jurídicas completas y estratégicas para empresas y personas físicas en Santa Catarina.',
      values: [
        {
          title: 'Excelencia',
          description: 'Buscamos siempre la más alta calidad en todos nuestros servicios',
          iconName: 'Trophy'
        },
        {
          title: 'Ética',
          description: 'Actuamos con transparencia e integridad en todas nuestras relaciones',
          iconName: 'Scale'
        },
        {
          title: 'Compromiso',
          description: 'Dedicación total a los intereses y objetivos de nuestros clientes',
          iconName: 'Target'
        },
        {
          title: 'Sostenibilidad',
          description: 'Promovemos prácticas que equilibran desarrollo y preservación',
          iconName: 'Heart'
        }
      ],
      stats: [
        {
          label: 'Años de Experiencia',
          value: '15+',
          iconName: 'Calendar',
          description: 'Actuando en el mercado'
        },
        {
          label: 'Casos de Éxito',
          value: '1,200+',
          iconName: 'Trophy',
          description: 'Resultados positivos'
        },
        {
          label: 'Clientes Atendidos',
          value: '500+',
          iconName: 'Users',
          description: 'Empresas y personas físicas'
        },
        {
          label: 'Ciudades Atendidas',
          value: '50+',
          iconName: 'MapPin',
          description: 'En Santa Catarina'
        }
      ]
    },
    'de': {
      title: 'Über Uns',
      subtitle: 'Exzellenz im Umweltrecht',
      description: 'Wir sind eine Anwaltskanzlei, die sich auf Umweltrecht spezialisiert hat und umfassende und strategische Rechtslösungen für Unternehmen und Privatpersonen in Santa Catarina anbietet.',
      values: [
        {
          title: 'Exzellenz',
          description: 'Wir streben immer nach höchster Qualität in all unseren Dienstleistungen',
          iconName: 'Trophy'
        },
        {
          title: 'Ethik',
          description: 'Wir handeln mit Transparenz und Integrität in all unseren Beziehungen',
          iconName: 'Scale'
        },
        {
          title: 'Engagement',
          description: 'Totale Hingabe an die Interessen und Ziele unserer Mandanten',
          iconName: 'Target'
        },
        {
          title: 'Nachhaltigkeit',
          description: 'Wir fördern Praktiken, die Entwicklung und Erhaltung ausbalancieren',
          iconName: 'Heart'
        }
      ],
      stats: [
        {
          label: 'Jahre Erfahrung',
          value: '15+',
          iconName: 'Calendar',
          description: 'Am Markt tätig'
        },
        {
          label: 'Erfolgsfälle',
          value: '1,200+',
          iconName: 'Trophy',
          description: 'Positive Ergebnisse'
        },
        {
          label: 'Betreute Kunden',
          value: '500+',
          iconName: 'Users',
          description: 'Unternehmen und Privatpersonen'
        },
        {
          label: 'Betreute Städte',
          value: '50+',
          iconName: 'MapPin',
          description: 'In Santa Catarina'
        }
      ]
    }
  }

  return content[locale] || content['pt-br']
}

/* ==========================================================================
   MAPEAMENTO DE ÍCONES
   ========================================================================== */

const iconMap = {
  Trophy,
  Scale,
  Target,
  Heart,
  Calendar,
  Users,
  MapPin
}

const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || Trophy
}

/* ==========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================== */

export const About = memo<AboutProps>(({
  locale,
  variant = 'default',
  showStats = true,
  showCredentials = true,
  className = ''
}) => {
  const content = getContent(locale)

  return (
    <section
      className={`py-20 bg-gradient-to-br from-slate-50 to-white ${className}`}
      id="sobre"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
            {content.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((value, index) => {
              const IconComponent = getIcon(value.iconName)
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Estatísticas */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Nossa Trajetória
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.stats.map((stat, index) => {
                const IconComponent = getIcon(stat.iconName)
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {stat.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About
