/**
 * @fileoverview Utilidades para geração de metadados SEO
 *
 * Funções para gerar metadados SEO dinâmicos baseados em locale e conteúdo.
 * Suporta Open Graph, Twitter Cards e dados estruturados JSON-LD.
 *
 * @example
 * ```tsx
 * const meta = generateMeta({
 *   locale: 'pt-br',
 *   title: 'Título da Página',
 *   description: 'Descrição da página',
 *   keywords: ['palavra-chave', 'seo']
 * })
 * ```
 */

import { Locale } from '@/types/globals'
import { Metadata } from 'next'

/* ==========================================================================
   TIPOS E INTERFACES
   ========================================================================== */

export interface GenerateMetaOptions {
  locale: Locale
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
  noFollow?: boolean
}

export interface StructuredDataOptions {
  type: 'Organization' | 'LawFirm' | 'LegalService' | 'Article' | 'WebPage' | 'BreadcrumbList'
  data: Record<string, any>
  locale: Locale
}

/* ==========================================================================
   CONFIGURAÇÕES
   ========================================================================== */

const META_DEFAULTS = {
  siteName: 'Farias Klug Advocacia',
  siteUrl: 'https://farias-klug.com.br',
  twitterHandle: '@fariasklug',
  defaultImage: '/images/logo-hero.png',
  imageWidth: 1200,
  imageHeight: 630
} as const

const LOCALE_CONFIGS = {
  'pt-br': {
    lang: 'pt-BR',
    siteName: 'Farias Klug Advocacia',
    defaultTitle: 'Farias Klug Advocacia - Especialistas em Direito Ambiental',
    defaultDescription: 'Escritório de advocacia especializado em direito ambiental, licenciamento e defesa contra sanções em SC.',
    currency: 'BRL',
    dateFormat: 'dd/MM/yyyy'
  },
  'en': {
    lang: 'en-US',
    siteName: 'Farias Klug Law Firm',
    defaultTitle: 'Farias Klug Law Firm - Environmental Law Specialists',
    defaultDescription: 'Law firm specialized in environmental law, licensing and defense against sanctions in Santa Catarina, Brazil.',
    currency: 'USD',
    dateFormat: 'MM/dd/yyyy'
  },
  'es': {
    lang: 'es-ES',
    siteName: 'Farias Klug Abogacía',
    defaultTitle: 'Farias Klug Abogacía - Especialistas en Derecho Ambiental',
    defaultDescription: 'Bufete de abogados especializado en derecho ambiental, licenciamiento y defensa contra sanciones en SC.',
    currency: 'EUR',
    dateFormat: 'dd/MM/yyyy'
  },
  'de': {
    lang: 'de-DE',
    siteName: 'Farias Klug Anwaltskanzlei',
    defaultTitle: 'Farias Klug Anwaltskanzlei - Umweltrecht Spezialisten',
    defaultDescription: 'Anwaltskanzlei spezialisiert auf Umweltrecht, Genehmigungen und Verteidigung gegen Sanktionen in SC.',
    currency: 'EUR',
    dateFormat: 'dd.MM.yyyy'
  }
} as const

/* ==========================================================================
   FUNÇÕES PRINCIPAIS
   ========================================================================== */

/**
 * Gera metadados SEO completos para páginas Next.js
 *
 * @param options - Opções de configuração dos metadados
 * @returns Metadados formatados para Next.js
 *
 * @example
 * ```tsx
 * export const metadata = generateMeta({
 *   locale: 'pt-br',
 *   title: 'Licenciamento Ambiental',
 *   description: 'Serviços de licenciamento ambiental em SC',
 *   keywords: ['licenciamento', 'ambiental', 'sc']
 * })
 * ```
 */
export function generateMeta(options: GenerateMetaOptions): Metadata {
  const {
    locale,
    title,
    description,
    keywords = [],
    image,
    canonical,
    type = 'website',
    author,
    publishedTime,
    modifiedTime,
    section,
    tags = [],
    noIndex = false,
    noFollow = false
  } = options

  const localeConfig = LOCALE_CONFIGS[locale]
  const siteUrl = META_DEFAULTS.siteUrl
  const defaultImage = `${siteUrl}${META_DEFAULTS.defaultImage}`
  const pageImage = image ? `${siteUrl}${image}` : defaultImage
  const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  // Título completo com site name
  const fullTitle = title.includes(localeConfig.siteName)
    ? title
    : `${title} - ${localeConfig.siteName}`

  // Keywords combinadas
  const allKeywords = [
    ...keywords,
    ...tags,
    'advocacia',
    'direito ambiental',
    'santa catarina',
    'florianópolis'
  ].filter(Boolean)

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: localeConfig.siteName,
    publisher: localeConfig.siteName,
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: localeConfig.siteName,
      images: [
        {
          url: pageImage,
          width: META_DEFAULTS.imageWidth,
          height: META_DEFAULTS.imageHeight,
          alt: title
        }
      ],
      locale: localeConfig.lang,
      type,
      publishedTime,
      modifiedTime,
      section,
      tags: tags.length > 0 ? tags : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: META_DEFAULTS.twitterHandle,
      images: [pageImage]
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'pt-BR': `${siteUrl}/${canonical || ''}`,
        'en-US': `${siteUrl}/en/${canonical || ''}`,
        'es-ES': `${siteUrl}/es/${canonical || ''}`,
        'de-DE': `${siteUrl}/de/${canonical || ''}`
      }
    },
    other: {
      'application-name': localeConfig.siteName,
      'msapplication-TileColor': '#1e40af',
      'theme-color': '#1e40af'
    }
  }
}

/**
 * Gera metadados SEO a partir de dados localizados
 *
 * @param seoData - Dados SEO localizados
 * @param locale - Idioma atual
 * @param canonical - URL canônica (opcional)
 * @returns Metadados formatados para Next.js
 *
 * @example
 * ```tsx
 * const meta = generateMetaFromLocalized(area.seoMeta, 'pt-br', `/areas/${area.slug}`)
 * ```
 */
export function generateMetaFromLocalized(
  seoData: Record<Locale, { title: string; description: string; keywords: string[] }>,
  locale: Locale,
  canonical?: string
): Metadata {
  const data = seoData[locale]

  if (!data) {
    throw new Error(`SEO data not found for locale: ${locale}`)
  }

  return generateMeta({
    locale,
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    canonical
  })
}

/**
 * Gera dados estruturados JSON-LD
 *
 * @param options - Opções para os dados estruturados
 * @returns Objeto JSON-LD
 *
 * @example
 * ```tsx
 * const jsonLd = generateStructuredData({
 *   type: 'LawFirm',
 *   locale: 'pt-br',
 *   data: {
 *     name: 'Farias Klug Advocacia',
 *     address: 'Florianópolis, SC'
 *   }
 * })
 * ```
 */
export function generateStructuredData(options: StructuredDataOptions): Record<string, any> {
  const { type, data, locale } = options
  const localeConfig = LOCALE_CONFIGS[locale]
  const siteUrl = META_DEFAULTS.siteUrl

  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    '@language': localeConfig.lang,
    url: siteUrl,
    ...data
  }

  switch (type) {
    case 'LawFirm':
      return {
        ...baseData,
        '@type': 'LegalService',
        name: data.name || localeConfig.siteName,
        description: data.description || localeConfig.defaultDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Florianópolis',
          addressRegion: 'SC',
          addressCountry: 'BR',
          ...data.address
        },
        telephone: data.telephone || '+55 48 3222-4455',
        email: data.email || 'contato@farias-klug.com.br',
        areaServed: {
          '@type': 'State',
          name: 'Santa Catarina'
        },
        serviceType: 'Direito Ambiental',
        priceRange: '$$'
      }

    case 'LegalService':
      return {
        ...baseData,
        serviceType: data.serviceType,
        provider: {
          '@type': 'LegalService',
          name: localeConfig.siteName,
          url: siteUrl
        },
        areaServed: {
          '@type': 'State',
          name: 'Santa Catarina'
        }
      }

    case 'Article':
      return {
        ...baseData,
        headline: data.headline,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Organization',
          name: localeConfig.siteName,
          url: siteUrl
        },
        publisher: {
          '@type': 'Organization',
          name: localeConfig.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/logo-hero.png`
          }
        }
      }

    case 'WebPage':
      return {
        ...baseData,
        name: data.name,
        description: data.description,
        isPartOf: {
          '@type': 'WebSite',
          name: localeConfig.siteName,
          url: siteUrl
        }
      }

    case 'BreadcrumbList':
      return {
        ...baseData,
        itemListElement: data.items?.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.url}`
        })) || []
      }

    default:
      return baseData
  }
}

/**
 * Gera breadcrumbs estruturados
 *
 * @param items - Items do breadcrumb
 * @param locale - Idioma atual
 * @returns Dados estruturados para breadcrumbs
 *
 * @example
 * ```tsx
 * const breadcrumbs = generateBreadcrumbs([
 *   { name: 'Home', url: '/' },
 *   { name: 'Áreas', url: '/areas' },
 *   { name: 'Licenciamento', url: '/areas/licenciamento' }
 * ], 'pt-br')
 * ```
 */
export function generateBreadcrumbs(
  items: Array<{ name: string; url: string }>,
  locale: Locale
): Record<string, any> {
  return generateStructuredData({
    type: 'BreadcrumbList',
    locale,
    data: { items }
  })
}

/**
 * Gera meta tags para compartilhamento social
 *
 * @param options - Opções para as meta tags
 * @returns Meta tags formatadas
 *
 * @example
 * ```tsx
 * const socialMeta = generateSocialMeta({
 *   title: 'Título da página',
 *   description: 'Descrição da página',
 *   image: '/images/social-share.jpg'
 * })
 * ```
 */
export function generateSocialMeta(options: {
  title: string
  description: string
  image?: string
  url?: string
}): Record<string, any> {
  const { title, description, image, url } = options
  const siteUrl = META_DEFAULTS.siteUrl
  const socialImage = image ? `${siteUrl}${image}` : `${siteUrl}${META_DEFAULTS.defaultImage}`

  return {
    'og:title': title,
    'og:description': description,
    'og:image': socialImage,
    'og:url': url || siteUrl,
    'og:type': 'website',
    'og:site_name': META_DEFAULTS.siteName,
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': socialImage,
    'twitter:creator': META_DEFAULTS.twitterHandle
  }
}

/* ==========================================================================
   UTILITÁRIOS
   ========================================================================== */

/**
 * Valida se os metadados são válidos
 *
 * @param meta - Metadados para validar
 * @returns true se válidos, false caso contrário
 */
export function validateMeta(meta: Partial<GenerateMetaOptions>): boolean {
  const { title, description } = meta

  if (!title || title.length < 10 || title.length > 60) {
    return false
  }

  if (!description || description.length < 50 || description.length > 160) {
    return false
  }

  return true
}

/**
 * Gera título SEO otimizado
 *
 * @param title - Título base
 * @param siteName - Nome do site
 * @param separator - Separador (padrão: ' - ')
 * @returns Título otimizado
 */
export function optimizeSEOTitle(
  title: string,
  siteName: string = META_DEFAULTS.siteName,
  separator: string = ' - '
): string {
  if (title.includes(siteName)) {
    return title
  }

  const combined = `${title}${separator}${siteName}`

  // Trunca se muito longo
  if (combined.length > 60) {
    return title.length > 60 ? title.substring(0, 57) + '...' : title
  }

  return combined
}

/**
 * Gera descrição SEO otimizada
 *
 * @param description - Descrição base
 * @param maxLength - Comprimento máximo (padrão: 160)
 * @returns Descrição otimizada
 */
export function optimizeSEODescription(
  description: string,
  maxLength: number = 160
): string {
  if (description.length <= maxLength) {
    return description
  }

  const truncated = description.substring(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')

  return lastSpace > maxLength * 0.8
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...'
}

/**
 * Extrai palavras-chave de um texto
 *
 * @param text - Texto para extrair palavras-chave
 * @param minLength - Comprimento mínimo das palavras
 * @param maxKeywords - Número máximo de palavras-chave
 * @returns Array de palavras-chave
 */
export function extractKeywords(
  text: string,
  minLength: number = 4,
  maxKeywords: number = 10
): string[] {
  const stopWords = [
    'a', 'o', 'e', 'de', 'da', 'do', 'em', 'na', 'no', 'para', 'por', 'com',
    'um', 'uma', 'que', 'se', 'não', 'são', 'dos', 'das', 'como', 'mais',
    'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
    'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had'
  ]

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word =>
      word.length >= minLength &&
      !stopWords.includes(word) &&
      !/^\d+$/.test(word)
    )

  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word)
}

/**
 * Configuração de exportação padrão
 */
export const seoUtils = {
  generateMeta,
  generateMetaFromLocalized,
  generateStructuredData,
  generateBreadcrumbs,
  generateSocialMeta,
  validateMeta,
  optimizeSEOTitle,
  optimizeSEODescription,
  extractKeywords,
  META_DEFAULTS,
  LOCALE_CONFIGS
} as const

export default seoUtils
