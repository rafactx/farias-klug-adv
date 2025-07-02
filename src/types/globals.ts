/**
 * FARIAS KLUG ADVOCACIA - GLOBAL TYPES
 * ===================================
 *
 * Tipos globais e interfaces base da aplicação.
 * Mantém consistência em todo o projeto.
 *
 * @author: https://github.com/rafactx
 * @version: 1.1.0 - EXPANDIDO
 * @description: Tipos fundamentais e utilities globais
 */

/* ==========================================================================
   TIPOS BASE DE LOCALIZAÇÃO
   ========================================================================== */

/** Idiomas suportados pelo sistema */
export type Locale = 'pt-br' | 'en' | 'es' | 'de'

/** Texto internacionalizado */
export type LocalizedText = Record<Locale, string>

/** Configuração de idioma */
export interface LocaleConfig {
  code: Locale
  name: string
  flag: string
  direction: 'ltr' | 'rtl'
  dateFormat: string
  currency: string
}

/* ==========================================================================
   ENTIDADES BASE
   ========================================================================== */

/** Interface base para todas as entidades */
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

/** Entidade com suporte a internacionalização */
export interface LocalizedEntity extends BaseEntity {
  locale: Locale
  translations?: Record<Locale, Partial<any>>
}

/** Entidade com status */
export interface StatusEntity extends BaseEntity {
  status: 'active' | 'inactive' | 'draft' | 'archived'
  publishedAt?: Date
}

/** Entidade ordenável */
export interface OrderableEntity extends BaseEntity {
  order: number
  priority?: 'low' | 'normal' | 'high'
}

/* ==========================================================================
   METADADOS SEO
   ========================================================================== */

/** Metadados SEO básicos */
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
}

/** Metadados SEO completos */
export interface ExtendedSEOMetadata extends SEOMetadata {
  /** Open Graph */
  og?: {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article' | 'profile'
    url?: string
    siteName?: string
  }
  /** Twitter Cards */
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    title?: string
    description?: string
    image?: string
    creator?: string
    site?: string
  }
  /** Dados estruturados JSON-LD */
  structuredData?: Record<string, any>
  /** Meta tags customizadas */
  customMeta?: Array<{
    name?: string
    property?: string
    content: string
  }>
}

/* ==========================================================================
   TIPOS DE MÍDIA E ARQUIVOS
   ========================================================================== */

/** Imagem com metadados */
export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
  srcSet?: string
  sizes?: string
  placeholder?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
}

/** Arquivo genérico */
export interface FileAsset {
  url: string
  name: string
  size: number
  type: string
  mimeType: string
  extension: string
  uploadedAt: Date
}

/** Documento */
export interface DocumentAsset extends FileAsset {
  title?: string
  description?: string
  downloadCount?: number
  isPublic?: boolean
}

/* ==========================================================================
   TIPOS DE RESPOSTA E OPERAÇÕES
   ========================================================================== */

/** Resposta de API padrão */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: string[]
  meta?: {
    page?: number
    limit?: number
    total?: number
    totalPages?: number
  }
}

/** Resultado de operação */
export interface OperationResult<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  warnings?: string[]
}

/** Estado de loading */
export interface LoadingState {
  isLoading: boolean
  error?: string
  lastUpdated?: Date
}

/* ==========================================================================
   TIPOS DE FILTROS E BUSCA
   ========================================================================== */

/** Filtros base para listagens */
export interface BaseFilters {
  search?: string
  status?: string[]
  limit?: number
  offset?: number
  orderBy?: string
  orderDirection?: 'asc' | 'desc'
  locale?: Locale
}

/** Resultado paginado */
export interface PaginatedResult<T> {
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrevious: boolean
  }
}

/** Opção de filtro */
export interface FilterOption {
  value: string | number
  label: string
  count?: number
  disabled?: boolean
}

/* ==========================================================================
   TIPOS DE FORMULÁRIO
   ========================================================================== */

/** Estado de campo de formulário */
export interface FieldState {
  value: any
  error?: string
  touched: boolean
  dirty: boolean
  valid: boolean
}

/** Estado de formulário */
export interface FormState {
  fields: Record<string, FieldState>
  isValid: boolean
  isSubmitting: boolean
  isDirty: boolean
  errors: Record<string, string>
  submitCount: number
}

/** Validação de campo */
export interface FieldValidation {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
  messages?: Record<string, string>
}

/* ==========================================================================
   TIPOS DE CONFIGURAÇÃO
   ========================================================================== */

/** Configuração do site */
export interface SiteConfig {
  name: string
  description: string
  url: string
  locale: {
    default: Locale
    supported: Locale[]
  }
  contact: {
    email: string
    phone: string
    whatsapp?: string
    address: LocalizedText
  }
  social: {
    instagram?: string
    linkedin?: string
    facebook?: string
    youtube?: string
  }
  features: {
    blog: boolean
    testimonials: boolean
    newsletter: boolean
    darkMode: boolean
  }
  seo: ExtendedSEOMetadata
}

/** Configuração de ambiente */
export interface EnvConfig {
  NODE_ENV: 'development' | 'production' | 'test'
  APP_URL: string
  DATABASE_URL?: string
  GOOGLE_ANALYTICS_ID?: string
  GOOGLE_TAG_MANAGER_ID?: string
  RECAPTCHA_SITE_KEY?: string
  EMAIL_SERVICE_API_KEY?: string
  UPLOAD_MAX_SIZE: number
  ALLOWED_FILE_TYPES: string[]
}

/* ==========================================================================
   TIPOS DE USUÁRIO E AUTENTICAÇÃO
   ========================================================================== */

/** Usuário básico */
export interface User extends BaseEntity {
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'editor' | 'viewer'
  permissions: string[]
  lastLoginAt?: Date
  isActive: boolean
}

/** Sessão de usuário */
export interface UserSession {
  user: User
  token: string
  expiresAt: Date
  refreshToken?: string
}

/** Permissões */
export interface Permission {
  id: string
  name: string
  description: string
  resource: string
  action: string
}

/* ==========================================================================
   TIPOS DE NOTIFICAÇÃO E FEEDBACK
   ========================================================================== */

/** Tipos de notificação */
export type NotificationType = 'success' | 'error' | 'warning' | 'info'

/** Notificação */
export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    handler: () => void
  }
  createdAt: Date
}

/** Toast */
export interface Toast extends Omit<Notification, 'id'> {
  id?: string
  autoClose?: boolean
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'
}

/* ==========================================================================
   TIPOS UTILITÁRIOS
   ========================================================================== */

/** Torna todas as propriedades opcionais recursivamente */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/** Torna propriedades específicas obrigatórias */
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

/** Omite propriedades específicas recursivamente */
export type DeepOmit<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P] extends object
    ? DeepOmit<T[P], K>
    : T[P]
}

/** Extrai valor de array ou retorna o tipo */
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

/** Chaves que são strings */
export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

/** Valores que são strings */
export type StringValues<T> = T[StringKeys<T>]

/* ==========================================================================
   TIPOS DE EVENTO E ANALYTICS
   ========================================================================== */

/** Evento de analytics */
export interface AnalyticsEvent {
  name: string
  category: string
  action: string
  label?: string
  value?: number
  customParams?: Record<string, any>
}

/** Dados de tracking */
export interface TrackingData {
  userId?: string
  sessionId: string
  timestamp: Date
  page: string
  referrer?: string
  userAgent: string
  locale: Locale
}

/* ==========================================================================
   TIPOS DE ERRO
   ========================================================================== */

/** Erro customizado da aplicação */
export interface AppError extends Error {
  code: string
  statusCode?: number
  details?: any
  timestamp: Date
  userId?: string
  requestId?: string
}

/** Erro de validação */
export interface ValidationError extends AppError {
  field: string
  value: any
  rule: string
}

/** Erro de rede */
export interface NetworkError extends AppError {
  url: string
  method: string
  responseStatus?: number
  timeout?: boolean
}

/* ==========================================================================
   EXPORTS DE CONSTANTES
   ========================================================================== */

/** Locales suportados como array */
export const SUPPORTED_LOCALES: Locale[] = ['pt-br', 'en', 'es', 'de']

/** Locale padrão */
export const DEFAULT_LOCALE: Locale = 'pt-br'

/** Status disponíveis */
export const ENTITY_STATUSES = ['active', 'inactive', 'draft', 'archived'] as const

/** Tipos de notificação */
export const NOTIFICATION_TYPES = ['success', 'error', 'warning', 'info'] as const

/** Roles de usuário */
export const USER_ROLES = ['admin', 'editor', 'viewer'] as const

/** Prioridades */
export const PRIORITIES = ['low', 'normal', 'high'] as const
