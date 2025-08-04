import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de todos os idiomas suportados
  locales: ['pt-BR', 'en', 'es', 'de', 'fr'],

  // Idioma padrão (fallback)
  defaultLocale: 'pt-BR',

  // Detecção automática de idioma baseada no navegador
  localeDetection: true,

  // URLs localizadas (ex: /en/about, /pt-BR/sobre)
  localePrefix: 'as-needed'
});

export const config = {
  // Matcher que define quais rotas devem passar pelo middleware
  // Exclui api routes, _next (assets internos) e arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
