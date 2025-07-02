import { Locale } from '@/types/globals'

// Configurações básicas do site
export const siteConfig = {
  // Informações da empresa
  company: {
    name: 'Farias Klug Advocacia',
    fullName: {
      'pt-br': 'Farias Klug Advocacia',
      'en': 'Farias Klug Law Firm',
      'es': 'Farias Klug Abogacía',
      'de': 'Farias Klug Anwaltskanzlei'
    },
    tagline: {
      'pt-br': 'Advocacia Ambiental de Excelência',
      'en': 'Excellence in Environmental Law',
      'es': 'Excelencia en Derecho Ambiental',
      'de': 'Exzellenz im Umweltrecht'
    },
    description: {
      'pt-br': 'Escritório especializado em Direito Ambiental e Empresarial, oferecendo soluções jurídicas estratégicas em Florianópolis e Joinville.',
      'en': 'Law firm specialized in Environmental and Corporate Law, offering strategic legal solutions in Florianópolis and Joinville.',
      'es': 'Bufete especializado en Derecho Ambiental y Empresarial, ofreciendo soluciones legales estratégicas en Florianópolis y Joinville.',
      'de': 'Anwaltskanzlei spezialisiert auf Umwelt- und Unternehmensrecht, bietet strategische Rechtslösungen in Florianópolis und Joinville.'
    },
    foundedYear: 2019,
    registrations: {
      oab: 'OAB/SC 51.807',
      cnpj: '35.143.959/0001-60' // Substitua pelo CNPJ real
    }
  },

  // URLs e domínios
  url: 'https://fariasklugadvocacia.com.br',
  baseUrl: process.env.NODE_ENV === 'production'
    ? 'https://fariasklugadvocacia.com.br'
    : 'http://localhost:3000',

  // Informações de contato
  contact: {
    email: 'contato@fariasklugadvocacia.com.br',
    phone: '+55 47 99661-1321',
    whatsapp: '554799661321',

    // Endereços de atendimento
    addresses: {
      'pt-br': {
        primary: 'Atendimento em Florianópolis e Joinville - SC',
        florianopolis: 'Florianópolis - Santa Catarina',
        joinville: 'Joinville - Santa Catarina'
      },
      'en': {
        primary: 'Legal services in Florianópolis and Joinville - SC',
        florianopolis: 'Florianópolis - Santa Catarina',
        joinville: 'Joinville - Santa Catarina'
      },
      'es': {
        primary: 'Servicios legales en Florianópolis y Joinville - SC',
        florianopolis: 'Florianópolis - Santa Catarina',
        joinville: 'Joinville - Santa Catarina'
      },
      'de': {
        primary: 'Rechtsberatung in Florianópolis und Joinville - SC',
        florianopolis: 'Florianópolis - Santa Catarina',
        joinville: 'Joinville - Santa Catarina'
      }
    },

    // Horários de funcionamento
    businessHours: {
      'pt-br': {
        weekdays: 'Segunda a Sexta: 8h às 18h',
        weekend: 'Finais de semana: Sob consulta',
        holidays: 'Feriados: Emergências apenas'
      },
      'en': {
        weekdays: 'Monday to Friday: 8am to 6pm',
        weekend: 'Weekends: By appointment',
        holidays: 'Holidays: Emergencies only'
      },
      'es': {
        weekdays: 'Lunes a Viernes: 8h a 18h',
        weekend: 'Fines de semana: Bajo consulta',
        holidays: 'Feriados: Solo emergencias'
      },
      'de': {
        weekdays: 'Montag bis Freitag: 8-18 Uhr',
        weekend: 'Wochenenden: Nach Vereinbarung',
        holidays: 'Feiertage: Nur Notfälle'
      }
    }
  },

  // Redes sociais
  social: {
    instagram: {
      username: '@fariasklugadv',
      url: 'https://instagram.com/fariasklugadv'
    },
    linkedin: {
      company: 'farias-klug-advocacia',
      url: 'https://linkedin.com/company/farias-klug-advocacia'
    },
    youtube: {
      channel: 'fariasklugadvocacia',
      url: 'https://youtube.com/@fariasklugadvocacia'
    },
    facebook: {
      page: 'fariasklugadvocacia',
      url: 'https://facebook.com/fariasklugadvocacia'
    }
  },

  // Configurações de SEO padrão
  seo: {
    defaultTitle: {
      'pt-br': 'Farias Klug Advocacia | Direito Ambiental e Empresarial em SC',
      'en': 'Farias Klug Law Firm | Environmental and Corporate Law in SC',
      'es': 'Farias Klug Abogacía | Derecho Ambiental y Empresarial en SC',
      'de': 'Farias Klug Anwaltskanzlei | Umwelt- und Unternehmensrecht in SC'
    },
    defaultDescription: {
      'pt-br': 'Escritório especializado em Direito Ambiental e Empresarial. Defesas, licenciamento, consultoria e contratos em Florianópolis e Joinville - SC.',
      'en': 'Law firm specialized in Environmental and Corporate Law. Defense, licensing, consulting and contracts in Florianópolis and Joinville - SC.',
      'es': 'Bufete especializado en Derecho Ambiental y Empresarial. Defensas, licenciamiento, consultoría y contratos en Florianópolis y Joinville - SC.',
      'de': 'Anwaltskanzlei spezialisiert auf Umwelt- und Unternehmensrecht. Verteidigung, Genehmigungen, Beratung und Verträge in Florianópolis und Joinville - SC.'
    },
    keywords: {
      'pt-br': [
        'advocacia ambiental',
        'direito ambiental',
        'licenciamento ambiental',
        'defesa ambiental',
        'direito empresarial',
        'advogado florianópolis',
        'advogado joinville',
        'OAB SC',
        'consultoria jurídica',
        'contratos empresariais'
      ],
      'en': [
        'environmental law',
        'environmental advocacy',
        'environmental licensing',
        'environmental defense',
        'corporate law',
        'lawyer florianópolis',
        'lawyer joinville',
        'legal consulting',
        'business contracts'
      ],
      'es': [
        'derecho ambiental',
        'abogacía ambiental',
        'licenciamiento ambiental',
        'defensa ambiental',
        'derecho empresarial',
        'abogado florianópolis',
        'abogado joinville',
        'consultoría jurídica',
        'contratos empresariales'
      ],
      'de': [
        'umweltrecht',
        'umweltanwaltschaft',
        'umweltgenehmigungen',
        'umweltverteidigung',
        'unternehmensrecht',
        'anwalt florianópolis',
        'anwalt joinville',
        'rechtsberatung',
        'geschäftsverträge'
      ]
    }
  },

  // Configurações de internacionalização
  i18n: {
    defaultLocale: 'pt-br' as Locale,
    locales: ['pt-br', 'en', 'es', 'de'] as Locale[],
    localeLabels: {
      'pt-br': 'Português',
      'en': 'English',
      'es': 'Español',
      'de': 'Deutsch'
    },
    localeFlags: {
      'pt-br': '🇧🇷',
      'en': '🇺🇸',
      'es': '🇪🇸',
      'de': '🇩🇪'
    }
  },

  // Configurações de analytics e tracking
  analytics: {
    googleAnalytics: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
      enabled: process.env.NODE_ENV === 'production'
    },
    googleTagManager: {
      id: process.env.NEXT_PUBLIC_GTM_ID || '',
      enabled: process.env.NODE_ENV === 'production'
    },
    facebookPixel: {
      id: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
      enabled: process.env.NODE_ENV === 'production'
    },
    hotjar: {
      id: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
      enabled: process.env.NODE_ENV === 'production'
    }
  },

  // Configurações do tema
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        900: '#0c4a6e'
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        900: '#0f172a'
      }
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },

  // Configurações de recursos
  features: {
    // Recursos habilitados/desabilitados
    blog: false, // Desabilitado por enquanto
    newsletter: true,
    contactForm: false, // Usando contato direto via WhatsApp
    testimonials: true,
    caseStudies: true,
    multilanguage: true,
    darkMode: false, // Profissional mantém light mode
    animations: true,
    lazyLoading: true,

    // WhatsApp Business API
    whatsappChat: {
      enabled: true,
      position: 'bottom-right',
      message: {
        'pt-br': 'Olá! Como posso ajudá-lo?',
        'en': 'Hello! How can I help you?',
        'es': '¡Hola! ¿Cómo puedo ayudarte?',
        'de': 'Hallo! Wie kann ich Ihnen helfen?'
      }
    }
  },

  // Configurações de email
  email: {
    from: 'contato@fariasklugadvocacia.com.br',
    replyTo: 'augusto@fariasklugadvocacia.com.br',

    // Templates de email
    templates: {
      contact: 'contact-notification',
      autoReply: 'auto-reply',
      newsletter: 'newsletter-welcome'
    }
  },

  // Configurações de cache e performance
  cache: {
    // Tempo de cache em segundos
    staticPages: 3600,      // 1 hora
    dynamicPages: 300,      // 5 minutos
    images: 86400,          // 24 horas
    apis: 60                // 1 minuto
  },

  // Links importantes
  links: {
    privacy: '/privacidade',
    terms: '/termos',
    sitemap: '/sitemap.xml',
    robots: '/robots.txt',

    // Links externos importantes
    oab: 'https://www.oabsc.org.br',
    cnj: 'https://www.cnj.jus.br',

    // Canais de contato direto
    whatsappChat: 'https://wa.me/554799661321',
    emailContact: 'mailto:contato@fariasklugadvocacia.com.br',
    phoneContact: 'tel:+5547996611321'
  }
}

// Utilitários para acessar configurações
export const siteUtils = {
  // Obter URL completa
  getFullUrl: (path: string = '') => {
    return `${siteConfig.url}${path}`
  },

  // Obter configurações por locale
  getLocalizedConfig: (locale: Locale) => ({
    title: siteConfig.seo.defaultTitle[locale],
    description: siteConfig.seo.defaultDescription[locale],
    keywords: siteConfig.seo.keywords[locale],
    companyName: siteConfig.company.fullName[locale],
    tagline: siteConfig.company.tagline[locale],
    address: siteConfig.contact.addresses[locale]
  }),

  // Verificar se feature está habilitada
  isFeatureEnabled: (feature: keyof typeof siteConfig.features) => {
    return siteConfig.features[feature] === true
  },

  // Obter configurações de analytics habilitadas
  getEnabledAnalytics: () => {
    return Object.entries(siteConfig.analytics)
      .filter(([_, config]) => config.enabled && config.id)
      .map(([name, config]) => ({ name, ...config }))
  },

  // Gerar structured data da empresa
  getOrganizationStructuredData: (locale: Locale) => ({
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.company.fullName[locale],
    description: siteConfig.company.description[locale],
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florianópolis',
      addressRegion: 'SC',
      addressCountry: 'BR'
    },
    foundingDate: siteConfig.company.foundedYear.toString(),
    sameAs: [
      siteConfig.social.instagram.url,
      siteConfig.social.linkedin.url
    ]
  }),

  // Validar configurações
  validateConfig: () => {
    const errors: string[] = []

    if (!siteConfig.url) errors.push('URL do site não configurada')
    if (!siteConfig.contact.email) errors.push('Email de contato não configurado')
    if (!siteConfig.contact.phone) errors.push('Telefone não configurado')

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}

// Tipo para autocompletar configurações
export type SiteConfig = typeof siteConfig
export type SiteFeatures = keyof typeof siteConfig.features

// Alias para compatibilidade
export const SITE_CONFIG = siteConfig
