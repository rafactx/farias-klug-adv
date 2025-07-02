/**
 * FARIAS KLUG ADVOCACIA - SOCIAL TYPES
 * ===================================
 *
 * Tipos para redes sociais, contato e comunicação.
 * Inclui compartilhamento, integração e métricas.
 *
 * @author: https://github.com/rafactx
 * @version: 1.1.0 - EXPANDIDO
 * @description: Sistema completo de tipos para interação social
 */

import { BaseEntity, LocalizedText } from './globals'

/* ==========================================================================
   CONTATO SOCIAL (MANTENDO COMPATIBILIDADE)
   ========================================================================== */

/** Contato social (formato existente mantido) */
export interface SocialContact {
  type: 'whatsapp' | 'instagram' | 'email' | 'phone' | 'linkedin' | 'facebook' | 'youtube'
  label: LocalizedText
  value: string
  icon: string
  color: string
  /** Se está ativo */
  active?: boolean
  /** Ordem de exibição */
  order?: number
}

/** Informações de contato (formato existente mantido) */
export interface ContactInfo {
  phone: string
  email: string
  whatsapp: string
  instagram: string
  /** Endereço internacionalizado */
  address: LocalizedText
  /** Horário de funcionamento */
  businessHours?: LocalizedText
  /** Informações adicionais */
  additionalInfo?: {
    linkedin?: string
    facebook?: string
    youtube?: string
    website?: string
  }
}

/* ==========================================================================
   PERFIS DE REDES SOCIAIS
   ========================================================================== */

/** Rede social disponível */
export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'tiktok'
  | 'whatsapp'
  | 'telegram'

/** Perfil de rede social */
export interface SocialProfile {
  /** Plataforma */
  platform: SocialPlatform
  /** Nome do perfil */
  username: string
  /** URL completa */
  url: string
  /** Nome de exibição */
  displayName: string
  /** Descrição */
  description?: LocalizedText
  /** Avatar/foto */
  avatar?: string
  /** Se está verificado */
  verified?: boolean
  /** Se está ativo */
  active: boolean
  /** Estatísticas */
  stats?: {
    followers?: number
    following?: number
    posts?: number
    engagement?: number
  }
  /** Configurações */
  config?: {
    /** Se deve aparecer no site */
    showOnWebsite: boolean
    /** Se é perfil principal */
    isPrimary: boolean
    /** Ordem de exibição */
    order: number
    /** Cor do tema */
    themeColor: string
    /** Ícone personalizado */
    customIcon?: string
  }
}

/* ==========================================================================
   COMPARTILHAMENTO SOCIAL
   ========================================================================== */

/** Opção de compartilhamento */
export interface ShareOption {
  /** Plataforma */
  platform: SocialPlatform
  /** Nome para exibir */
  name: string
  /** Ícone */
  icon: string
  /** Cor do tema */
  color: string
  /** URL de compartilhamento */
  shareUrl: string
  /** Se está ativo */
  enabled: boolean
  /** Ordem */
  order: number
}

/** Configuração de compartilhamento */
export interface ShareConfig {
  /** URL da página */
  url: string
  /** Título para compartilhar */
  title: string
  /** Descrição */
  description: string
  /** Imagem */
  image?: string
  /** Hashtags sugeridas */
  hashtags?: string[]
  /** Via (para Twitter) */
  via?: string
  /** Texto adicional */
  text?: string
}

/** Dados de compartilhamento por plataforma */
export interface PlatformShareData {
  facebook: {
    url: string
    quote?: string
    hashtag?: string
  }
  twitter: {
    url: string
    text?: string
    hashtags?: string[]
    via?: string
    related?: string[]
  }
  linkedin: {
    url: string
    title?: string
    summary?: string
    source?: string
  }
  whatsapp: {
    text: string
    url?: string
  }
  telegram: {
    url: string
    text?: string
  }
  email: {
    subject: string
    body: string
    to?: string
  }
}

/* ==========================================================================
   MÉTRICAS E ANALYTICS SOCIAL
   ========================================================================== */

/** Métricas de rede social */
export interface SocialMetrics extends BaseEntity {
  /** Plataforma */
  platform: SocialPlatform
  /** Período das métricas */
  period: {
    startDate: Date
    endDate: Date
  }
  /** Seguidores */
  followers: {
    total: number
    new: number
    lost: number
    growth: number
  }
  /** Engajamento */
  engagement: {
    total: number
    likes: number
    comments: number
    shares: number
    saves?: number
    clicks?: number
    rate: number
  }
  /** Alcance */
  reach: {
    total: number
    organic: number
    paid?: number
    impressions: number
  }
  /** Posts */
  posts: {
    total: number
    published: number
    scheduled: number
    averageEngagement: number
  }
  /** Demografia */
  demographics?: {
    ageGroups: Record<string, number>
    gender: Record<string, number>
    locations: Record<string, number>
    devices: Record<string, number>
  }
}

/** Métricas de compartilhamento */
export interface ShareMetrics extends BaseEntity {
  /** URL compartilhada */
  url: string
  /** Plataforma */
  platform: SocialPlatform
  /** Número de compartilhamentos */
  shareCount: number
  /** Clicks gerados */
  clickCount: number
  /** Impressões */
  impressions: number
  /** Taxa de conversão */
  conversionRate: number
  /** Dados do usuário que compartilhou */
  userAgent?: string
  /** Referrer */
  referrer?: string
  /** Localização */
  location?: string
}

/* ==========================================================================
   INTEGRAÇÃO COM APIS SOCIAIS
   ========================================================================== */

/** Configuração de API social */
export interface SocialAPIConfig {
  /** Plataforma */
  platform: SocialPlatform
  /** Credenciais */
  credentials: {
    appId?: string
    appSecret?: string
    accessToken?: string
    refreshToken?: string
    apiKey?: string
  }
  /** Configurações */
  settings: {
    /** Se auto-posting está ativo */
    autoPost: boolean
    /** Se busca métricas automaticamente */
    autoFetchMetrics: boolean
    /** Intervalo de sincronização (minutos) */
    syncInterval: number
    /** Webhook URL */
    webhookUrl?: string
  }
  /** Status */
  status: 'active' | 'inactive' | 'error' | 'expired'
  /** Última sincronização */
  lastSync?: Date
  /** Erros */
  lastError?: string
}

/* ==========================================================================
   POSTS E CONTEÚDO SOCIAL
   ========================================================================== */

/** Tipo de post social */
export type SocialPostType = 'text' | 'image' | 'video' | 'carousel' | 'story' | 'reel'

/** Status do post */
export type SocialPostStatus = 'draft' | 'scheduled' | 'published' | 'failed' | 'archived'

/** Post para redes sociais */
export interface SocialPost extends BaseEntity {
  /** Conteúdo do post */
  content: LocalizedText
  /** Tipo de post */
  type: SocialPostType
  /** Status */
  status: SocialPostStatus
  /** Plataformas de destino */
  platforms: SocialPlatform[]
  /** Mídia anexada */
  media?: Array<{
    type: 'image' | 'video'
    url: string
    alt?: string
    thumbnail?: string
    duration?: number
  }>
  /** Agendamento */
  scheduling?: {
    publishAt: Date
    timezone: string
    autoDelete?: Date
  }
  /** Hashtags */
  hashtags?: string[]
  /** Menções */
  mentions?: string[]
  /** Links */
  links?: Array<{
    url: string
    title?: string
    description?: string
  }>
  /** Configurações por plataforma */
  platformSettings?: Partial<Record<SocialPlatform, {
    customContent?: string
    customHashtags?: string[]
    customImage?: string
    disabled?: boolean
  }>>
  /** Métricas */
  metrics?: {
    platform: SocialPlatform
    postId: string
    likes: number
    comments: number
    shares: number
    reach: number
    impressions: number
    clicks: number
    engagement: number
  }[]
  /** Autor */
  authorId?: string
  /** Se é post promocional */
  isPromoted?: boolean
  /** Campanha relacionada */
  campaignId?: string
}

/* ==========================================================================
   CAMPANHAS SOCIAIS
   ========================================================================== */

/** Campanha de redes sociais */
export interface SocialCampaign extends BaseEntity {
  /** Nome da campanha */
  name: string
  /** Descrição */
  description: LocalizedText
  /** Objetivo */
  objective: 'awareness' | 'engagement' | 'traffic' | 'leads' | 'conversions'
  /** Plataformas */
  platforms: SocialPlatform[]
  /** Período */
  period: {
    startDate: Date
    endDate: Date
  }
  /** Orçamento */
  budget?: {
    total: number
    daily: number
    currency: string
  }
  /** Público-alvo */
  targetAudience?: {
    ageRange: [number, number]
    gender?: 'male' | 'female' | 'all'
    interests: string[]
    locations: string[]
    languages: string[]
  }
  /** Posts da campanha */
  posts: string[] // IDs dos posts
  /** Status */
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
  /** Métricas */
  metrics?: {
    impressions: number
    reach: number
    engagement: number
    clicks: number
    conversions: number
    cost: number
    roi: number
  }
}

/* ==========================================================================
   COMENTÁRIOS E INTERAÇÕES
   ========================================================================== */

/** Comentário em rede social */
export interface SocialComment extends BaseEntity {
  /** Post relacionado */
  postId: string
  /** Plataforma */
  platform: SocialPlatform
  /** ID do comentário na plataforma */
  platformCommentId: string
  /** Autor */
  author: {
    name: string
    username: string
    avatar?: string
    verified?: boolean
  }
  /** Conteúdo */
  content: string
  /** Data do comentário */
  commentedAt: Date
  /** Sentimento */
  sentiment?: 'positive' | 'negative' | 'neutral'
  /** Se precisa resposta */
  needsResponse: boolean
  /** Se foi respondido */
  hasResponse: boolean
  /** Resposta */
  response?: {
    content: string
    respondedAt: Date
    respondedBy: string
  }
  /** Se está marcado como spam */
  isSpam: boolean
  /** Se está oculto */
  isHidden: boolean
  /** Prioridade de resposta */
  priority: 'low' | 'normal' | 'high' | 'urgent'
}

/* ==========================================================================
   CONFIGURAÇÕES DE COMUNICAÇÃO
   ========================================================================== */

/** Canal de comunicação */
export interface CommunicationChannel {
  /** Tipo do canal */
  type: 'email' | 'whatsapp' | 'phone' | 'chat' | 'form'
  /** Nome do canal */
  name: LocalizedText
  /** Descrição */
  description?: LocalizedText
  /** Configuração */
  config: {
    /** Se está ativo */
    active: boolean
    /** Horário de funcionamento */
    businessHours?: {
      [key: string]: { // 'monday', 'tuesday', etc.
        open: string
        close: string
        enabled: boolean
      }
    }
    /** Resposta automática */
    autoReply?: {
      enabled: boolean
      message: LocalizedText
      delay?: number
    }
    /** Redirecionamento */
    redirect?: {
      enabled: boolean
      target: string
      delay?: number
    }
  }
  /** Integração */
  integration?: {
    provider: string
    apiKey?: string
    webhookUrl?: string
    settings: Record<string, any>
  }
  /** Métricas */
  metrics?: {
    totalContacts: number
    responseTime: number
    satisfactionRate: number
    conversionRate: number
  }
}

/* ==========================================================================
   CONFIGURAÇÃO GLOBAL DE SOCIAL
   ========================================================================== */

/** Configuração global de redes sociais */
export interface SocialConfig {
  /** Perfis principais */
  profiles: SocialProfile[]
  /** Configuração de compartilhamento */
  sharing: {
    /** Plataformas habilitadas */
    enabledPlatforms: SocialPlatform[]
    /** Texto padrão */
    defaultText: LocalizedText
    /** Hashtags padrão */
    defaultHashtags: string[]
    /** Via padrão (Twitter) */
    defaultVia?: string
  }
  /** Configuração de APIs */
  apis: SocialAPIConfig[]
  /** Canais de comunicação */
  communicationChannels: CommunicationChannel[]
  /** Configurações gerais */
  general: {
    /** Se tracking de métricas está ativo */
    trackingEnabled: boolean
    /** Se posts automáticos estão ativos */
    autoPostingEnabled: boolean
    /** Se moderação está ativa */
    moderationEnabled: boolean
    /** Palavras proibidas */
    bannedWords?: string[]
    /** Links permitidos */
    allowedDomains?: string[]
  }
}

/* ==========================================================================
   EXPORTS DE CONSTANTES
   ========================================================================== */

/** Plataformas sociais disponíveis */
export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  'facebook', 'instagram', 'linkedin', 'twitter', 'youtube', 'tiktok', 'whatsapp', 'telegram'
]

/** Tipos de post */
export const SOCIAL_POST_TYPES: SocialPostType[] = [
  'text', 'image', 'video', 'carousel', 'story', 'reel'
]

/** Status de post */
export const SOCIAL_POST_STATUSES: SocialPostStatus[] = [
  'draft', 'scheduled', 'published', 'failed', 'archived'
]

/** Objetivos de campanha */
export const CAMPAIGN_OBJECTIVES = [
  'awareness', 'engagement', 'traffic', 'leads', 'conversions'
] as const

/** Sentimentos de comentário */
export const COMMENT_SENTIMENTS = ['positive', 'negative', 'neutral'] as const

/** Prioridades */
export const PRIORITIES = ['low', 'normal', 'high', 'urgent'] as const
