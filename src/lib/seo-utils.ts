import { type Locale } from '@/lib/locales';
import { siteConfig } from './seo';

// Generate URL for specific locale and path
export function generateLocalizedUrl(locale: Locale, path: string = ''): string {
  const baseUrl = siteConfig.url;
  const localePrefix = locale === 'pt-BR' ? '' : `/${locale}`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${baseUrl}${localePrefix}${cleanPath}`;
}

// Generate alternate URLs for all locales
export function generateAlternateUrls(path: string = '') {
  const alternates: Record<string, string> = {};

  for (const locale of ['pt-BR', 'en', 'es', 'de', 'fr'] as const) {
    alternates[locale] = generateLocalizedUrl(locale, path);
  }

  return alternates;
}

// URL optimization for SEO
export function optimizeUrl(url: string): string {
  return url
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// Generate FAQ structured data
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Generate legal service specific schema
export function generateLegalServiceSchema(locale: Locale, serviceName: string, description: string) {
  const baseUrl = siteConfig.url;
  const localeUrl = locale === 'pt-BR' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${localeUrl}#${optimizeUrl(serviceName)}`,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LegalService',
      name: 'Farias Klug Advocacia',
      url: localeUrl
    },
    areaServed: {
      '@type': 'State',
      name: 'Santa Catarina',
      addressCountry: 'BR'
    },
    serviceType: locale === 'pt-BR' ? 'Serviços Jurídicos' :
                 locale === 'en' ? 'Legal Services' :
                 locale === 'es' ? 'Servicios Jurídicos' :
                 locale === 'de' ? 'Rechtsdienste' :
                 'Services Juridiques'
  };
}

// Performance optimization for images
export function generateImageSEO(src: string, alt: string, width?: number, height?: number) {
  return {
    src,
    alt,
    width: width || 1200,
    height: height || 630,
    loading: 'lazy' as const,
    decoding: 'async' as const
  };
}

// Meta tag generation helper
export function generateMetaTags(data: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  locale: Locale;
}) {
  const tags = {
    title: data.title,
    description: data.description,
    canonical: data.canonical,
    'og:title': data.title,
    'og:description': data.description,
    'og:type': 'website',
    'og:locale': data.locale,
    'og:image': data.ogImage || `${siteConfig.url}/og-image.jpg`,
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.ogImage || `${siteConfig.url}/og-image.jpg`,
  } as Record<string, string>;

  if (data.keywords && data.keywords.length > 0) {
    tags['keywords'] = data.keywords.join(', ');
  }

  return tags;
}
