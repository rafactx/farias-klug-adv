import { Locale } from '@/types/globals'

// Tipos para navegação
export interface NavigationItem {
  id: string
  label: Record<Locale, string>
  href: string
  description?: Record<Locale, string>
  icon?: string
  external?: boolean
  children?: NavigationItem[]
  featured?: boolean
  order: number
}

export interface NavigationGroup {
  id: string
  label: Record<Locale, string>
  items: NavigationItem[]
  order: number
}

// Navegação principal do header
export const mainNavigation: NavigationItem[] = [
  {
    id: 'home',
    label: {
      'pt-br': 'Início',
      'en': 'Home',
      'es': 'Inicio',
      'de': 'Startseite'
    },
    href: '/',
    icon: 'home',
    order: 1
  },
  {
    id: 'about',
    label: {
      'pt-br': 'Sobre',
      'en': 'About',
      'es': 'Acerca',
      'de': 'Über uns'
    },
    href: '/sobre',
    description: {
      'pt-br': 'Conheça nossa história e expertise',
      'en': 'Learn about our history and expertise',
      'es': 'Conoce nuestra historia y experiencia',
      'de': 'Erfahren Sie mehr über unsere Geschichte und Expertise'
    },
    icon: 'users',
    order: 2
  },
  {
    id: 'areas',
    label: {
      'pt-br': 'Áreas de Atuação',
      'en': 'Practice Areas',
      'es': 'Áreas de Práctica',
      'de': 'Praxisbereiche'
    },
    href: '/areas-de-atuacao',
    description: {
      'pt-br': 'Nossas especialidades jurídicas',
      'en': 'Our legal specialties',
      'es': 'Nuestras especialidades legales',
      'de': 'Unsere Rechtsspezialitäten'
    },
    icon: 'briefcase',
    featured: true,
    order: 3,
    children: [
      {
        id: 'environmental-defense',
        label: {
          'pt-br': 'Defesas e Recursos Ambientais',
          'en': 'Environmental Defense and Appeals',
          'es': 'Defensas y Recursos Ambientales',
          'de': 'Umweltverteidigung und -einsprüche'
        },
        href: '/areas-de-atuacao/defesas-e-recursos-ambientais',
        description: {
          'pt-br': 'Defesa contra sanções e infrações ambientais',
          'en': 'Defense against environmental sanctions and violations',
          'es': 'Defensa contra sanciones e infracciones ambientales',
          'de': 'Verteidigung gegen Umweltsanktionen und -verstöße'
        },
        icon: 'shield-check',
        featured: true,
        order: 1
      },
      {
        id: 'licensing',
        label: {
          'pt-br': 'Licenciamento e Regularização',
          'en': 'Licensing and Regularization',
          'es': 'Licenciamiento y Regularización',
          'de': 'Genehmigungen und Regulierung'
        },
        href: '/areas-de-atuacao/licenciamento-e-regularizacao',
        description: {
          'pt-br': 'Licenças ambientais e regularizações',
          'en': 'Environmental licenses and regularizations',
          'es': 'Licencias ambientales y regularizaciones',
          'de': 'Umweltgenehmigungen und Regularisierungen'
        },
        icon: 'file-check',
        featured: true,
        order: 2
      },
      {
        id: 'consulting',
        label: {
          'pt-br': 'Consultoria Jurídica Ambiental',
          'en': 'Environmental Legal Consulting',
          'es': 'Consultoría Jurídica Ambiental',
          'de': 'Juristische Umweltberatung'
        },
        href: '/areas-de-atuacao/consultoria-juridica-ambiental',
        description: {
          'pt-br': 'Consultoria estratégica e preventiva',
          'en': 'Strategic and preventive consulting',
          'es': 'Consultoría estratégica y preventiva',
          'de': 'Strategische und präventive Beratung'
        },
        icon: 'leaf',
        featured: true,
        order: 3
      },
      {
        id: 'corporate',
        label: {
          'pt-br': 'Direito Empresarial',
          'en': 'Corporate Law',
          'es': 'Derecho Empresarial',
          'de': 'Unternehmensrecht'
        },
        href: '/areas-de-atuacao/direito-empresarial',
        description: {
          'pt-br': 'Segurança jurídica para negócios',
          'en': 'Legal security for business',
          'es': 'Seguridad jurídica para negocios',
          'de': 'Rechtssicherheit für Unternehmen'
        },
        icon: 'briefcase',
        order: 4
      }
    ]
  },
  {
    id: 'contact',
    label: {
      'pt-br': 'Contato',
      'en': 'Contact',
      'es': 'Contacto',
      'de': 'Kontakt'
    },
    href: '/contato',
    description: {
      'pt-br': 'Entre em contato conosco',
      'en': 'Get in touch with us',
      'es': 'Ponte en contacto con nosotros',
      'de': 'Kontaktieren Sie uns'
    },
    icon: 'phone',
    order: 4
  }
]

// Navegação do footer organizada por grupos
export const footerNavigation: NavigationGroup[] = [
  {
    id: 'legal-areas',
    label: {
      'pt-br': 'Áreas de Atuação',
      'en': 'Practice Areas',
      'es': 'Áreas de Práctica',
      'de': 'Praxisbereiche'
    },
    order: 1,
    items: [
      {
        id: 'environmental-defense',
        label: {
          'pt-br': 'Defesas Ambientais',
          'en': 'Environmental Defense',
          'es': 'Defensas Ambientales',
          'de': 'Umweltverteidigung'
        },
        href: '/areas-de-atuacao/defesas-e-recursos-ambientais',
        order: 1
      },
      {
        id: 'licensing',
        label: {
          'pt-br': 'Licenciamento',
          'en': 'Licensing',
          'es': 'Licenciamiento',
          'de': 'Genehmigungen'
        },
        href: '/areas-de-atuacao/licenciamento-e-regularizacao',
        order: 2
      },
      {
        id: 'consulting',
        label: {
          'pt-br': 'Consultoria Ambiental',
          'en': 'Environmental Consulting',
          'es': 'Consultoría Ambiental',
          'de': 'Umweltberatung'
        },
        href: '/areas-de-atuacao/consultoria-juridica-ambiental',
        order: 3
      },
      {
        id: 'corporate',
        label: {
          'pt-br': 'Direito Empresarial',
          'en': 'Corporate Law',
          'es': 'Derecho Empresarial',
          'de': 'Unternehmensrecht'
        },
        href: '/areas-de-atuacao/direito-empresarial',
        order: 4
      }
    ]
  },
  {
    id: 'company',
    label: {
      'pt-br': 'Escritório',
      'en': 'Law Firm',
      'es': 'Bufete',
      'de': 'Kanzlei'
    },
    order: 2,
    items: [
      {
        id: 'about',
        label: {
          'pt-br': 'Sobre Nós',
          'en': 'About Us',
          'es': 'Acerca de Nosotros',
          'de': 'Über uns'
        },
        href: '/sobre',
        order: 1
      },
      {
        id: 'team',
        label: {
          'pt-br': 'Nossa Equipe',
          'en': 'Our Team',
          'es': 'Nuestro Equipo',
          'de': 'Unser Team'
        },
        href: '/sobre#equipe',
        order: 2
      },
      {
        id: 'mission',
        label: {
          'pt-br': 'Missão e Valores',
          'en': 'Mission & Values',
          'es': 'Misión y Valores',
          'de': 'Mission & Werte'
        },
        href: '/sobre#missao',
        order: 3
      }
    ]
  },
  {
    id: 'contact-info',
    label: {
      'pt-br': 'Contato',
      'en': 'Contact',
      'es': 'Contacto',
      'de': 'Kontakt'
    },
    order: 3,
    items: [
      {
        id: 'contact-page',
        label: {
          'pt-br': 'Entre em Contato',
          'en': 'Get in Touch',
          'es': 'Ponte en Contacto',
          'de': 'Kontakt aufnehmen'
        },
        href: '/contato',
        order: 1
      },
      {
        id: 'whatsapp',
        label: {
          'pt-br': 'WhatsApp',
          'en': 'WhatsApp',
          'es': 'WhatsApp',
          'de': 'WhatsApp'
        },
        href: 'https://wa.me/554799661321',
        external: true,
        order: 2
      },
      {
        id: 'email',
        label: {
          'pt-br': 'E-mail',
          'en': 'Email',
          'es': 'Email',
          'de': 'E-Mail'
        },
        href: 'mailto:contato@fariasklugadvocacia.com.br',
        external: true,
        order: 3
      }
    ]
  },
  {
    id: 'legal',
    label: {
      'pt-br': 'Legal',
      'en': 'Legal',
      'es': 'Legal',
      'de': 'Rechtliches'
    },
    order: 4,
    items: [
      {
        id: 'privacy',
        label: {
          'pt-br': 'Política de Privacidade',
          'en': 'Privacy Policy',
          'es': 'Política de Privacidad',
          'de': 'Datenschutzrichtlinie'
        },
        href: '/privacidade',
        order: 1
      },
      {
        id: 'terms',
        label: {
          'pt-br': 'Termos de Uso',
          'en': 'Terms of Use',
          'es': 'Términos de Uso',
          'de': 'Nutzungsbedingungen'
        },
        href: '/termos',
        order: 2
      }
    ]
  }
]

// Navegação móvel (simplificada)
export const mobileNavigation: NavigationItem[] = [
  {
    id: 'home',
    label: {
      'pt-br': 'Início',
      'en': 'Home',
      'es': 'Inicio',
      'de': 'Home'
    },
    href: '/',
    icon: 'home',
    order: 1
  },
  {
    id: 'areas',
    label: {
      'pt-br': 'Áreas',
      'en': 'Areas',
      'es': 'Áreas',
      'de': 'Bereiche'
    },
    href: '/areas-de-atuacao',
    icon: 'briefcase',
    order: 2
  },
  {
    id: 'about',
    label: {
      'pt-br': 'Sobre',
      'en': 'About',
      'es': 'Acerca',
      'de': 'Über'
    },
    href: '/sobre',
    icon: 'users',
    order: 3
  },
  {
    id: 'contact',
    label: {
      'pt-br': 'Contato',
      'en': 'Contact',
      'es': 'Contacto',
      'de': 'Kontakt'
    },
    href: '/contato',
    icon: 'phone',
    order: 4
  }
]

// Breadcrumbs para páginas internas
export const breadcrumbsData = {
  '/sobre': {
    'pt-br': [
      { label: 'Início', href: '/' },
      { label: 'Sobre', href: '/sobre' }
    ],
    'en': [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/sobre' }
    ],
    'es': [
      { label: 'Inicio', href: '/' },
      { label: 'Acerca', href: '/sobre' }
    ],
    'de': [
      { label: 'Startseite', href: '/' },
      { label: 'Über uns', href: '/sobre' }
    ]
  },
  '/contato': {
    'pt-br': [
      { label: 'Início', href: '/' },
      { label: 'Contato', href: '/contato' }
    ],
    'en': [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contato' }
    ],
    'es': [
      { label: 'Inicio', href: '/' },
      { label: 'Contacto', href: '/contato' }
    ],
    'de': [
      { label: 'Startseite', href: '/' },
      { label: 'Kontakt', href: '/contato' }
    ]
  },
  '/areas-de-atuacao': {
    'pt-br': [
      { label: 'Início', href: '/' },
      { label: 'Áreas de Atuação', href: '/areas-de-atuacao' }
    ],
    'en': [
      { label: 'Home', href: '/' },
      { label: 'Practice Areas', href: '/areas-de-atuacao' }
    ],
    'es': [
      { label: 'Inicio', href: '/' },
      { label: 'Áreas de Práctica', href: '/areas-de-atuacao' }
    ],
    'de': [
      { label: 'Startseite', href: '/' },
      { label: 'Praxisbereiche', href: '/areas-de-atuacao' }
    ]
  }
}

// Utilitários para navegação
export const navigationUtils = {
  // Buscar item por ID em qualquer estrutura
  findItemById: (id: string, items: NavigationItem[]): NavigationItem | null => {
    for (const item of items) {
      if (item.id === id) return item
      if (item.children) {
        const found = navigationUtils.findItemById(id, item.children)
        if (found) return found
      }
    }
    return null
  },

  // Buscar item por href
  findItemByHref: (href: string, items: NavigationItem[]): NavigationItem | null => {
    for (const item of items) {
      if (item.href === href) return item
      if (item.children) {
        const found = navigationUtils.findItemByHref(href, item.children)
        if (found) return found
      }
    }
    return null
  },

  // Obter apenas itens em destaque
  getFeaturedItems: (items: NavigationItem[]): NavigationItem[] => {
    const featured: NavigationItem[] = []
    items.forEach(item => {
      if (item.featured) featured.push(item)
      if (item.children) {
        featured.push(...navigationUtils.getFeaturedItems(item.children))
      }
    })
    return featured.sort((a, b) => a.order - b.order)
  },

  // Ordenar itens por ordem
  sortByOrder: (items: NavigationItem[]): NavigationItem[] => {
    return [...items].sort((a, b) => a.order - b.order)
  },

  // Gerar sitemap a partir da navegação
  generateSitemap: (baseUrl: string, items: NavigationItem[]): string[] => {
    const urls: string[] = []
    items.forEach(item => {
      if (!item.external) {
        urls.push(`${baseUrl}${item.href}`)
      }
      if (item.children) {
        urls.push(...navigationUtils.generateSitemap(baseUrl, item.children))
      }
    })
    return urls
  },

  // Verificar se um caminho está ativo
  isActive: (currentPath: string, itemHref: string, exact = false): boolean => {
    if (exact) return currentPath === itemHref
    return currentPath.startsWith(itemHref) && itemHref !== '/'
  },

  // Gerar breadcrumbs dinâmicos
  generateBreadcrumbs: (path: string, locale: Locale) => {
    const segments = path.split('/').filter(Boolean)
    const breadcrumbs = [
      {
        label: locale === 'pt-br' ? 'Início' :
               locale === 'en' ? 'Home' :
               locale === 'es' ? 'Inicio' : 'Startseite',
        href: '/'
      }
    ]

    let currentPath = ''
    segments.forEach(segment => {
      currentPath += `/${segment}`
      const item = navigationUtils.findItemByHref(currentPath, mainNavigation)
      if (item) {
        breadcrumbs.push({
          label: item.label[locale],
          href: currentPath
        })
      }
    })

    return breadcrumbs
  }
}

// Configurações de navegação
export const navigationConfig = {
  // Delay para hover em dropdowns (ms)
  hoverDelay: 200,

  // Animações
  animations: {
    mobileMenu: {
      duration: 300,
      easing: 'ease-in-out'
    },
    dropdown: {
      duration: 200,
      easing: 'ease-out'
    }
  },

  // Breakpoints para navegação responsiva
  breakpoints: {
    mobile: 768,
    tablet: 1024
  }
}
