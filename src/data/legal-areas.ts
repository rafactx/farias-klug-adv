import { LegalArea } from '@/types/legal'

export const legalAreas: LegalArea[] = [
  {
    id: 'defesas-e-recursos-ambientais',
    slug: 'defesas-e-recursos-ambientais',
    order: 1, // Ordem de exibição
    title: {
      'pt-br': 'Defesas e Recursos Ambientais',
      'en': 'Environmental Defense and Appeals',
      'es': 'Defensas y Recursos Ambientales',
      'de': 'Umweltverteidigung und -einsprüche'
    },
    description: {
      'pt-br': 'Representação técnica e jurídica em autos de infração, embargos, sanções administrativas ou judiciais ambientais. Atuação completa em contencioso administrativo e judicial.',
      'en': 'Legal and technical representation in environmental infractions, embargoes, and administrative or judicial sanctions. Full support in administrative and judicial litigation.',
      'es': 'Representación técnica y legal en infracciones, embargos y sanciones administrativas o judiciales ambientales. Actuación completa en litigios administrativos y judiciales.',
      'de': 'Technische und juristische Vertretung bei Umweltverstößen, Baustopps und behördlichen oder gerichtlichen Sanktionen. Umfassende Betreuung in Verwaltungs- und Gerichtsverfahren.'
    },
    shortDescription: {
      'pt-br': 'Defesa jurídica especializada contra sanções e infrações ambientais',
      'en': 'Specialized legal defense against environmental sanctions and infractions',
      'es': 'Defensa legal especializada contra sanciones e infracciones ambientales',
      'de': 'Spezialisierte Rechtsverteidigung gegen Umweltsanktionen und -verstöße'
    },
    icon: 'shield-check', // Ícone mais específico
    color: {
      primary: '#dc2626', // Vermelho - representa defesa/urgência
      secondary: '#fef2f2',
      accent: '#991b1b'
    },
    services: {
      'pt-br': [
        'Defesa contra Autos de Infração Ambiental',
        'Recursos administrativos junto a órgãos ambientais',
        'Acompanhamento de inquéritos ou ações penais ambientais',
        'Defesa em processos administrativos (IBAMA, ICMBio, órgãos estaduais)',
        'Recursos em todas as instâncias administrativas',
        'Negociação de Termos de Ajustamento de Conduta (TAC)'
      ],
      'en': [
        'Defense against Environmental Infraction Notices',
        'Administrative appeals to environmental agencies',
        'Support in environmental criminal inquiries or actions',
        'Defense in administrative processes (IBAMA, ICMBio, state agencies)',
        'Appeals in all administrative instances',
        'Negotiation of Conduct Adjustment Terms (TAC)'
      ],
      'es': [
        'Defensa contra Autos de Infracción Ambiental',
        'Recursos administrativos ante organismos ambientales',
        'Acompañamiento de investigaciones o acciones penales ambientales',
        'Defensa en procesos administrativos (IBAMA, ICMBio, organismos estatales)',
        'Recursos en todas las instancias administrativas',
        'Negociación de Términos de Ajuste de Conducta (TAC)'
      ],
      'de': [
        'Verteidigung gegen Umweltverstöße',
        'Verwaltungsrechtsmittel bei Umweltbehörden',
        'Begleitung von Umweltstrafverfahren',
        'Verteidigung in Verwaltungsverfahren (IBAMA, ICMBio, Landesbehörden)',
        'Rechtsmittel in allen Verwaltungsinstanzen',
        'Verhandlung von Verhaltensanpassungsvereinbarungen (TAC)'
      ]
    },
    featured: true,
    seoMeta: {
      'pt-br': {
        title: 'Defesas e Recursos Ambientais - Farias Klug Advocacia',
        description: 'Advocacia especializada em defesas contra sanções ambientais. Recursos administrativos e defesa judicial em Santa Catarina.',
        keywords: ['defesa ambiental', 'recursos ambientais', 'auto de infração', 'IBAMA', 'ICMBio', 'advocacia ambiental SC']
      },
      'en': {
        title: 'Environmental Defense and Appeals - Farias Klug Law Firm',
        description: 'Specialized advocacy in environmental sanctions defense. Administrative appeals and judicial defense in Santa Catarina.',
        keywords: ['environmental defense', 'environmental appeals', 'infraction notice', 'IBAMA', 'ICMBio', 'environmental law SC']
      },
      'es': {
        title: 'Defensas y Recursos Ambientales - Farias Klug Abogacía',
        description: 'Abogacía especializada en defensa contra sanciones ambientales. Recursos administrativos y defensa judicial en Santa Catarina.',
        keywords: ['defensa ambiental', 'recursos ambientales', 'auto de infracción', 'IBAMA', 'ICMBio', 'abogacía ambiental SC']
      },
      'de': {
        title: 'Umweltverteidigung und -einsprüche - Farias Klug Anwaltskanzlei',
        description: 'Spezialisierte Anwaltschaft in der Verteidigung gegen Umweltsanktionen. Verwaltungsrechtsmittel und gerichtliche Verteidigung in Santa Catarina.',
        keywords: ['Umweltverteidigung', 'Umweltrechtsmittel', 'Verstoßbescheid', 'IBAMA', 'ICMBio', 'Umweltrecht SC']
      }
    },
    cta: {
      'pt-br': 'Precisa de defesa ambiental?',
      'en': 'Need environmental defense?',
      'es': '¿Necesita defensa ambiental?',
      'de': 'Brauchen Sie Umweltverteidigung?'
    }
  },
  {
    id: 'licenciamento-e-regularizacao',
    slug: 'licenciamento-e-regularizacao',
    order: 2,
    title: {
      'pt-br': 'Licenciamento e Regularização',
      'en': 'Licensing and Regularization',
      'es': 'Licenciamiento y Regularización',
      'de': 'Genehmigungen und Regulierung'
    },
    description: {
      'pt-br': 'Suporte jurídico completo em processos de licenciamento ambiental, autorizações e regularizações de atividades junto a órgãos públicos.',
      'en': 'Full legal support for environmental licensing processes, authorizations, and activity regularization with public agencies.',
      'es': 'Soporte legal completo en procesos de licenciamiento ambiental, autorizaciones y regularizaciones ante organismos públicos.',
      'de': 'Umfassende rechtliche Unterstützung bei Umweltgenehmigungen, behördlichen Verfahren und Regulierung von Aktivitäten.'
    },
    shortDescription: {
      'pt-br': 'Assessoria completa para licenças ambientais e regularizações',
      'en': 'Complete advisory for environmental licenses and regularizations',
      'es': 'Asesoría completa para licencias ambientales y regularizaciones',
      'de': 'Vollständige Beratung für Umweltgenehmigungen und Regulierungen'
    },
    icon: 'file-check',
    color: {
      primary: '#059669', // Verde - representa crescimento/sustentabilidade
      secondary: '#ecfdf5',
      accent: '#047857'
    },
    services: {
      'pt-br': [
        'Estudo de Viabilidade Ambiental',
        'Acompanhamento de Licenciamento (LP, LI, LO)',
        'Regularização de propriedades rurais e urbanas',
        'Análise legal de supressão de vegetação, alvarás e áreas de preservação',
        'Licenças de Operação e renovações',
        'Cadastro Ambiental Rural (CAR)',
        'Reserva Legal e Área de Preservação Permanente (APP)'
      ],
      'en': [
        'Environmental Feasibility Study',
        'Licensing Support (Preliminary, Installation, Operation)',
        'Rural and urban property regularization',
        'Legal analysis of vegetation suppression, permits and preservation areas',
        'Operation Licenses and renewals',
        'Rural Environmental Registry (CAR)',
        'Legal Reserve and Permanent Preservation Area (APP)'
      ],
      'es': [
        'Estudio de Viabilidad Ambiental',
        'Acompañamiento de Licenciamiento (LP, LI, LO)',
        'Regularización de propiedades rurales y urbanas',
        'Análisis legal de supresión de vegetación, permisos y áreas de preservación',
        'Licencias de Operación y renovaciones',
        'Registro Ambiental Rural (CAR)',
        'Reserva Legal y Área de Preservación Permanente (APP)'
      ],
      'de': [
        'Umwelt-Machbarkeitsstudie',
        'Genehmigungsbegleitung (Vorläufig, Installation, Betrieb)',
        'Regularisierung ländlicher und städtischer Immobilien',
        'Rechtliche Analyse von Vegetationsentfernung, Genehmigungen und Schutzgebieten',
        'Betriebsgenehmigungen und Verlängerungen',
        'Ländliches Umweltregister (CAR)',
        'Gesetzliche Reserve und Dauerschutzgebiet (APP)'
      ]
    },
    featured: true,
    seoMeta: {
      'pt-br': {
        title: 'Licenciamento Ambiental - Farias Klug Advocacia SC',
        description: 'Assessoria jurídica para licenciamento e regularização ambiental. LP, LI, LO e CAR em Santa Catarina.',
        keywords: ['licenciamento ambiental', 'regularização ambiental', 'CAR', 'licença prévia', 'licença operação', 'advocacia SC']
      },
      'en': {
        title: 'Environmental Licensing - Farias Klug Law Firm SC',
        description: 'Legal advisory for environmental licensing and regularization. Preliminary, Installation, and Operation licenses in Santa Catarina.',
        keywords: ['environmental licensing', 'environmental regularization', 'CAR', 'preliminary license', 'operation license', 'law firm SC']
      },
      'es': {
        title: 'Licenciamiento Ambiental - Farias Klug Abogacía SC',
        description: 'Asesoría legal para licenciamiento y regularización ambiental. LP, LI, LO y CAR en Santa Catarina.',
        keywords: ['licenciamiento ambiental', 'regularización ambiental', 'CAR', 'licencia previa', 'licencia operación', 'abogacía SC']
      },
      'de': {
        title: 'Umweltgenehmigungen - Farias Klug Anwaltskanzlei SC',
        description: 'Rechtsberatung für Umweltgenehmigungen und -regularisierung. Vorläufige, Installations- und Betriebsgenehmigungen in Santa Catarina.',
        keywords: ['Umweltgenehmigungen', 'Umweltregularisierung', 'CAR', 'Vorgenehmigung', 'Betriebsgenehmigung', 'Anwaltskanzlei SC']
      }
    },
    cta: {
      'pt-br': 'Precisa de licenciamento?',
      'en': 'Need licensing support?',
      'es': '¿Necesita licenciamiento?',
      'de': 'Brauchen Sie Genehmigungen?'
    }
  },
  {
    id: 'consultoria-juridica-ambiental',
    slug: 'consultoria-juridica-ambiental',
    order: 3,
    title: {
      'pt-br': 'Consultoria Jurídica Ambiental',
      'en': 'Environmental Legal Consulting',
      'es': 'Consultoría Jurídica Ambiental',
      'de': 'Juristische Umweltberatung'
    },
    description: {
      'pt-br': 'Análise preventiva e estratégica para empreendimentos que desejam crescer com segurança jurídica ambiental.',
      'en': 'Preventive and strategic analysis for businesses seeking environmentally secure growth.',
      'es': 'Análisis preventivo y estratégico para proyectos que buscan crecer con seguridad jurídica ambiental.',
      'de': 'Präventive und strategische Analyse für Unternehmen, die rechtssicher und umweltkonform wachsen möchten.'
    },
    shortDescription: {
      'pt-br': 'Consultoria preventiva para segurança jurídica ambiental',
      'en': 'Preventive consulting for environmental legal security',
      'es': 'Consultoría preventiva para seguridad jurídica ambiental',
      'de': 'Präventive Beratung für umweltrechtliche Sicherheit'
    },
    icon: 'leaf',
    color: {
      primary: '#0284c7', // Azul - representa confiança/consultoria
      secondary: '#f0f9ff',
      accent: '#0369a1'
    },
    services: {
      'pt-br': [
        'Apoio a consultorias ambientais',
        'Orientação a engenheiros e técnicos sobre normas e exigências',
        'Pareceres jurídicos e estudos técnicos aplicados',
        'Revisão de estudos de impacto (EIA/RIMA, RCA/PCA)',
        'Due diligence ambiental para aquisições',
        'Compliance ambiental empresarial',
        'Treinamentos in-company sobre legislação ambiental'
      ],
      'en': [
        'Support to environmental consultancies',
        'Guidance to engineers and technicians on norms and requirements',
        'Legal opinions and applied technical studies',
        'Review of impact studies (EIA/RIMA, RCA/PCA)',
        'Environmental due diligence for acquisitions',
        'Corporate environmental compliance',
        'In-company training on environmental legislation'
      ],
      'es': [
        'Apoyo a consultorías ambientales',
        'Orientación a ingenieros y técnicos sobre normas y exigencias',
        'Dictámenes legales y estudios técnicos aplicados',
        'Revisión de estudios de impacto (EIA/RIMA, RCA/PCA)',
        'Due diligence ambiental para adquisiciones',
        'Cumplimiento ambiental empresarial',
        'Capacitaciones in-company sobre legislación ambiental'
      ],
      'de': [
        'Unterstützung von Umweltberatungen',
        'Beratung für Ingenieure und Techniker zu Normen und Anforderungen',
        'Rechtsgutachten und angewandte technische Studien',
        'Überprüfung von Auswirkungsstudien (EIA/RIMA, RCA/PCA)',
        'Umwelt-Due-Diligence für Akquisitionen',
        'Unternehmens-Umwelt-Compliance',
        'Inhouse-Schulungen zu Umweltgesetzen'
      ]
    },
    featured: true,
    seoMeta: {
      'pt-br': {
        title: 'Consultoria Jurídica Ambiental - Farias Klug Advocacia',
        description: 'Consultoria estratégica em direito ambiental. Due diligence, compliance e pareceres jurídicos especializados.',
        keywords: ['consultoria ambiental', 'compliance ambiental', 'due diligence', 'parecer jurídico', 'EIA RIMA', 'consultoria SC']
      },
      'en': {
        title: 'Environmental Legal Consulting - Farias Klug Law Firm',
        description: 'Strategic consulting in environmental law. Due diligence, compliance and specialized legal opinions.',
        keywords: ['environmental consulting', 'environmental compliance', 'due diligence', 'legal opinion', 'EIA RIMA', 'consulting SC']
      },
      'es': {
        title: 'Consultoría Jurídica Ambiental - Farias Klug Abogacía',
        description: 'Consultoría estratégica en derecho ambiental. Due diligence, cumplimiento y dictámenes jurídicos especializados.',
        keywords: ['consultoría ambiental', 'cumplimiento ambiental', 'due diligence', 'dictamen jurídico', 'EIA RIMA', 'consultoría SC']
      },
      'de': {
        title: 'Juristische Umweltberatung - Farias Klug Anwaltskanzlei',
        description: 'Strategische Beratung im Umweltrecht. Due Diligence, Compliance und spezialisierte Rechtsgutachten.',
        keywords: ['Umweltberatung', 'Umwelt-Compliance', 'Due Diligence', 'Rechtsgutachten', 'EIA RIMA', 'Beratung SC']
      }
    },
    cta: {
      'pt-br': 'Quer consultoria estratégica?',
      'en': 'Want strategic consulting?',
      'es': '¿Quiere consultoría estratégica?',
      'de': 'Möchten Sie strategische Beratung?'
    }
  },
  {
    id: 'direito-empresarial',
    slug: 'direito-empresarial',
    order: 4,
    title: {
      'pt-br': 'Direito Empresarial',
      'en': 'Corporate Law',
      'es': 'Derecho Empresarial',
      'de': 'Unternehmensrecht'
    },
    description: {
      'pt-br': 'Atendimento jurídico complementar para empresas que buscam segurança em negociações e contratos.',
      'en': 'Complementary legal services for companies seeking safe negotiations and contractual support.',
      'es': 'Atención jurídica complementaria para empresas que buscan seguridad en negociaciones y contratos.',
      'de': 'Rechtliche Betreuung für Unternehmen bei Verhandlungen und Verträgen.'
    },
    shortDescription: {
      'pt-br': 'Segurança jurídica para negócios e contratos empresariais',
      'en': 'Legal security for business and corporate contracts',
      'es': 'Seguridad jurídica para negocios y contratos empresariales',
      'de': 'Rechtssicherheit für Geschäfte und Unternehmensverträge'
    },
    icon: 'briefcase',
    color: {
      primary: '#7c3aed', // Roxo - representa negócios/corporativo
      secondary: '#faf5ff',
      accent: '#6d28d9'
    },
    services: {
      'pt-br': [
        'Contratos de prestação de serviços e compra e venda de imóveis',
        'Notificações extrajudiciais e gestão de conflitos',
        'Análise de risco em negócios jurídicos',
        'Consultoria recorrente para empreendedores e investidores',
        'Estruturação societária e holding',
        'Contratos internacionais e joint ventures',
        'Governança corporativa e compliance'
      ],
      'en': [
        'Service contracts and real estate purchase and sale agreements',
        'Extrajudicial notifications and conflict management',
        'Risk analysis in legal business',
        'Recurring consulting for entrepreneurs and investors',
        'Corporate structuring and holding companies',
        'International contracts and joint ventures',
        'Corporate governance and compliance'
      ],
      'es': [
        'Contratos de prestación de servicios y compraventa de inmuebles',
        'Notificaciones extrajudiciales y gestión de conflictos',
        'Análisis de riesgo en negocios jurídicos',
        'Consultoría recurrente para emprendedores e inversores',
        'Estructuración societaria y holding',
        'Contratos internacionales y joint ventures',
        'Gobierno corporativo y cumplimiento'
      ],
      'de': [
        'Dienstleistungsverträge und Immobilienkauf- und -verkaufsverträge',
        'Außergerichtliche Benachrichtigungen und Konfliktmanagement',
        'Risikoanalyse in Rechtsgeschäften',
        'Laufende Beratung für Unternehmer und Investoren',
        'Unternehmensstrukturierung und Holding-Gesellschaften',
        'Internationale Verträge und Joint Ventures',
        'Corporate Governance und Compliance'
      ]
    },
    featured: true,
    seoMeta: {
      'pt-br': {
        title: 'Direito Empresarial - Farias Klug Advocacia SC',
        description: 'Advocacia empresarial especializada. Contratos, estruturação societária e consultoria jurídica para empresas.',
        keywords: ['direito empresarial', 'contratos empresariais', 'consultoria jurídica', 'estruturação societária', 'advocacia empresarial SC']
      },
      'en': {
        title: 'Corporate Law - Farias Klug Law Firm SC',
        description: 'Specialized corporate law. Contracts, corporate structuring and legal consulting for companies.',
        keywords: ['corporate law', 'business contracts', 'legal consulting', 'corporate structuring', 'business law firm SC']
      },
      'es': {
        title: 'Derecho Empresarial - Farias Klug Abogacía SC',
        description: 'Abogacía empresarial especializada. Contratos, estructuración societaria y consultoría jurídica para empresas.',
        keywords: ['derecho empresarial', 'contratos empresariales', 'consultoría jurídica', 'estructuración societaria', 'abogacía empresarial SC']
      },
      'de': {
        title: 'Unternehmensrecht - Farias Klug Anwaltskanzlei SC',
        description: 'Spezialisiertes Unternehmensrecht. Verträge, Unternehmensstrukturierung und Rechtsberatung für Unternehmen.',
        keywords: ['Unternehmensrecht', 'Geschäftsverträge', 'Rechtsberatung', 'Unternehmensstrukturierung', 'Wirtschaftsanwaltskanzlei SC']
      }
    },
    cta: {
      'pt-br': 'Precisa de assessoria empresarial?',
      'en': 'Need business advisory?',
      'es': '¿Necesita asesoría empresarial?',
      'de': 'Brauchen Sie Unternehmensberatung?'
    }
  }
]

// Utilitários para trabalhar com as áreas
export const legalAreasUtils = {
  // Buscar área por slug
  getBySlug: (slug: string) =>
    legalAreas.find(area => area.slug === slug),

  // Buscar área por ID
  getById: (id: string) =>
    legalAreas.find(area => area.id === id),

  // Obter apenas áreas em destaque
  getFeatured: () =>
    legalAreas.filter(area => area.featured),

  // Ordenar por ordem definida
  getOrdered: () =>
    [...legalAreas].sort((a, b) => a.order - b.order),

  // Buscar por termo (título ou descrição)
  search: (term: string, locale: 'pt-br' | 'en' | 'es' | 'de' = 'pt-br') =>
    legalAreas.filter(area =>
      area.title[locale].toLowerCase().includes(term.toLowerCase()) ||
      area.description[locale].toLowerCase().includes(term.toLowerCase())
    ),

  // Gerar lista de ícones únicos
  getIcons: () =>
    [...new Set(legalAreas.map(area => area.icon))],

  // Validar se todos os slugs são únicos
  validateSlugs: () => {
    const slugs = legalAreas.map(area => area.slug)
    return slugs.length === new Set(slugs).size
  }
}
