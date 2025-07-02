/**
 * FARIAS KLUG ADVOCACIA - LEGAL TYPES
 * ==================================
 *
 * Tipos específicos para conteúdo jurídico.
 * Áreas de atuação, equipe, casos e serviços.
 *
 * @author: https://github.com/rafactx
 * @version: 1.1.0 - EXPANDIDO
 * @description: Tipos especializados para escritório de advocacia
 */

import {
  BaseEntity,
  ImageAsset,
  Locale,
  LocalizedText,
  OrderableEntity,
  SEOMetadata,
  StatusEntity
} from './globals'

/* ==========================================================================
   ÁREAS DE ATUAÇÃO JURÍDICA
   ========================================================================== */

/** Área de atuação jurídica */
export interface LegalArea extends BaseEntity, StatusEntity, OrderableEntity {
  /** Slug único para URLs */
  slug: string
  /** Título da área */
  title: LocalizedText
  /** Descrição curta */
  description: LocalizedText
  /** Descrição completa/detalhada */
  fullDescription?: LocalizedText
  /** Ícone representativo */
  icon: string
  /** Cor tema da área (hex) */
  color?: string
  /** Imagem de destaque */
  featuredImage?: ImageAsset
  /** Serviços inclusos */
  services: LocalizedText[]
  /** Se está em destaque na home */
  featured: boolean
  /** Anos de experiência na área */
  experienceYears?: number
  /** Número de casos de sucesso */
  successCases?: number
  /** Taxa de sucesso (%) */
  successRate?: number
  /** Membros da equipe especializados */
  teamMembers?: string[] // IDs dos membros
  /** Metadados SEO */
  seoMeta: SEOMetadata
  /** Tags/palavras-chave */
  tags?: string[]
  /** Se aceita consultas online */
  onlineConsultation?: boolean
  /** Faixa de preço (para orientação) */
  priceRange?: 'low' | 'medium' | 'high' | 'premium'
}

/* ==========================================================================
   EQUIPE E MEMBROS
   ========================================================================== */

/** Membro da equipe */
export interface TeamMember extends BaseEntity, StatusEntity, OrderableEntity {
  /** Nome completo */
  name: string
  /** Cargo/função */
  role: LocalizedText
  /** Biografia curta */
  bio: LocalizedText
  /** Biografia completa */
  fullBio?: LocalizedText
  /** Foto do perfil */
  image: string
  /** Foto adicional/alternativa */
  additionalImages?: string[]
  /** Especialidades jurídicas */
  specialties: string[]
  /** Áreas de atuação (IDs) */
  legalAreas?: string[]
  /** Formação acadêmica */
  education?: LocalizedText[]
  /** Registros profissionais (OAB, etc.) */
  registrations?: string[]
  /** Certificações */
  certifications?: string[]
  /** Idiomas falados */
  languages?: string[]
  /** Anos de experiência */
  experienceYears?: number
  /** Contato profissional */
  contact?: {
    email?: string
    phone?: string
    whatsapp?: string
    linkedin?: string
  }
  /** Se está disponível para consultas */
  availableForConsultation?: boolean
  /** Horário de atendimento */
  availabilityHours?: string
  /** Se é sócio do escritório */
  isPartner?: boolean
  /** Data de entrada no escritório */
  joinedAt?: Date
}

/* ==========================================================================
   SERVIÇOS JURÍDICOS
   ========================================================================== */

/** Serviço jurídico específico */
export interface LegalService extends BaseEntity, StatusEntity, OrderableEntity {
  /** Nome do serviço */
  name: LocalizedText
  /** Slug para URLs */
  slug: string
  /** Descrição do serviço */
  description: LocalizedText
  /** Área jurídica relacionada */
  legalAreaId: string
  /** Duração típica */
  typicalDuration?: string
  /** Requisitos/documentos necessários */
  requirements?: LocalizedText[]
  /** Processo/etapas */
  process?: Array<{
    step: number
    title: LocalizedText
    description: LocalizedText
    estimatedTime?: string
  }>
  /** Faixa de preço */
  priceRange?: {
    min?: number
    max?: number
    currency: string
    description?: LocalizedText
  }
  /** Se é serviço online */
  isOnline?: boolean
  /** Se requer consulta presencial */
  requiresInPersonConsultation?: boolean
  /** Membros responsáveis */
  responsibleMembers?: string[]
}

/* ==========================================================================
   CASOS DE SUCESSO
   ========================================================================== */

/** Caso de sucesso */
export interface SuccessCase extends BaseEntity, StatusEntity {
  /** Título do caso */
  title: LocalizedText
  /** Resumo do caso */
  summary: LocalizedText
  /** Descrição completa */
  description?: LocalizedText
  /** Área jurídica */
  legalAreaId: string
  /** Tipo de caso */
  caseType: string
  /** Resultado obtido */
  result: LocalizedText
  /** Valor envolvido (se aplicável) */
  valueInvolved?: {
    amount: number
    currency: string
    description?: LocalizedText
  }
  /** Duração do caso */
  duration?: {
    startDate: Date
    endDate: Date
    description?: string
  }
  /** Membros envolvidos */
  teamMembers?: string[]
  /** Se pode ser publicado */
  isPublic: boolean
  /** Tags do caso */
  tags?: string[]
  /** Tribunal/instância */
  court?: string
  /** Número do processo (anonimizado) */
  processNumber?: string
}

/* ==========================================================================
   DEPOIMENTOS E AVALIAÇÕES
   ========================================================================== */

/** Depoimento de cliente */
export interface Testimonial extends BaseEntity, StatusEntity, OrderableEntity {
  /** Nome do cliente */
  clientName: string
  /** Empresa do cliente (opcional) */
  clientCompany?: string
  /** Cargo do cliente */
  clientPosition?: string
  /** Foto do cliente */
  clientPhoto?: string
  /** Texto do depoimento */
  quote: LocalizedText
  /** Avaliação (1-5 estrelas) */
  rating: number
  /** Área jurídica relacionada */
  legalAreaId?: string
  /** Serviço utilizado */
  serviceId?: string
  /** Membro da equipe responsável */
  teamMemberId?: string
  /** Data do depoimento */
  testimonialDate: Date
  /** Se foi verificado */
  verified: boolean
  /** Se está em destaque */
  featured: boolean
  /** Se pode usar nome real */
  allowRealName: boolean
  /** Cidade/região do cliente */
  clientLocation?: string
}

/* ==========================================================================
   DOCUMENTOS E RECURSOS
   ========================================================================== */

/** Documento jurídico */
export interface LegalDocument extends BaseEntity, StatusEntity {
  /** Título do documento */
  title: LocalizedText
  /** Descrição */
  description?: LocalizedText
  /** Tipo de documento */
  type: 'contract' | 'guide' | 'form' | 'template' | 'article' | 'law' | 'regulation'
  /** Categoria */
  category: string
  /** Arquivo */
  fileUrl: string
  /** Tamanho do arquivo */
  fileSize: number
  /** Tipo do arquivo */
  fileType: string
  /** Área jurídica relacionada */
  legalAreaId?: string
  /** Tags */
  tags?: string[]
  /** Se é público */
  isPublic: boolean
  /** Requer cadastro para download */
  requiresRegistration: boolean
  /** Número de downloads */
  downloadCount: number
  /** Última atualização do conteúdo */
  contentUpdatedAt?: Date
  /** Versão do documento */
  version?: string
}

/* ==========================================================================
   CONSULTAS E AGENDAMENTOS
   ========================================================================== */

/** Tipo de consulta */
export type ConsultationType = 'online' | 'in-person' | 'phone' | 'emergency'

/** Status da consulta */
export type ConsultationStatus =
  | 'pending'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'rescheduled'

/** Consulta jurídica */
export interface LegalConsultation extends BaseEntity {
  /** Cliente */
  clientName: string
  /** Email do cliente */
  clientEmail: string
  /** Telefone do cliente */
  clientPhone?: string
  /** Tipo de consulta */
  type: ConsultationType
  /** Área jurídica */
  legalAreaId: string
  /** Membro da equipe */
  teamMemberId?: string
  /** Assunto da consulta */
  subject: string
  /** Descrição do caso */
  description: string
  /** Data/hora agendada */
  scheduledAt: Date
  /** Duração estimada (minutos) */
  duration: number
  /** Status */
  status: ConsultationStatus
  /** Observações internas */
  internalNotes?: string
  /** Valor da consulta */
  fee?: {
    amount: number
    currency: string
    paymentStatus: 'pending' | 'paid' | 'refunded'
  }
  /** Se é primeira consulta */
  isFirstConsultation: boolean
  /** Link para videoconferência */
  meetingLink?: string
  /** Documentos anexados pelo cliente */
  attachments?: string[]
}

/* ==========================================================================
   ESTATÍSTICAS E MÉTRICAS
   ========================================================================== */

/** Estatísticas da área jurídica */
export interface LegalAreaStats {
  /** ID da área */
  legalAreaId: string
  /** Período das estatísticas */
  period: {
    startDate: Date
    endDate: Date
  }
  /** Número de casos */
  totalCases: number
  /** Casos ativos */
  activeCases: number
  /** Casos concluídos */
  completedCases: number
  /** Taxa de sucesso (%) */
  successRate: number
  /** Valor médio dos casos */
  averageCaseValue?: number
  /** Duração média dos casos (dias) */
  averageCaseDuration?: number
  /** Consultas realizadas */
  consultations: number
  /** Satisfação do cliente (1-5) */
  clientSatisfaction?: number
}

/** Estatísticas do membro da equipe */
export interface TeamMemberStats {
  /** ID do membro */
  teamMemberId: string
  /** Período */
  period: {
    startDate: Date
    endDate: Date
  }
  /** Casos ativos */
  activeCases: number
  /** Casos concluídos */
  completedCases: number
  /** Consultas realizadas */
  consultations: number
  /** Horas trabalhadas */
  hoursWorked?: number
  /** Avaliação média dos clientes */
  averageRating?: number
  /** Especializações ativas */
  activeSpecialties: string[]
}

/* ==========================================================================
   FILTROS E BUSCA
   ========================================================================== */

/** Filtros para áreas jurídicas */
export interface LegalAreaFilters {
  search?: string
  featured?: boolean
  services?: string[]
  experienceYears?: {
    min?: number
    max?: number
  }
  tags?: string[]
  onlineConsultation?: boolean
  priceRange?: string[]
  status?: string[]
  locale?: Locale
}

/** Filtros para membros da equipe */
export interface TeamMemberFilters {
  search?: string
  specialties?: string[]
  legalAreas?: string[]
  languages?: string[]
  availableForConsultation?: boolean
  isPartner?: boolean
  experienceYears?: {
    min?: number
    max?: number
  }
  status?: string[]
  locale?: Locale
}

/** Filtros para casos de sucesso */
export interface SuccessCaseFilters {
  search?: string
  legalAreaId?: string
  caseType?: string[]
  dateRange?: {
    startDate?: Date
    endDate?: Date
  }
  valueRange?: {
    min?: number
    max?: number
  }
  teamMembers?: string[]
  tags?: string[]
  court?: string
  isPublic?: boolean
}

/* ==========================================================================
   EXPORTS DE CONSTANTES
   ========================================================================== */

/** Tipos de documento */
export const DOCUMENT_TYPES = [
  'contract', 'guide', 'form', 'template', 'article', 'law', 'regulation'
] as const

/** Tipos de consulta */
export const CONSULTATION_TYPES: ConsultationType[] = [
  'online', 'in-person', 'phone', 'emergency'
]

/** Status de consulta */
export const CONSULTATION_STATUSES: ConsultationStatus[] = [
  'pending', 'confirmed', 'in-progress', 'completed', 'cancelled', 'rescheduled'
]

/** Faixas de preço */
export const PRICE_RANGES = ['low', 'medium', 'high', 'premium'] as const
