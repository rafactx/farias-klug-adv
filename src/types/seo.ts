/**
 * FARIAS KLUG ADVOCACIA - SEO TYPES
 * =================================
 *
 * Tipos específicos para SEO, metadados e dados estruturados.
 * Otimização para mecanismos de busca e redes sociais.
 *
 * @author: https://github.com/rafactx
 * @version: 1.0.0
 * @description: Sistema completo de tipos para SEO
 */

import { Locale, LocalizedText } from './globals'

/* ==========================================================================
   METADADOS BASE
   ========================================================================== */

/** Metadados SEO básicos (compatível com o globals existente) */
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
}

/** Metadados SEO internacionalizados */
export interface LocalizedSEOMetadata {
  title: LocalizedText
  description: LocalizedText
  keywords?: LocalizedText
  image?: string
  canonical?: Record<Locale, string>
  noIndex?: boolean
  noFollow?: boolean
}

/* ==========================================================================
   OPEN GRAPH
   ========================================================================== */

/** Dados Open Graph para redes sociais */
export interface OpenGraphData {
  /** Título OG */
  title?: string
  /** Descrição OG */
  description?: string
  /** Imagem OG */
  image?: string
  /** Múltiplas imagens */
  images?: Array<{
    url: string
    width?: number
    height?: number
    alt?: string
    type?: string
  }>
  /** URL da página */
  url?: string
  /** Tipo de conteúdo */
  type?: 'website' | 'article' | 'profile' | 'book' | 'music.song' | 'video.movie'
  /** Nome do site */
  siteName?: string
  /** Idioma */
  locale?: string
  /** Idiomas alternativos */
  alternateLocales?: string[]
  /** Para artigos */
  article?: {
    publishedTime?: string
    modifiedTime?: string
    expirationTime?: string
    author?: string[]
    section?: string
    tags?: string[]
  }
  /** Para perfis */
  profile?: {
    firstName?: string
    lastName?: string
    username?: string
    gender?: 'male' | 'female'
  }
}

/* ==========================================================================
   TWITTER CARDS
   ========================================================================== */

/** Dados Twitter Cards */
export interface TwitterCardData {
  /** Tipo de card */
  card?: 'summary' | 'summary_large_image' | 'app' | 'player'
  /** Título */
  title?: string
  /** Descrição */
  description?: string
  /** Imagem */
  image?: string
  /** Alt da imagem */
  imageAlt?: string
  /** Criador do conteúdo */
  creator?: string
  /** Site responsável */
  site?: string
  /** Para app cards */
  app?: {
    id: {
      iphone?: string
      ipad?: string
      googleplay?: string
    }
    url?: {
      iphone?: string
      ipad?: string
      googleplay?: string
    }
    name?: {
      iphone?: string
      ipad?: string
      googleplay?: string
    }
  }
  /** Para player cards */
  player?: {
    url: string
    width: number
    height: number
    stream?: string
  }
}

/* ==========================================================================
   DADOS ESTRUTURADOS (SCHEMA.ORG)
   ========================================================================== */

/** Schema.org base */
export interface StructuredDataBase {
  '@context': 'https://schema.org'
  '@type': string
  '@id'?: string
}

/** Organização (Escritório de Advocacia) */
export interface LawFirmSchema extends StructuredDataBase {
  '@type': 'LegalService' | 'Attorney' | 'Organization'
  name: string
  description?: string
  url?: string
  logo?: string
  image?: string[]
  telephone?: string
  email?: string
  address?: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  /** Áreas de prática */
  areaServed?: string[]
  /** Serviços oferecidos */
  hasOfferCatalog?: {
    '@type': 'OfferCatalog'
    name: string
    itemListElement: Array<{
      '@type': 'Offer'
      itemOffered: {
        '@type': 'Service'
        name: string
        description?: string
      }
    }>
  }
  /** Redes sociais */
  sameAs?: string[]
  /** Horário de funcionamento */
  openingHours?: string[]
  /** Avaliações */
  aggregateRating?: {
    '@type': 'AggregateRating'
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
}

/** Pessoa (Advogado) */
export interface LawyerSchema extends StructuredDataBase {
  '@type': 'Person'
  name: string
  jobTitle?: string
  description?: string
  image?: string
  url?: string
  email?: string
  telephone?: string
  /** Organização */
  worksFor?: {
    '@type': 'LegalService'
    name: string
    url?: string
  }
  /** Especialidades */
  knowsAbout?: string[]
  /** Formação */
  alumniOf?: Array<{
    '@type': 'EducationalOrganization'
    name: string
  }>
  /** Redes sociais */
  sameAs?: string[]
}

/** Artigo/Post */
export interface ArticleSchema extends StructuredDataBase {
  '@type': 'Article' | 'BlogPosting' | 'NewsArticle'
  headline: string
  description?: string
  image?: string[]
  author: {
    '@type': 'Person'
    name: string
    url?: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo?: {
      '@type': 'ImageObject'
      url: string
    }
  }
  datePublished: string
  dateModified?: string
  mainEntityOfPage?: string
  /** Palavras-chave */
  keywords?: string[]
  /** Categoria */
  articleSection?: string
  /** Tempo de leitura */
  timeRequired?: string
}

/** Perguntas Frequentes */
export interface FAQSchema extends StructuredDataBase {
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

/** Serviço Jurídico */
export interface LegalServiceSchema extends StructuredDataBase {
  '@type': 'Service'
  name: string
  description?: string
  provider: {
    '@type': 'LegalService'
    name: string
    url?: string
  }
  /** Área de serviço */
  areaServed?: string[]
  /** Categoria */
  serviceType?: string
  /** Ofertas */
  offers?: Array<{
    '@type': 'Offer'
    price?: string
    priceCurrency?: string
    description?: string
    availability?: string
  }>
}

/** Avaliação */
export interface ReviewSchema extends StructuredDataBase {
  '@type': 'Review'
  author: {
    '@type': 'Person'
    name: string
  }
  datePublished: string
  description?: string
  reviewBody: string
  reviewRating: {
    '@type': 'Rating'
    ratingValue: number
    bestRating?: number
    worstRating?: number
  }
  itemReviewed: {
    '@type': 'LegalService' | 'Person'
    name: string
  }
}

/* ==========================================================================
   BREADCRUMBS
   ========================================================================== */

/** Schema de Breadcrumbs */
export interface BreadcrumbSchema extends StructuredDataBase {
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }>
}

/* ==========================================================================
   METADADOS COMPLETOS DE PÁGINA
   ========================================================================== */

/** Metadados completos para uma página */
export interface PageSEO {
  /** Metadados básicos */
  basic: SEOMetadata
  /** Open Graph */
  openGraph?: OpenGraphData
  /** Twitter Cards */
  twitter?: TwitterCardData
  /** Dados estruturados */
  structuredData?: Array<
    | LawFirmSchema
    | LawyerSchema
    | ArticleSchema
    | FAQSchema
    | LegalServiceSchema
    | ReviewSchema
    | BreadcrumbSchema
  >
  /** Meta tags customizadas */
  customMeta?: Array<{
    name?: string
    property?: string
    content: string
    httpEquiv?: string
  }>
  /** Links rel */
  links?: Array<{
    rel: string
    href: string
    hreflang?: string
    type?: string
    title?: string
  }>
}

/* ==========================================================================
   CONFIGURAÇÃO DE SEO
   ========================================================================== */

/** Configuração global de SEO */
export interface SEOConfig {
  /** Site básico */
  site: {
    name: string
    description: string
    url: string
    logo: string
    defaultImage: string
  }
  /** Template de títulos */
  titleTemplate: string
  /** Separador de títulos */
  titleSeparator: string
  /** Keywords globais */
  defaultKeywords: string[]
  /** Configuração por idioma */
  localized: Record<Locale, {
    title: string
    description: string
    keywords: string[]
    locale: string
    territory: string
  }>
  /** Open Graph padrão */
  defaultOpenGraph: Omit<OpenGraphData, 'title' | 'description'>
  /** Twitter padrão */
  defaultTwitter: Omit<TwitterCardData, 'title' | 'description'>
  /** Dados estruturados globais */
  organizationSchema: LawFirmSchema
  /** Configurações de analytics */
  analytics: {
    googleAnalytics?: string
    googleTagManager?: string
    facebookPixel?: string
    linkedinInsight?: string
  }
  /** Verificações */
  verification: {
    google?: string
    bing?: string
    yandex?: string
    baidu?: string
  }
}

/* ==========================================================================
   UTILS PARA SEO
   ========================================================================== */

/** Configuração de sitemap */
export interface SitemapConfig {
  /** URLs estáticas */
  staticUrls: Array<{
    url: string
    lastModified?: Date
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
    alternateUrls?: Record<Locale, string>
  }>
  /** URLs dinâmicas */
  dynamicUrls: Array<{
    pattern: string
    getData: () => Promise<Array<{
      url: string
      lastModified?: Date
      changeFrequency?: string
      priority?: number
      alternateUrls?: Record<Locale, string>
    }>>
  }>
}

/** Configuração de robots.txt */
export interface RobotsConfig {
  /** User agents */
  userAgent: string
  /** Permitir */
  allow?: string[]
  /** Não permitir */
  disallow?: string[]
  /** Crawl delay */
  crawlDelay?: number
  /** URL do sitemap */
  sitemap?: string[]
}

/* ==========================================================================
   ANÁLISE E AUDITORIA
   ========================================================================== */

/** Métricas de SEO */
export interface SEOMetrics {
  /** Página analisada */
  url: string
  /** Data da análise */
  analyzedAt: Date
  /** Título */
  title: {
    value: string
    length: number
    isOptimal: boolean
  }
  /** Descrição */
  description: {
    value: string
    length: number
    isOptimal: boolean
  }
  /** Keywords */
  keywords: {
    count: number
    density: Record<string, number>
  }
  /** Cabeçalhos */
  headings: {
    h1: number
    h2: number
    h3: number
    structure: boolean
  }
  /** Imagens */
  images: {
    total: number
    withAlt: number
    withoutAlt: number
    altOptimization: number
  }
  /** Links */
  links: {
    internal: number
    external: number
    broken: number
  }
  /** Performance */
  performance: {
    loadTime: number
    mobileOptimized: boolean
    coreWebVitals: {
      lcp: number
      fid: number
      cls: number
    }
  }
  /** Score geral */
  score: {
    overall: number
    content: number
    technical: number
    performance: number
  }
}

/* ==========================================================================
   EXPORTS DE CONSTANTES
   ========================================================================== */

/** Tipos de conteúdo Open Graph */
export const OG_TYPES = [
  'website', 'article', 'profile', 'book', 'music.song', 'video.movie'
] as const

/** Tipos de Twitter Card */
export const TWITTER_CARD_TYPES = [
  'summary', 'summary_large_image', 'app', 'player'
] as const

/** Tipos de Schema.org comuns */
export const SCHEMA_TYPES = [
  'Organization', 'Person', 'Article', 'FAQPage', 'Service', 'Review', 'BreadcrumbList'
] as const

/** Frequências de mudança para sitemap */
export const CHANGE_FREQUENCIES = [
  'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
] as const
