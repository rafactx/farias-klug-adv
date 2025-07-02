import { Locale } from '@/types/globals'
import { TeamMember } from '@/types/legal'

export const teamMembers: TeamMember[] = [
  {
    id: 'augusto-farias-klug',
    name: 'Augusto Farias Klug',
    slug: 'augusto-farias-klug',
    order: 1,

    role: {
      'pt-br': 'Advogado Sócio-Fundador',
      'en': 'Founding Partner Attorney',
      'es': 'Abogado Socio Fundador',
      'de': 'Gründungspartner Anwalt'
    },

    title: {
      'pt-br': 'Sócio-Fundador da Farias Klug Advocacia',
      'en': 'Founding Partner of Farias Klug Law Firm',
      'es': 'Socio Fundador de Farias Klug Abogacía',
      'de': 'Gründungspartner von Farias Klug Anwaltskanzlei'
    },

    bio: {
      'pt-br': 'Augusto Farias Klug é advogado sócio-fundador da Farias Klug Advocacia (OAB/SC 51.807). Formado pela Univille em 2018, teve a oportunidade de trabalhar e aprender em diversos locais, bem como estudar na Universidade de Direito de Coimbra, em Portugal - onde pode estudar as matérias de Inglês Jurídico e Introdução ao Pensamento Jurídico Contemporâneo. No escritório, dedica-se à atuação nas áreas do Direito Ambiental e Direito Empresarial.',
      'en': 'Augusto Farias Klug is the founding partner attorney of Farias Klug Law Firm (OAB/SC 51.807). Graduated from Univille in 2018, he had the opportunity to work and learn in various places, as well as study at the University of Law of Coimbra, Portugal - where he studied Legal English and Introduction to Contemporary Legal Thinking. At our firm, he dedicates himself to Environmental Law and Corporate Law.',
      'es': 'Augusto Farias Klug es abogado socio fundador de Farias Klug Abogacía (OAB/SC 51.807). Graduado por Univille en 2018, tuvo la oportunidad de trabajar y aprender en diversos lugares, así como estudiar en la Universidad de Derecho de Coimbra, Portugal - donde pudo estudiar Inglés Jurídico e Introducción al Pensamiento Jurídico Contemporáneo. En nuestro bufete, se dedica a las áreas de Derecho Ambiental y Derecho Empresarial.',
      'de': 'Augusto Farias Klug ist Gründungspartner der Anwaltskanzlei Farias Klug (OAB/SC 51.807). Er schloss 2018 sein Studium an der Univille ab und hatte die Gelegenheit, an verschiedenen Orten zu arbeiten und zu lernen, sowie an der Universität für Recht in Coimbra, Portugal zu studieren - wo er Juristisches Englisch und Einführung in das zeitgenössische juristische Denken studierte. In unserer Kanzlei widmet er sich dem Umweltrecht und Unternehmensrecht.'
    },

    shortBio: {
      'pt-br': 'Sócio-fundador especialista em Direito Ambiental e Empresarial, com formação internacional.',
      'en': 'Founding partner specializing in Environmental and Corporate Law, with international education.',
      'es': 'Socio fundador especializado en Derecho Ambiental y Empresarial, con formación internacional.',
      'de': 'Gründungspartner spezialisiert auf Umwelt- und Unternehmensrecht, mit internationaler Ausbildung.'
    },

    image: '/images/augusto-farias-klug.jpg', // Substitua pelo caminho correto

    credentials: {
      oab: 'OAB/SC 51.807',
      university: 'Univille',
      graduationYear: 2018,
      internationalEducation: {
        'pt-br': 'Universidade de Direito de Coimbra, Portugal',
        'en': 'University of Law of Coimbra, Portugal',
        'es': 'Universidad de Derecho de Coimbra, Portugal',
        'de': 'Universität für Recht Coimbra, Portugal'
      }
    },

    specialties: {
      'pt-br': [
        'Direito Ambiental',
        'Direito Empresarial',
        'Defesas e Recursos Ambientais',
        'Licenciamento Ambiental',
        'Consultoria Jurídica Ambiental',
        'Contratos Empresariais'
      ],
      'en': [
        'Environmental Law',
        'Corporate Law',
        'Environmental Defense and Appeals',
        'Environmental Licensing',
        'Environmental Legal Consulting',
        'Business Contracts'
      ],
      'es': [
        'Derecho Ambiental',
        'Derecho Empresarial',
        'Defensas y Recursos Ambientales',
        'Licenciamiento Ambiental',
        'Consultoría Jurídica Ambiental',
        'Contratos Empresariales'
      ],
      'de': [
        'Umweltrecht',
        'Unternehmensrecht',
        'Umweltverteidigung und -einsprüche',
        'Umweltgenehmigungen',
        'Juristische Umweltberatung',
        'Geschäftsverträge'
      ]
    },

    education: {
      'pt-br': [
        {
          institution: 'Universidade da Região de Joinville (Univille)',
          degree: 'Bacharel em Direito',
          year: '2018',
          location: 'Joinville, SC - Brasil'
        },
        {
          institution: 'Universidade de Direito de Coimbra',
          degree: 'Inglês Jurídico e Introdução ao Pensamento Jurídico Contemporâneo',
          year: '2017',
          location: 'Coimbra, Portugal'
        }
      ],
      'en': [
        {
          institution: 'University of Joinville Region (Univille)',
          degree: 'Bachelor of Law',
          year: '2018',
          location: 'Joinville, SC - Brazil'
        },
        {
          institution: 'University of Law of Coimbra',
          degree: 'Legal English and Introduction to Contemporary Legal Thinking',
          year: '2017',
          location: 'Coimbra, Portugal'
        }
      ],
      'es': [
        {
          institution: 'Universidad de la Región de Joinville (Univille)',
          degree: 'Licenciado en Derecho',
          year: '2018',
          location: 'Joinville, SC - Brasil'
        },
        {
          institution: 'Universidad de Derecho de Coimbra',
          degree: 'Inglés Jurídico e Introducción al Pensamiento Jurídico Contemporáneo',
          year: '2017',
          location: 'Coimbra, Portugal'
        }
      ],
      'de': [
        {
          institution: 'Universität der Region Joinville (Univille)',
          degree: 'Bachelor of Law',
          year: '2018',
          location: 'Joinville, SC - Brasilien'
        },
        {
          institution: 'Universität für Recht Coimbra',
          degree: 'Juristisches Englisch und Einführung in das zeitgenössische juristische Denken',
          year: '2017',
          location: 'Coimbra, Portugal'
        }
      ]
    },

    experience: {
      'pt-br': [
        {
          position: 'Sócio-Fundador',
          company: 'Farias Klug Advocacia',
          period: '2019 - Presente',
          location: 'Florianópolis e Joinville, SC',
          description: 'Fundação e direção do escritório especializado em Direito Ambiental e Empresarial.'
        },
        {
          position: 'Advogado Associado',
          company: 'Diversos Escritórios',
          period: '2018 - 2019',
          location: 'Santa Catarina',
          description: 'Experiência em diferentes escritórios, desenvolvendo expertise em múltiplas áreas do direito.'
        }
      ],
      'en': [
        {
          position: 'Founding Partner',
          company: 'Farias Klug Law Firm',
          period: '2019 - Present',
          location: 'Florianópolis and Joinville, SC',
          description: 'Foundation and direction of the law firm specialized in Environmental and Corporate Law.'
        },
        {
          position: 'Associate Attorney',
          company: 'Various Law Firms',
          period: '2018 - 2019',
          location: 'Santa Catarina',
          description: 'Experience in different law firms, developing expertise in multiple areas of law.'
        }
      ],
      'es': [
        {
          position: 'Socio Fundador',
          company: 'Farias Klug Abogacía',
          period: '2019 - Presente',
          location: 'Florianópolis y Joinville, SC',
          description: 'Fundación y dirección del bufete especializado en Derecho Ambiental y Empresarial.'
        },
        {
          position: 'Abogado Asociado',
          company: 'Diversos Bufetes',
          period: '2018 - 2019',
          location: 'Santa Catarina',
          description: 'Experiencia en diferentes bufetes, desarrollando expertise en múltiples áreas del derecho.'
        }
      ],
      'de': [
        {
          position: 'Gründungspartner',
          company: 'Farias Klug Anwaltskanzlei',
          period: '2019 - Heute',
          location: 'Florianópolis und Joinville, SC',
          description: 'Gründung und Leitung der auf Umwelt- und Unternehmensrecht spezialisierten Kanzlei.'
        },
        {
          position: 'Anwalt',
          company: 'Verschiedene Kanzleien',
          period: '2018 - 2019',
          location: 'Santa Catarina',
          description: 'Erfahrung in verschiedenen Kanzleien, Entwicklung von Expertise in mehreren Rechtsbereichen.'
        }
      ]
    },

    languages: {
      'pt-br': [
        { language: 'Português', level: 'Nativo' },
        { language: 'Inglês', level: 'Avançado (Jurídico)' },
        { language: 'Alemão', level: 'Intermediário' },
        { language: 'Espanhol', level: 'Básico' }
      ],
      'en': [
        { language: 'Portuguese', level: 'Native' },
        { language: 'English', level: 'Advanced (Legal)' },
        { language: 'German', level: 'Intermediate' },
        { language: 'Spanish', level: 'Basic' }
      ],
      'es': [
        { language: 'Portugués', level: 'Nativo' },
        { language: 'Inglés', level: 'Avanzado (Jurídico)' },
        { language: 'Alemán', level: 'Intermedio' },
        { language: 'Español', level: 'Básico' }
      ],
      'de': [
        { language: 'Portugiesisch', level: 'Muttersprache' },
        { language: 'Englisch', level: 'Fortgeschritten (Juridisch)' },
        { language: 'Deutsch', level: 'Mittelstufe' },
        { language: 'Spanisch', level: 'Grundstufe' }
      ]
    },

    achievements: {
      'pt-br': [
        'Fundação da Farias Klug Advocacia',
        'Estudos internacionais em Portugal',
        'Especialização em Inglês Jurídico',
        'Atuação destacada em Direito Ambiental',
        'Experiência diversificada em diferentes escritórios'
      ],
      'en': [
        'Foundation of Farias Klug Law Firm',
        'International studies in Portugal',
        'Specialization in Legal English',
        'Outstanding performance in Environmental Law',
        'Diverse experience in different law firms'
      ],
      'es': [
        'Fundación de Farias Klug Abogacía',
        'Estudios internacionales en Portugal',
        'Especialización en Inglés Jurídico',
        'Actuación destacada en Derecho Ambiental',
        'Experiencia diversificada en diferentes bufetes'
      ],
      'de': [
        'Gründung der Farias Klug Anwaltskanzlei',
        'Internationale Studien in Portugal',
        'Spezialisierung auf Juristisches Englisch',
        'Herausragende Leistungen im Umweltrecht',
        'Vielfältige Erfahrung in verschiedenen Kanzleien'
      ]
    },

    contact: {
      email: 'augusto@fariasklugadvocacia.com.br',
      whatsapp: '+554799661321',
      linkedin: 'augusto-farias-klug' // Substitua pelo LinkedIn real
    },

    seoMeta: {
      'pt-br': {
        title: 'Augusto Farias Klug - Advogado Especialista em Direito Ambiental',
        description: 'Conheça Augusto Farias Klug, sócio-fundador da Farias Klug Advocacia, especialista em Direito Ambiental e Empresarial com formação internacional.',
        keywords: ['Augusto Farias Klug', 'advogado ambiental', 'OAB SC', 'direito ambiental', 'advocacia florianópolis']
      },
      'en': {
        title: 'Augusto Farias Klug - Environmental Law Specialist Attorney',
        description: 'Meet Augusto Farias Klug, founding partner of Farias Klug Law Firm, specialist in Environmental and Corporate Law with international education.',
        keywords: ['Augusto Farias Klug', 'environmental lawyer', 'OAB SC', 'environmental law', 'law firm florianópolis']
      },
      'es': {
        title: 'Augusto Farias Klug - Abogado Especialista en Derecho Ambiental',
        description: 'Conoce a Augusto Farias Klug, socio fundador de Farias Klug Abogacía, especialista en Derecho Ambiental y Empresarial con formación internacional.',
        keywords: ['Augusto Farias Klug', 'abogado ambiental', 'OAB SC', 'derecho ambiental', 'abogacía florianópolis']
      },
      'de': {
        title: 'Augusto Farias Klug - Spezialist für Umweltrecht',
        description: 'Lernen Sie Augusto Farias Klug kennen, Gründungspartner von Farias Klug Anwaltskanzlei, Spezialist für Umwelt- und Unternehmensrecht mit internationaler Ausbildung.',
        keywords: ['Augusto Farias Klug', 'Umweltanwalt', 'OAB SC', 'Umweltrecht', 'Anwaltskanzlei florianópolis']
      }
    },

    featured: true,
    active: true
  }

  // Espaço para adicionar mais membros da equipe no futuro
  // {
  //   id: 'segundo-advogado',
  //   name: 'Nome do Segundo Advogado',
  //   ... mesma estrutura
  // }
]

// Utilitários para trabalhar com membros da equipe
export const teamUtils = {
  // Buscar membro por ID
  getById: (id: string) =>
    teamMembers.find(member => member.id === id),

  // Buscar membro por slug
  getBySlug: (slug: string) =>
    teamMembers.find(member => member.slug === slug),

  // Obter apenas membros ativos
  getActive: () =>
    teamMembers.filter(member => member.active),

  // Obter apenas membros em destaque
  getFeatured: () =>
    teamMembers.filter(member => member.featured),

  // Ordenar por ordem definida
  getOrdered: () =>
    [...teamMembers].sort((a, b) => a.order - b.order),

  // Buscar por especialidade
  getBySpecialty: (specialty: string, locale: Locale = 'pt-br') =>
    teamMembers.filter(member =>
      member.specialties[locale].some(s =>
        s.toLowerCase().includes(specialty.toLowerCase())
      )
    ),

  // Buscar por formação/universidade
  getByEducation: (institution: string, locale: Locale = 'pt-br') =>
    teamMembers.filter(member =>
      member.education[locale].some(edu =>
        edu.institution.toLowerCase().includes(institution.toLowerCase())
      )
    ),

  // Obter todas as especialidades únicas
  getAllSpecialties: (locale: Locale = 'pt-br') => {
    const allSpecialties = teamMembers.flatMap(member => member.specialties[locale])
    return [...new Set(allSpecialties)]
  },

  // Obter anos de experiência (calculado)
  getExperienceYears: (memberId: string) => {
    const member = teamUtils.getById(memberId)
    if (!member) return 0

    const graduationYear = member.credentials.graduationYear
    const currentYear = new Date().getFullYear()
    return currentYear - graduationYear
  },

  // Gerar biografia resumida
  getShortBio: (memberId: string, locale: Locale = 'pt-br', maxLength = 150) => {
    const member = teamUtils.getById(memberId)
    if (!member) return ''

    const bio = member.bio[locale]
    if (bio.length <= maxLength) return bio

    return bio.substring(0, maxLength).trim() + '...'
  },

  // Validar se todos os slugs são únicos
  validateSlugs: () => {
    const slugs = teamMembers.map(member => member.slug)
    return slugs.length === new Set(slugs).size
  }
}

// Dados para exibição de estatísticas da equipe
export const teamStats = {
  totalMembers: teamMembers.length,
  activeMembers: teamUtils.getActive().length,
  featuredMembers: teamUtils.getFeatured().length,

  // Estatísticas por especialidade
  getSpecialtyStats: (locale: Locale = 'pt-br') => {
    const specialties = teamUtils.getAllSpecialties(locale)
    return specialties.map(specialty => ({
      specialty,
      count: teamUtils.getBySpecialty(specialty, locale).length
    }))
  },

  // Anos médios de experiência
  getAverageExperience: () => {
    const totalYears = teamMembers.reduce((sum, member) =>
      sum + teamUtils.getExperienceYears(member.id), 0
    )
    return Math.round(totalYears / teamMembers.length)
  }
}
