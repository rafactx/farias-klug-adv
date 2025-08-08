import createMiddleware from 'next-intl/middleware';
import { locales } from './src/lib/locales';

export default createMiddleware({
  locales,
  defaultLocale: 'pt-BR',
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(pt-BR|en|es|de|fr)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
