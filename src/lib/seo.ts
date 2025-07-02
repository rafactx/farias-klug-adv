export const defaultSEO = {
  'pt-br': {
    title: 'Advocacia Ambiental e Empresarial | Licenciamento, Contratos e Consultoria Jurídica',
    description: 'Atuação especializada em Direito Ambiental e Direito Empresarial. Defesa jurídica, licenciamento, contratos, notificações extrajudiciais e consultoria estratégica.',
    keywords: [
      'advocacia ambiental',
      'direito ambiental',
      'licenciamento ambiental',
      'consultoria jurídica ambiental',
      'direito empresarial',
      'contratos',
      'notificação extrajudicial',
      'análise de risco jurídico',
      'negociação jurídica'
    ]
  },
  en: {
    title: 'Environmental & Business Law Firm | Licensing, Contracts and Legal Consulting',
    description: 'Specialized legal services in Environmental and Business Law. Legal defense, environmental licensing, contract analysis, and strategic legal consulting.',
    keywords: [
      'environmental law',
      'legal consulting',
      'environmental licensing',
      'business law',
      'contracts',
      'extrajudicial notice',
      'legal risk analysis',
      'conflict negotiation'
    ]
  },
  es: {
    title: 'Bufete de Derecho Ambiental y Empresarial | Licencias, Contratos y Asesoría Legal',
    description: 'Asesoría jurídica especializada en Derecho Ambiental y Derecho Empresarial. Defensa legal, licencias ambientales, contratos y resolución estratégica de conflictos.',
    keywords: [
      'derecho ambiental',
      'licencias ambientales',
      'asesoría jurídica',
      'derecho empresarial',
      'contratos',
      'notificación extrajudicial',
      'análisis de riesgo legal',
      'negociación jurídica'
    ]
  },
  de: {
    title: 'Kanzlei für Umwelt- und Wirtschaftsrecht | Genehmigungen, Verträge und Rechtsberatung',
    description: 'Spezialisierte Kanzlei für Umweltrecht und Wirtschaftsrecht. Umweltgenehmigungen, Vertragsanalyse, rechtliche Beratung und Konfliktlösung.',
    keywords: [
      'Umweltrecht',
      'Wirtschaftsrecht',
      'Rechtsberatung',
      'Umweltgenehmigung',
      'Vertragsrecht',
      'außergerichtliche Mitteilung',
      'juristische Risikoanalyse',
      'Verhandlungsführung'
    ]
  }
}

export function generateSEO(locale: Locale, page?: string, custom?: Partial<{ title: string; description: string }>) {
  const base = defaultSEO[locale] || defaultSEO['pt-br']

  return {
    ...base,
    ...custom,
    title: custom?.title || (page ? `${page} | ${base.title}` : base.title),
    description: custom?.description || base.description
  }
}

