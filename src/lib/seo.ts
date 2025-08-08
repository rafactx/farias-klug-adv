import type { Locale } from '@/lib/locales';
import { Metadata } from 'next';

// Base domain configuration
export const siteConfig = {
  name: 'Farias Klug Advocacia',
  description: 'Especialistas em Direito Ambiental e Empresarial em Santa Catarina',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fariasklug.com.br',
  ogImage: '/og-image.jpg',
  logo: '/logo.png',
  twitterHandle: '@fariasklug',
  keywords: {
    'pt-BR': [
      'direito ambiental',
      'direito empresarial',
      'advocacia santa catarina',
      'licenciamento ambiental',
      'defesas ambientais',
      'consultoria jurídica',
      'advogado joinville',
      'advogado florianópolis',
      'escritório de advocacia',
      'augusto farias klug',
      'OAB SC',
      'recursos ambientais',
      'infrações ambientais',
      'TAC ambiental',
      'compliance ambiental'
    ],
    en: [
      'environmental law',
      'business law',
      'legal services brazil',
      'environmental licensing',
      'environmental defense',
      'legal consulting',
      'law firm brazil',
      'santa catarina lawyer',
      'environmental compliance',
      'corporate law',
      'legal advice',
      'brazilian law',
      'environmental regulations',
      'business consulting',
      'international law'
    ],
    es: [
      'derecho ambiental',
      'derecho empresarial',
      'abogado brasil',
      'servicios legales',
      'licencias ambientales',
      'defensa ambiental',
      'consultoría jurídica',
      'bufete de abogados',
      'derecho corporativo',
      'cumplimiento ambiental',
      'asesoría legal',
      'regulaciones ambientales',
      'consultoría empresarial',
      'derecho internacional',
      'santa catarina'
    ],
    de: [
      'umweltrecht',
      'unternehmensrecht',
      'rechtsanwalt brasilien',
      'rechtsdienste',
      'umweltgenehmigungen',
      'umweltverteidigung',
      'rechtsberatung',
      'anwaltskanzlei',
      'gesellschaftsrecht',
      'umwelt-compliance',
      'rechtsberatung',
      'umweltvorschriften',
      'unternehmensberatung',
      'internationales recht',
      'santa catarina'
    ],
    fr: [
      'droit environnemental',
      'droit des affaires',
      'avocat brésil',
      'services juridiques',
      'licences environnementales',
      'défense environnementale',
      'conseil juridique',
      'cabinet d\'avocats',
      'droit des sociétés',
      'conformité environnementale',
      'conseil juridique',
      'réglementations environnementales',
      'conseil aux entreprises',
      'droit international',
      'santa catarina'
    ]
  }
};

// SEO content for each locale
export const seoContent = {
  'pt-BR': {
    title: 'Farias Klug Advocacia - Especialistas em Direito Ambiental e Empresarial',
    description: 'Escritório especializado em Direito Ambiental e Empresarial em Santa Catarina. Licenciamento, defesas ambientais e consultoria jurídica. OAB/SC 51.807.',
    openGraph: {
      title: 'Farias Klug Advocacia - Direito Ambiental e Empresarial SC',
      description: 'Especialistas em licenciamento ambiental, defesas de infrações e consultoria jurídica empresarial em Santa Catarina. Atendimento em Joinville e Florianópolis.',
      siteName: 'Farias Klug Advocacia'
    },
    twitter: {
      title: 'Farias Klug Advocacia - Direito Ambiental SC',
      description: 'Escritório especializado em Direito Ambiental e Empresarial. Licenciamento, defesas ambientais e consultoria jurídica em Santa Catarina.'
    },
    alternates: {
      canonical: '/',
      languages: {
        'pt-BR': '/',
        'en': '/en',
        'es': '/es',
        'de': '/de',
        'fr': '/fr'
      }
    }
  },
  en: {
    title: 'Farias Klug Law Firm - Environmental and Corporate Law Specialists',
    description: 'Specialized law firm in Environmental and Corporate Law in Santa Catarina, Brazil. Environmental licensing, defense and legal consulting services.',
    openGraph: {
      title: 'Farias Klug Law Firm - Environmental & Corporate Law Brazil',
      description: 'Expert environmental and corporate law services in Santa Catarina, Brazil. Environmental licensing, violations defense, and business legal consulting.',
      siteName: 'Farias Klug Law Firm'
    },
    twitter: {
      title: 'Farias Klug Law Firm - Environmental Law Brazil',
      description: 'Specialized environmental and corporate law firm in Santa Catarina, Brazil. Expert legal services for businesses and individuals.'
    },
    alternates: {
      canonical: '/en',
      languages: {
        'pt-BR': '/',
        'en': '/en',
        'es': '/es',
        'de': '/de',
        'fr': '/fr'
      }
    }
  },
  es: {
    title: 'Bufete Farias Klug - Especialistas en Derecho Ambiental y Empresarial',
    description: 'Bufete especializado en Derecho Ambiental y Empresarial en Santa Catarina, Brasil. Licencias ambientales, defensa y consultoría jurídica.',
    openGraph: {
      title: 'Bufete Farias Klug - Derecho Ambiental y Empresarial Brasil',
      description: 'Servicios expertos en derecho ambiental y empresarial en Santa Catarina, Brasil. Licencias ambientales, defensa de infracciones y consultoría.',
      siteName: 'Bufete Farias Klug'
    },
    twitter: {
      title: 'Bufete Farias Klug - Derecho Ambiental Brasil',
      description: 'Bufete especializado en derecho ambiental y empresarial en Santa Catarina, Brasil. Servicios jurídicos expertos.'
    },
    alternates: {
      canonical: '/es',
      languages: {
        'pt-BR': '/',
        'en': '/en',
        'es': '/es',
        'de': '/de',
        'fr': '/fr'
      }
    }
  },
  de: {
    title: 'Kanzlei Farias Klug - Spezialisten für Umwelt- und Unternehmensrecht',
    description: 'Spezialisierte Anwaltskanzlei für Umwelt- und Unternehmensrecht in Santa Catarina, Brasilien. Umweltgenehmigungen, Verteidigung und Rechtsberatung.',
    openGraph: {
      title: 'Kanzlei Farias Klug - Umwelt- und Unternehmensrecht Brasilien',
      description: 'Experte Umwelt- und Unternehmensrechtsdienste in Santa Catarina, Brasilien. Umweltgenehmigungen, Verstößeverteidigung und Beratung.',
      siteName: 'Kanzlei Farias Klug'
    },
    twitter: {
      title: 'Kanzlei Farias Klug - Umweltrecht Brasilien',
      description: 'Spezialisierte Umwelt- und Unternehmensrechtskanzlei in Santa Catarina, Brasilien. Experte Rechtsdienste.'
    },
    alternates: {
      canonical: '/de',
      languages: {
        'pt-BR': '/',
        'en': '/en',
        'es': '/es',
        'de': '/de',
        'fr': '/fr'
      }
    }
  },
  fr: {
    title: 'Cabinet Farias Klug - Spécialistes en Droit Environnemental et des Affaires',
    description: 'Cabinet spécialisé en Droit Environnemental et des Affaires à Santa Catarina, Brésil. Licences environnementales, défense et conseil juridique.',
    openGraph: {
      title: 'Cabinet Farias Klug - Droit Environnemental et des Affaires Brésil',
      description: 'Services experts en droit environnemental et des affaires à Santa Catarina, Brésil. Licences environnementales, défense et conseil.',
      siteName: 'Cabinet Farias Klug'
    },
    twitter: {
      title: 'Cabinet Farias Klug - Droit Environnemental Brésil',
      description: 'Cabinet spécialisé en droit environnemental et des affaires à Santa Catarina, Brésil. Services juridiques experts.'
    },
    alternates: {
      canonical: '/fr',
      languages: {
        'pt-BR': '/',
        'en': '/en',
        'es': '/es',
        'de': '/de',
        'fr': '/fr'
      }
    }
  }
} as const;

// Generate metadata for each locale
export function generateSEOMetadata(locale: Locale): Metadata {
  const content = seoContent[locale];
  const keywords = siteConfig.keywords[locale];

  return {
    title: content.title,
    description: content.description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Augusto Farias Klug', url: siteConfig.url }],
    creator: 'Farias Klug Advocacia',
    publisher: 'Farias Klug Advocacia',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: content.alternates,
    openGraph: {
      type: 'website',
      locale: locale,
      url: locale === 'pt-BR' ? '/' : `/${locale}`,
      title: content.openGraph.title,
      description: content.openGraph.description,
      siteName: content.openGraph.siteName,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: content.openGraph.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.twitter.title,
      description: content.twitter.description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_SITE_VERIFICATION,
    },
  };
}

// Schema.org structured data
export function generateStructuredData(locale: Locale) {
  const content = seoContent[locale];

  const baseUrl = siteConfig.url;
  const localeUrl = locale === 'pt-BR' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${baseUrl}/#organization`,
    name: content.openGraph.siteName,
    alternateName: 'Farias Klug',
    description: content.description,
    url: localeUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}${siteConfig.logo}`,
      width: 400,
      height: 400
    },
    image: `${baseUrl}${siteConfig.ogImage}`,
    telephone: '+55 47 99999-9999',
    email: 'contato@fariasklug.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Joinville',
      addressRegion: 'SC',
      addressCountry: 'BR',
      postalCode: '89000-000'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.3044,
      longitude: -48.8487
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Santa Catarina',
        addressCountry: 'BR'
      },
      {
        '@type': 'City',
        name: 'Joinville',
        addressCountry: 'BR'
      },
      {
        '@type': 'City',
        name: 'Florianópolis',
        addressCountry: 'BR'
      }
    ],
    serviceType: locale === 'pt-BR' ?
      ['Direito Ambiental', 'Direito Empresarial', 'Licenciamento Ambiental', 'Defesas Ambientais'] :
    locale === 'en' ?
      ['Environmental Law', 'Corporate Law', 'Environmental Licensing', 'Environmental Defense'] :
    locale === 'es' ?
      ['Derecho Ambiental', 'Derecho Empresarial', 'Licencias Ambientales', 'Defensa Ambiental'] :
    locale === 'de' ?
      ['Umweltrecht', 'Unternehmensrecht', 'Umweltgenehmigungen', 'Umweltverteidigung'] :
      ['Droit Environnemental', 'Droit des Affaires', 'Licences Environnementales', 'Défense Environnementale'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'pt-BR' ? 'Serviços Jurídicos' :
            locale === 'en' ? 'Legal Services' :
            locale === 'es' ? 'Servicios Jurídicos' :
            locale === 'de' ? 'Rechtsdienste' :
            'Services Juridiques',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'pt-BR' ? 'Licenciamento Ambiental' :
                  locale === 'en' ? 'Environmental Licensing' :
                  locale === 'es' ? 'Licencias Ambientales' :
                  locale === 'de' ? 'Umweltgenehmigungen' :
                  'Licences Environnementales'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'pt-BR' ? 'Defesas e Recursos Ambientais' :
                  locale === 'en' ? 'Environmental Defense and Appeals' :
                  locale === 'es' ? 'Defensa y Recursos Ambientales' :
                  locale === 'de' ? 'Umweltverteidigung und Berufungen' :
                  'Défense et Recours Environnementaux'
          }
        }
      ]
    },
    founder: {
      '@type': 'Person',
      name: 'Augusto Farias Klug',
      jobTitle: locale === 'pt-BR' ? 'Advogado Sócio-Fundador' :
               locale === 'en' ? 'Founding Partner Lawyer' :
               locale === 'es' ? 'Abogado Socio Fundador' :
               locale === 'de' ? 'Gründungspartner Anwalt' :
               'Avocat Associé Fondateur',
      alumniOf: 'Universidade da Região de Joinville (UNIVILLE)',
      knowsLanguage: ['pt-BR', 'en', 'de', 'es']
    },
    sameAs: [
      `${baseUrl}/pt-BR`,
      `${baseUrl}/en`,
      `${baseUrl}/es`,
      `${baseUrl}/de`,
      `${baseUrl}/fr`
    ],
    potentialAction: {
      '@type': 'ContactAction',
      target: `${localeUrl}#contact`
    }
  };
}
