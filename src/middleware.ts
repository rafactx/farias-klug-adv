import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/seo';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'pt-BR',

  // Locale prefix configuration
  localePrefix: 'as-needed',

  // Redirect configuration
  localeDetection: true,

  // Pathnames configuration for SEO-friendly URLs
  pathnames: {
    '/': '/',
    '/sobre': {
      en: '/about',
      es: '/acerca',
      de: '/uber-uns',
      fr: '/a-propos'
    },
    '/servicos': {
      en: '/services',
      es: '/servicios',
      de: '/dienstleistungen',
      fr: '/services'
    },
    '/equipe': {
      en: '/team',
      es: '/equipo',
      de: '/team',
      fr: '/equipe'
    },
    '/contato': {
      en: '/contact',
      es: '/contacto',
      de: '/kontakt',
      fr: '/contact'
    },
    '/perguntas-frequentes': {
      en: '/faq',
      es: '/preguntas-frecuentes',
      de: '/haufig-gestellte-fragen',
      fr: '/faq'
    }
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(pt-BR|en|es|de|fr)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
