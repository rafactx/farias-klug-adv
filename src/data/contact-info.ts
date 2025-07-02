// src/data/contact-info.ts
import { ContactInfo, SocialContact } from '@/types/social'

export const contactInfo: ContactInfo = {
  phone: '+55 47 99661-1321',
  email: 'contato@fariasklugadvocacia.com.br',
  whatsapp: '554799661321', // Formato limpo para WhatsApp API
  instagram: '@fariasklugadv',

  // Áreas de atendimento ao invés de endereço físico
  address: {
    'pt-br': 'Atendimento em Florianópolis e Joinville - SC',
    'en': 'Legal services in Florianópolis and Joinville - SC',
    'es': 'Servicios legales en Florianópolis y Joinville - SC',
    'de': 'Rechtsberatung in Florianópolis und Joinville - SC'
  }
}

// Dados profissionais complementares
export const firmInfo = {
  name: 'Farias Klug Advocacia',
  fullName: {
    'pt-br': 'Farias Klug Advocacia',
    'en': 'Farias Klug Law Firm',
    'es': 'Farias Klug Abogacía',
    'de': 'Farias Klug Anwaltskanzlei'
  },

  // Áreas de atuação geográfica
  serviceAreas: {
    'pt-br': ['Florianópolis', 'Joinville', 'Santa Catarina'],
    'en': ['Florianópolis', 'Joinville', 'Santa Catarina'],
    'es': ['Florianópolis', 'Joinville', 'Santa Catarina'],
    'de': ['Florianópolis', 'Joinville', 'Santa Catarina']
  },

  // Horário de atendimento
  businessHours: {
    'pt-br': 'Segunda a Sexta: 8h às 18h',
    'en': 'Monday to Friday: 8am to 6pm',
    'es': 'Lunes a Viernes: 8h a 18h',
    'de': 'Montag bis Freitag: 8-18 Uhr'
  },

  // Especialidades principais
  specialties: {
    'pt-br': [
      'Direito Ambiental',
      'Defesas e Recursos Ambientais',
      'Licenciamento Ambiental',
      'Consultoria Jurídica Ambiental',
      'Direito Empresarial'
    ],
    'en': [
      'Environmental Law',
      'Environmental Defense and Appeals',
      'Environmental Licensing',
      'Environmental Legal Consulting',
      'Corporate Law'
    ],
    'es': [
      'Derecho Ambiental',
      'Defensas y Recursos Ambientales',
      'Licenciamiento Ambiental',
      'Consultoría Jurídica Ambiental',
      'Derecho Empresarial'
    ],
    'de': [
      'Umweltrecht',
      'Umweltverteidigung und -einsprüche',
      'Umweltgenehmigungen',
      'Juristische Umweltberatung',
      'Unternehmensrecht'
    ]
  },

  // Registros profissionais
  credentials: {
    oab: 'OAB/SC 51;807',
    cnpj: '35.143.959/0001-60'
  }
}

// Configuração dos botões sociais/contato
export const socialContacts: SocialContact[] = [
  {
    type: 'whatsapp',
    label: {
      'pt-br': 'Falar no WhatsApp',
      'en': 'Chat on WhatsApp',
      'es': 'Hablar en WhatsApp',
      'de': 'WhatsApp Chat'
    },
    value: `https://wa.me/${contactInfo.whatsapp}?text=Olá, gostaria de saber mais sobre os serviços jurídicos da Farias Klug Advocacia.`,
    icon: 'message-circle',
    color: 'bg-green-500 hover:bg-green-600',
    description: {
      'pt-br': 'Atendimento rápido e direto',
      'en': 'Quick and direct service',
      'es': 'Atención rápida y directa',
      'de': 'Schneller und direkter Service'
    }
  },
  {
    type: 'instagram',
    label: {
      'pt-br': 'Siga no Instagram',
      'en': 'Follow on Instagram',
      'es': 'Seguir en Instagram',
      'de': 'Auf Instagram folgen'
    },
    value: `https://instagram.com/${contactInfo.instagram.replace('@', '')}`,
    icon: 'instagram',
    color: 'bg-pink-500 hover:bg-pink-600',
    description: {
      'pt-br': 'Acompanhe nosso conteúdo jurídico',
      'en': 'Follow our legal content',
      'es': 'Sigue nuestro contenido legal',
      'de': 'Folgen Sie unseren Rechtsinhalten'
    }
  },
  {
    type: 'email',
    label: {
      'pt-br': 'Enviar E-mail',
      'en': 'Send Email',
      'es': 'Enviar Email',
      'de': 'E-Mail senden'
    },
    value: `mailto:${contactInfo.email}?subject=Consulta Jurídica - Farias Klug Advocacia&body=Olá, gostaria de agendar uma consulta sobre...`,
    icon: 'mail',
    color: 'bg-blue-500 hover:bg-blue-600',
    description: {
      'pt-br': 'Contato formal e detalhado',
      'en': 'Formal and detailed contact',
      'es': 'Contacto formal y detallado',
      'de': 'Formeller und detaillierter Kontakt'
    }
  }
]

// Mensagens pré-definidas para WhatsApp por área
export const whatsappMessages = {
  'defesas-e-recursos-ambientais': {
    'pt-br': 'Olá! Preciso de ajuda com defesas e recursos ambientais. Gostaria de agendar uma consulta.',
    'en': 'Hello! I need help with environmental defense and appeals. I would like to schedule a consultation.',
    'es': 'Hola! Necesito ayuda con defensas y recursos ambientales. Me gustaría programar una consulta.',
    'de': 'Hallo! Ich brauche Hilfe bei Umweltverteidigung und -einsprüchen. Ich möchte eine Beratung vereinbaren.'
  },
  'licenciamento-e-regularizacao': {
    'pt-br': 'Olá! Preciso de assessoria para licenciamento e regularização ambiental. Podemos conversar?',
    'en': 'Hello! I need assistance with environmental licensing and regularization. Can we talk?',
    'es': 'Hola! Necesito asesoría para licenciamiento y regularización ambiental. ¿Podemos hablar?',
    'de': 'Hallo! Ich brauche Hilfe bei Umweltgenehmigungen und -regulierung. Können wir sprechen?'
  },
  'consultoria-juridica-ambiental': {
    'pt-br': 'Olá! Gostaria de uma consultoria jurídica ambiental para meu empreendimento. Vamos conversar?',
    'en': 'Hello! I would like environmental legal consulting for my business. Shall we talk?',
    'es': 'Hola! Me gustaría una consultoría jurídica ambiental para mi empresa. ¿Hablamos?',
    'de': 'Hallo! Ich hätte gerne eine umweltrechtliche Beratung für mein Unternehmen. Sollen wir sprechen?'
  },
  'direito-empresarial': {
    'pt-br': 'Olá! Preciso de assessoria em direito empresarial. Gostaria de marcar uma reunião.',
    'en': 'Hello! I need assistance with corporate law. I would like to schedule a meeting.',
    'es': 'Hola! Necesito asesoría en derecho empresarial. Me gustaría programar una reunión.',
    'de': 'Hallo! Ich brauche Hilfe im Unternehmensrecht. Ich möchte ein Treffen vereinbaren.'
  },
  'general': {
    'pt-br': 'Olá! Gostaria de saber mais sobre os serviços da Farias Klug Advocacia. Podemos conversar?',
    'en': 'Hello! I would like to know more about Farias Klug Law Firm services. Can we talk?',
    'es': 'Hola! Me gustaría saber más sobre los servicios de Farias Klug Abogacía. ¿Podemos hablar?',
    'de': 'Hallo! Ich möchte mehr über die Dienstleistungen von Farias Klug Anwaltskanzlei erfahren. Können wir sprechen?'
  }
}
