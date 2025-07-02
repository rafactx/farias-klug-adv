/**
 * FARIAS KLUG ADVOCACIA - CONTENT TYPES (ATUALIZADO)
 * =================================================
 *
 * Tipos para sistema de conteúdo e CMS.
 * Compatível com estrutura existente do projeto.
 *
 * @author: https://github.com/rafactx
 * @version: 1.1.0 - COMPATÍVEL
 * @description: Sistema de tipos para conteúdo, compatível com estrutura existente
 */

import {
  BaseEntity,
  BaseFilters,
  Locale,
  LocalizedText,
  OrderableEntity,
  SEOMetadata,
  StatusEntity
} from './globals'

import { NavigationItem } from './navigation'

/* ==========================================================================
   TIPOS DE CONTEÚDO BASE
   ========================================================================== */

/** Conteúdo básico com internacionalização */
export interface BaseContent extends BaseEntity, StatusEntity {
  /** Título */
  title: LocalizedText
  /** Slug para URL */
  slug: string
  /** Descrição/resumo */
  description: LocalizedText
  /** Conteúdo principal */
  content?: LocalizedText
  /** Metadados SEO */
  seoMeta: SEOMetadata
  /** Tags */
  tags?: string[]
  /** Imagem de destaque */
  featuredImage?: string
  /** Galeria de imagens */
  gallery?: string[]
}

/** Página estática */
export interface Page extends BaseContent {
  /** Tipo de página */
  type: 'home' | 'about' | 'contact' | 'legal' | 'privacy' | 'terms' | 'custom'
  /** Template a ser usado */
  template?: string
  /** Seções da página */
  sections?: PageSection[]
  /** Se tem sidebar */
  hasSidebar?: boolean
  /** Se mostra breadcrumbs */
  showBreadcrumbs?: boolean
  /** Menu customizado */
  customMenu?: NavigationItem[]
}

/** Seção de página */
export interface PageSection extends BaseEntity, OrderableEntity {
  /** Tipo da seção */
  type: 'hero' | 'content' | 'gallery' | 'form' | 'testimonials' | 'faq' | 'stats' | 'cta'
  /** Título da seção */
  title?: LocalizedText
  /** Conteúdo da seção */
  content?: LocalizedText
  /** Configurações visuais */
  styling?: {
    backgroundColor?: string
    textColor?: string
    padding?: string
    margin?: string
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean
  }
  /** Dados específicos da seção */
  data?: Record<string, any>
  /** Se está visível */
  visible: boolean
}

/* ==========================================================================
   BLOG E ARTIGOS
   ========================================================================== */

/** Categoria de blog */
export interface BlogCategory extends BaseEntity, StatusEntity, OrderableEntity {
  /** Nome da categoria */
  name: LocalizedText
  /** Slug */
  slug: string
  /** Descrição */
  description?: LocalizedText
  /** Cor tema */
  color?: string
  /** Ícone */
  icon?: string
  /** Imagem de destaque */
  featuredImage?: string
  /** SEO */
  seoMeta: SEOMetadata
  /** Categoria pai */
  parentId?: string
  /** Se está em destaque */
  featured?: boolean
}

/** Post do blog */
export interface BlogPost extends BaseContent, OrderableEntity {
  /** Categoria */
  categoryId: string
  /** Autor */
  authorId: string
  /** Resumo/excerpt */
  excerpt: LocalizedText
  /** Tempo de leitura estimado */
  readingTime?: number
  /** Data de publicação */
  publishedAt?: Date
  /** Se permite comentários */
  allowComments?: boolean
  /** Se está em destaque */
  featured?: boolean
  /** Relacionados */
  relatedPosts?: string[]
  /** Visualizações */
  views?: number
  /** Likes */
  likes?: number
  /** Comentários */
  commentsCount?: number
}

/* ==========================================================================
   FAQ E PERGUNTAS FREQUENTES
   ========================================================================== */

/** Categoria de FAQ */
export interface FAQCategory extends BaseEntity, StatusEntity, OrderableEntity {
  name: LocalizedText
  slug: string
  description?: LocalizedText
  icon?: string
  color?: string
}

/** Pergunta frequente */
export interface FAQ extends BaseEntity, StatusEntity, OrderableEntity {
  /** Pergunta */
  question: LocalizedText
  /** Resposta */
  answer: LocalizedText
  /** Categoria */
  categoryId?: string
  /** Área jurídica relacionada */
  legalAreaId?: string
  /** Tags */
  tags?: string[]
  /** Se está em destaque */
  featured?: boolean
  /** Visualizações */
  views?: number
  /** Avaliações de utilidade */
  helpful?: {
    yes: number
    no: number
  }
}

/* ==========================================================================
   FORMULÁRIOS E CAMPOS
   ========================================================================== */

/** Tipo de campo de formulário */
export type FormFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'date'
  | 'number'
  | 'url'
  | 'password'

/** Campo de formulário */
export interface FormField extends BaseEntity, OrderableEntity {
  /** Nome do campo */
  name: string
  /** Tipo */
  type: FormFieldType
  /** Label */
  label: LocalizedText
  /** Placeholder */
  placeholder?: LocalizedText
  /** Texto de ajuda */
  helpText?: LocalizedText
  /** Se é obrigatório */
  required: boolean
  /** Se está desabilitado */
  disabled?: boolean
  /** Valor padrão */
  defaultValue?: string
  /** Validação */
  validation?: {
    minLength?: number
    maxLength?: number
    pattern?: string
    min?: number
    max?: number
    accept?: string // para arquivos
    multiple?: boolean
    customMessages?: LocalizedText
  }
  /** Opções (para select/radio/checkbox) */
  options?: Array<{
    value: string
    label: LocalizedText
    disabled?: boolean
  }>
  /** Styling */
  styling?: {
    width?: 'full' | 'half' | 'third' | 'quarter'
    className?: string
  }
}

/** Formulário */
export interface Form extends BaseEntity, StatusEntity {
  /** Nome do formulário */
  name: LocalizedText
  /** Descrição */
  description?: LocalizedText
  /** Campos */
  fields: FormField[]
  /** Configurações */
  settings: {
    /** Se requer captcha */
    requireCaptcha: boolean
    /** Email de notificação */
    notificationEmail?: string
    /** Mensagem de sucesso */
    successMessage: LocalizedText
    /** URL de redirecionamento */
    redirectUrl?: string
    /** Se salva submissões */
    saveSubmissions: boolean
    /** Se envia email de confirmação */
    sendConfirmationEmail: boolean
    /** Template do email */
    emailTemplate?: string
  }
  /** Estatísticas */
  stats?: {
    totalSubmissions: number
    conversionRate: number
    averageCompletionTime: number
    abandonmentRate: number
  }
}

/** Submissão de formulário */
export interface FormSubmission extends BaseEntity {
  /** Formulário */
  formId: string
  /** Dados submetidos */
  data: Record<string, any>
  /** IP do usuário */
  ipAddress?: string
  /** User Agent */
  userAgent?: string
  /** Página de origem */
  referrer?: string
  /** Status da submissão */
  status: 'pending' | 'processed' | 'spam' | 'archived'
  /** Se foi lida */
  isRead: boolean
  /** Resposta enviada */
  hasResponse: boolean
  /** Notas internas */
  internalNotes?: string
}

/* ==========================================================================
   MÍDIA E ASSETS
   ========================================================================== */

/** Categoria de mídia */
export interface MediaCategory extends BaseEntity, OrderableEntity {
  name: string
  slug: string
  description?: string
  parentId?: string
}

/** Asset de mídia */
export interface MediaAsset extends BaseEntity {
  /** Nome do arquivo */
  filename: string
  /** Nome original */
  originalName: string
  /** Título */
  title?: LocalizedText
  /** Descrição/Alt text */
  description?: LocalizedText
  /** URL do arquivo */
  url: string
  /** Tipo MIME */
  mimeType: string
  /** Tamanho em bytes */
  size: number
  /** Dimensões (para imagens) */
  dimensions?: {
    width: number
    height: number
  }
  /** Duração (para vídeos/áudios) */
  duration?: number
  /** Categoria */
  categoryId?: string
  /** Tags */
  tags?: string[]
  /** Se é público */
  isPublic: boolean
  /** Usuário que fez upload */
  uploadedBy?: string
  /** Número de downloads */
  downloadCount?: number
  /** Varações (thumbnails, etc.) */
  variants?: Array<{
    size: string
    url: string
    width?: number
    height?: number
  }>
}

/* ==========================================================================
   CONFIGURAÇÕES DE CONTEÚDO
   ========================================================================== */

/** Configuração do CMS */
export interface CMSConfig {
  /** Configuração geral */
  general: {
    siteName: LocalizedText
    siteDescription: LocalizedText
    siteUrl: string
    adminEmail: string
    defaultLocale: Locale
    supportedLocales: Locale[]
    timezone: string
    dateFormat: string
    timeFormat: string
  }
  /** Configuração de mídia */
  media: {
    maxFileSize: number
    allowedFileTypes: string[]
    imageQuality: number
    generateThumbnails: boolean
    thumbnailSizes: Array<{
      name: string
      width: number
      height: number
    }>
    uploadPath: string
    cdnUrl?: string
  }
  /** Configuração de email */
  email: {
    provider: 'smtp' | 'sendgrid' | 'mailgun' | 'ses'
    fromAddress: string
    fromName: LocalizedText
    replyTo?: string
    templates: Record<string, string>
  }
  /** Configuração de cache */
  cache: {
    enabled: boolean
    ttl: number
    strategy: 'memory' | 'redis' | 'file'
  }
  /** Funcionalidades */
  features: {
    blog: boolean
    comments: boolean
    search: boolean
    sitemap: boolean
    rss: boolean
    multiLanguage: boolean
    userRegistration: boolean
    newsletter: boolean
  }
}

/* ==========================================================================
   BUSCA E FILTROS
   ========================================================================== */

/** Filtros de conteúdo */
export interface ContentFilters extends BaseFilters {
  /** Tipo de conteúdo */
  type?: 'page' | 'blog' | 'faq' | 'media'
  /** Categoria */
  categoryId?: string
  /** Tags */
  tags?: string[]
  /** Autor */
  authorId?: string
  /** Data de criação */
  dateRange?: {
    startDate?: Date
    endDate?: Date
  }
  /** Se está publicado */
  published?: boolean
  /** Se está em destaque */
  featured?: boolean
}

/** Resultado de busca */
export interface SearchResult {
  /** Tipo de conteúdo */
  type: 'page' | 'blog' | 'faq' | 'legal-area' | 'team-member'
  /** ID do item */
  id: string
  /** Título */
  title: string
  /** Descrição/excerpt */
  description: string
  /** URL */
  url: string
  /** Imagem */
  image?: string
  /** Score da busca */
  relevanceScore: number
  /** Highlights */
  highlights?: string[]
  /** Metadados adicionais */
  meta?: Record<string, any>
}

/* ==========================================================================
   ANALYTICS DE CONTEÚDO
   ========================================================================== */

/** Métricas de conteúdo */
export interface ContentMetrics extends BaseEntity {
  /** ID do conteúdo */
  contentId: string
  /** Tipo do conteúdo */
  contentType: string
  /** Período */
  period: {
    startDate: Date
    endDate: Date
  }
  /** Visualizações */
  views: {
    total: number
    unique: number
    returning: number
  }
  /** Engagement */
  engagement: {
    timeOnPage: number
    bounceRate: number
    scrollDepth: number
    interactions: number
  }
  /** Compartilhamentos */
  shares: {
    total: number
    byPlatform: Record<string, number>
  }
  /** Conversões */
  conversions?: {
    total: number
    rate: number
    value?: number
  }
  /** Origem do tráfego */
  sources: {
    direct: number
    organic: number
    social: number
    referral: number
    email: number
    paid: number
  }
  /** Dispositivos */
  devices: {
    desktop: number
    mobile: number
    tablet: number
  }
  /** Localizações */
  locations: Record<string, number>
}

/* ==========================================================================
   VERSIONAMENTO E REVISÕES
   ========================================================================== */

/** Revisão de conteúdo */
export interface ContentRevision extends BaseEntity {
  /** Conteúdo original */
  contentId: string
  /** Tipo de conteúdo */
  contentType: string
  /** Versão */
  version: number
  /** Dados da revisão */
  data: Record<string, any>
  /** Mudanças */
  changes: Array<{
    field: string
    oldValue: any
    newValue: any
  }>
  /** Comentário da revisão */
  comment?: string
  /** Usuário que fez a revisão */
  revisedBy: string
  /** Se é versão publicada */
  isPublished: boolean
  /** Tags da revisão */
  tags?: string[]
}

/* ==========================================================================
   EXPORTS E CONSTANTES
   ========================================================================== */

/** Tipos de página */
export const PAGE_TYPES = [
  'home', 'about', 'contact', 'legal', 'privacy', 'terms', 'custom'
] as const

/** Tipos de seção */
export const SECTION_TYPES = [
  'hero', 'content', 'gallery', 'form', 'testimonials', 'faq', 'stats', 'cta'
] as const

/** Tipos de campo de formulário */
export const FORM_FIELD_TYPES: FormFieldType[] = [
  'text', 'email', 'tel', 'textarea', 'select', 'checkbox', 'radio',
  'file', 'date', 'number', 'url', 'password'
]

/** Status de submissão */
export const SUBMISSION_STATUSES = [
  'pending', 'processed', 'spam', 'archived'
] as const
