/**
 * @fileoverview Componente ContactInfo para exibir informações de contato
 *
 * Componente responsável por renderizar as informações de contato do escritório,
 * incluindo endereço, telefone e email. Suporta múltiplos idiomas e animações.
 *
 * @example
 * ```tsx
 * <ContactInfo
 *   dictionary={dictionary}
 *   locale="pt-br"
 *   variant="default"
 * />
 * ```
 */

'use client'

import { contactInfo, firmInfo } from '@/data/contact-info'
import { Locale } from '@/types/globals'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { memo, useMemo } from 'react'

// Interfaces e tipos
export interface ContactInfoProps {
  /** Dicionário de traduções para o idioma atual */
  dictionary: any
  /** Idioma atual da aplicação */
  locale: Locale
  /** Variante de exibição do componente */
  variant?: 'default' | 'compact' | 'detailed'
  /** Classes CSS adicionais */
  className?: string
}

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  ariaLabel: string
}

// Constantes e configurações
const CONTACT_CONFIG = {
  ANIMATION_DELAY: 0.1,
  ICON_SIZE: 'w-5 h-5',
  VARIANTS: ['default', 'compact', 'detailed'] as const
} as const

// Variants de animação
const contactInfoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: CONTACT_CONFIG.ANIMATION_DELAY,
      delayChildren: 0.2
    }
  }
}

/**
 * Componente ContactInfo
 *
 * Renderiza as informações de contato do escritório com suporte a múltiplos
 * idiomas e diferentes variantes de exibição. Inclui animações e acessibilidade.
 *
 * @example
 * ```tsx
 * <ContactInfo
 *   dictionary={dictionary}
 *   locale="pt-br"
 *   variant="detailed"
 * />
 * ```
 */
export const ContactInfo = memo<ContactInfoProps>(({
  dictionary,
  locale,
  variant = 'default',
  className = ''
}) => {
  // Computação dos itens de contato
  const contactItems = useMemo((): ContactItem[] => [
    {
      icon: MapPin,
      label: dictionary.contact.address,
      value: contactInfo.address[locale],
      ariaLabel: `${dictionary.contact.address}: ${contactInfo.address[locale]}`
    },
    {
      icon: Phone,
      label: dictionary.contact.phone,
      value: contactInfo.phone,
      ariaLabel: `${dictionary.contact.phone}: ${contactInfo.phone}`
    },
    {
      icon: Mail,
      label: dictionary.contact.email,
      value: contactInfo.email,
      ariaLabel: `${dictionary.contact.email}: ${contactInfo.email}`
    }
  ], [dictionary.contact, locale])

  // Informações adicionais para variante detalhada
  const additionalInfo = useMemo(() => {
    if (variant !== 'detailed') return null

    return {
      businessHours: firmInfo.businessHours[locale],
      credentials: firmInfo.credentials,
      serviceAreas: firmInfo.serviceAreas[locale]
    }
  }, [variant, locale])

  // Classes CSS baseadas na variante
  const containerClasses = useMemo(() => {
    const baseClasses = 'space-y-6'
    const variantClasses = {
      default: 'space-y-6',
      compact: 'space-y-4',
      detailed: 'space-y-8'
    }

    return `${baseClasses} ${variantClasses[variant]} ${className}`
  }, [variant, className])

  return (
    <motion.div
      className={containerClasses}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      role="region"
      aria-labelledby="contact-info-heading"
    >
      {/* Título para acessibilidade */}
      <h3
        id="contact-info-heading"
        className="sr-only"
      >
        {dictionary.contact.title || 'Informações de Contato'}
      </h3>

            {/* Itens de contato principais */}
      {contactItems.map((item, index) => {
        const IconComponent = item.icon

        return (
          <motion.div
            key={`contact-${index}`}
            className="flex items-start space-x-3"
            variants={contactInfoVariants}
          >
            <div
              className="flex-shrink-0 p-2 bg-primary/10 rounded-lg"
              aria-hidden="true"
            >
              <IconComponent
                className={`${CONTACT_CONFIG.ICON_SIZE} text-primary`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {item.label}
              </h4>
              <p
                className="text-gray-600 break-words"
                aria-label={item.ariaLabel}
              >
                {item.value}
              </p>
            </div>
          </motion.div>
        )
      })}

      {/* Informações adicionais para variante detalhada */}
      {additionalInfo && (
        <motion.div
          className="pt-6 border-t border-gray-200"
          variants={contactInfoVariants}
        >
          {/* Horário de funcionamento */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {dictionary.contact.businessHours || 'Horário de Atendimento'}
            </h4>
            <p className="text-gray-600">
              {additionalInfo.businessHours}
            </p>
          </div>

          {/* Credenciais */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {dictionary.contact.credentials || 'Registros Profissionais'}
            </h4>
            <div className="space-y-1">
              <p className="text-gray-600 text-sm">
                OAB: {additionalInfo.credentials.oab}
              </p>
              <p className="text-gray-600 text-sm">
                CNPJ: {additionalInfo.credentials.cnpj}
              </p>
            </div>
          </div>

          {/* Áreas de atendimento */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              {dictionary.contact.serviceAreas || 'Áreas de Atendimento'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.serviceAreas.map((area, index) => (
                <span
                  key={`area-${index}`}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
})

// DisplayName para debugging
ContactInfo.displayName = 'ContactInfo'

export default ContactInfo
