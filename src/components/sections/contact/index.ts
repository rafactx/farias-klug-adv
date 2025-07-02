/**
 * @fileoverview Barrel exports para seção de contato
 *
 * Centraliza exportações dos componentes de contato, tipos, utilitários
 * e configurações relacionadas. Facilita importações limpas e organizadas.
 *
 * @example
 * ```tsx
 * import { Contact, ContactInfo, CONTACT_CONFIG } from '@/components/sections/contact'
 * ```
 */

// Componentes principais
export { default as Contact } from './contact'
export { default as ContactInfo } from './contact-info'

// Named exports dos componentes
export { Contact as ContactSection } from './contact'
export { ContactInfo as ContactInfoComponent } from './contact-info'

// Re-exports de tipos
export type {
    ContactInfoProps, ContactProps
} from './contact'

// Dados e utilitários relacionados
export {
    contactInfo,
    firmInfo,
    socialContacts,
    whatsappMessages
} from '@/data/contact-info'

// Configurações da seção
export const CONTACT_CONFIG = {
  DEFAULT_VARIANT: 'default' as const,
  ANIMATION_DELAY: 0.1,
  VIEWPORT_MARGIN: '-100px',
  SUPPORTED_VARIANTS: ['default', 'compact', 'detailed'] as const,
  SUPPORTED_LAYOUTS: ['vertical', 'horizontal'] as const,
  BUTTON_SIZES: ['default', 'lg'] as const,
  GRID_BREAKPOINTS: {
    mobile: 'grid-cols-1',
    tablet: 'md:grid-cols-2',
    desktop: 'lg:grid-cols-2'
  }
} as const

// Utilitários específicos da seção
export const contactUtils = {
  /**
   * Calcula delay de animação baseado no índice
   */
  calculateAnimationDelay: (index: number, baseDelay = 0.1) => index * baseDelay,

  /**
   * Valida propriedades do componente Contact
   */
  validateContactProps: (props: Record<string, any>) => {
    const required = ['dictionary', 'locale']
    const missing = required.filter(key => !props[key])

    if (missing.length > 0) {
      console.warn(`Contact: Missing required props: ${missing.join(', ')}`)
      return false
    }

    return true
  },

  /**
   * Gera classes CSS para variantes
   */
  getVariantClasses: (variant: 'default' | 'compact' | 'detailed') => {
    const variantClasses = {
      default: {
        section: 'py-20 bg-slate-50',
        grid: 'grid md:grid-cols-2 gap-12 items-center',
        spacing: 'space-y-6'
      },
      compact: {
        section: 'py-12 bg-white',
        grid: 'grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center',
        spacing: 'space-y-4'
      },
      detailed: {
        section: 'py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50',
        grid: 'grid md:grid-cols-2 gap-12 items-center',
        spacing: 'space-y-8'
      }
    }

    return variantClasses[variant]
  },

  /**
   * Formata dados de contato para exibição
   */
  formatContactData: (locale: string) => {
    return {
      phone: contactInfo.phone.replace(/\D/g, '').replace(/^55/, '+55 '),
      email: contactInfo.email.toLowerCase(),
      whatsapp: `https://wa.me/${contactInfo.whatsapp}`,
      address: contactInfo.address[locale as keyof typeof contactInfo.address] || contactInfo.address['pt-br']
    }
  }
} as const

// Variants de animação reutilizáveis
export const contactAnimationVariants = {
  sectionFadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99],
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },

  contentSlideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  itemFadeInUp: (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  })
} as const

// Hook de analytics para seção de contato
export const useContactAnalytics = () => {
  const trackContactInteraction = (action: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'contact',
        event_label: action,
        page_section: 'contact',
        ...data,
        page_location: window.location.href,
        timestamp: Date.now()
      })
    }
  }

  const trackButtonClick = (buttonType: string, locale: string) => {
    trackContactInteraction('contact_button_click', {
      button_type: buttonType,
      locale,
      event_label: `${buttonType}_button_clicked`
    })
  }

  const trackSectionView = (variant: string, locale: string) => {
    trackContactInteraction('contact_section_view', {
      variant,
      locale,
      event_label: 'contact_section_viewed'
    })
  }

  return {
    trackContactInteraction,
    trackButtonClick,
    trackSectionView
  }
}

// Schema de dados estruturados para SEO
export const contactStructuredData = {
  generateSchema: (locale: string) => ({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": firmInfo.fullName[locale as keyof typeof firmInfo.fullName] || firmInfo.fullName['pt-br'],
    "description": `Página de contato da ${firmInfo.name}`,
    "mainEntity": {
      "@type": "LegalService",
      "name": firmInfo.name,
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "areaServed": firmInfo.serviceAreas[locale as keyof typeof firmInfo.serviceAreas] || firmInfo.serviceAreas['pt-br'],
      "serviceType": firmInfo.specialties[locale as keyof typeof firmInfo.specialties] || firmInfo.specialties['pt-br'],
      "openingHours": "Mo-Fr 08:00-18:00",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone,
        "email": contactInfo.email,
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": ["pt-BR", "en", "es", "de"]
      }
    }
  })
}

// Exportação padrão
export { default } from './contact'
