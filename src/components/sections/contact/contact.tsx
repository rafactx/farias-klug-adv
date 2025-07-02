/**
 * @fileoverview Componente Contact - Seção principal de contato
 *
 * Seção responsável por exibir informações de contato e botões de ação
 * para interação com o escritório. Inclui informações detalhadas e
 * botões sociais com analytics tracking.
 *
 * @example
 * ```tsx
 * <Contact
 *   dictionary={dictionary}
 *   locale="pt-br"
 *   variant="default"
 * />
 * ```
 */

'use client'

import { ContactButtons } from '@/components/social'
import { Locale } from '@/types/globals'
import { motion } from 'framer-motion'
import { memo, useCallback, useMemo } from 'react'
import { ContactInfo } from './contact-info'

// Interfaces e tipos
export interface ContactProps {
  /** Dicionário de traduções para o idioma atual */
  dictionary: any
  /** Idioma atual da aplicação */
  locale: Locale
  /** Variante de exibição da seção */
  variant?: 'default' | 'compact' | 'detailed'
  /** Classes CSS adicionais */
  className?: string
  /** Callback para tracking de analytics */
  onAnalytics?: (event: string, data?: Record<string, any>) => void
}

// Constantes e configurações
const CONTACT_CONFIG = {
  ANIMATION_DELAY: 0.2,
  VIEWPORT_MARGIN: '-100px',
  LAYOUT_VARIANTS: ['vertical', 'horizontal'] as const,
  BUTTON_SIZES: ['default', 'lg'] as const
} as const

// Variants de animação
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

/**
 * Componente Contact
 *
 * Seção principal de contato que combina informações detalhadas do escritório
 * com botões de ação para WhatsApp, Instagram e email. Inclui analytics tracking
 * e suporte completo a acessibilidade.
 *
 * @example
 * ```tsx
 * <Contact
 *   dictionary={dictionary}
 *   locale="pt-br"
 *   variant="detailed"
 *   onAnalytics={(event, data) => gtag('event', event, data)}
 * />
 * ```
 */
export const Contact = memo<ContactProps>(({
  dictionary,
  locale,
  variant = 'default',
  className = '',
  onAnalytics
}) => {
  // Handler para analytics com useCallback
  const handleAnalytics = useCallback((event: string, data?: Record<string, any>) => {
    onAnalytics?.(event, {
      ...data,
      section: 'contact',
      locale,
      timestamp: Date.now()
    })
  }, [onAnalytics, locale])

  // Configuração dos botões baseada na variante
  const buttonConfig = useMemo(() => {
    const configs = {
      default: {
        layout: 'vertical' as const,
        size: 'md' as const
      },
      compact: {
        layout: 'horizontal' as const,
        size: 'sm' as const
      },
      detailed: {
        layout: 'vertical' as const,
        size: 'lg' as const
      }
    }

    return configs[variant]
  }, [variant])

  // Classes CSS da seção baseadas na variante
  const sectionClasses = useMemo(() => {
    const baseClasses = 'py-20'
    const variantClasses = {
      default: 'bg-slate-50',
      compact: 'bg-white py-12',
      detailed: 'bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24'
    }

    return `${baseClasses} ${variantClasses[variant]} ${className}`
  }, [variant, className])

  // Classes do grid responsivo
  const gridClasses = useMemo(() => {
    const baseClasses = 'grid gap-12 items-center'
    const responsiveClasses = variant === 'compact'
      ? 'md:grid-cols-1 lg:grid-cols-2 gap-8'
      : 'md:grid-cols-2 gap-12'

    return `${baseClasses} ${responsiveClasses}`
  }, [variant])

  // Handler para interações com botões
  const handleButtonInteraction = useCallback((buttonType: string) => {
    handleAnalytics('contact_button_click', {
      button_type: buttonType,
      variant
    })
  }, [handleAnalytics, variant])

  return (
    <motion.section
      className={sectionClasses}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: CONTACT_CONFIG.VIEWPORT_MARGIN }}
      id="contato"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <motion.header
          className="text-center mb-16"
          variants={contentVariants}
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            {dictionary.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {dictionary.contact.subtitle}
          </p>
        </motion.header>

        {/* Grid Principal */}
        <motion.div
          className={gridClasses}
          variants={gridVariants}
        >
          {/* Informações de Contato */}
          <motion.div
            variants={contentVariants}
            className="order-2 md:order-1"
          >
            <ContactInfo
              dictionary={dictionary}
              locale={locale}
              variant={variant}
              className="max-w-md mx-auto md:mx-0"
            />
          </motion.div>

          {/* Botões de Contato */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            variants={contentVariants}
          >
            <div className="w-full max-w-sm">
              <ContactButtons
                locale={locale}
                layout={buttonConfig.layout}
                size={buttonConfig.size}
                onButtonClick={handleButtonInteraction}
                className="w-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action Adicional */}
        {variant === 'detailed' && (
          <motion.div
            className="mt-16 text-center"
            variants={contentVariants}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {dictionary.contact.cta?.title || 'Pronto para começar?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {dictionary.contact.cta?.description ||
                 'Entre em contato conosco hoje mesmo e descubra como podemos ajudar com suas questões jurídicas.'}
              </p>
              <button
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => handleAnalytics('cta_button_click', { cta_type: 'main' })}
                aria-label={dictionary.contact.cta?.buttonLabel || 'Agendar consulta'}
              >
                {dictionary.contact.cta?.buttonLabel || 'Agendar Consulta'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
})

// DisplayName para debugging
Contact.displayName = 'Contact'

export default Contact
