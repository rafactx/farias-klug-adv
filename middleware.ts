/**
 * @fileoverview Middleware para roteamento internacional
 *
 * Gerencia redirecionamentos automáticos baseados no idioma do usuário,
 * detecta locale preferido e configura roteamento para i18n.
 *
 * @example
 * ```
 * / -> /pt-br (usuário brasileiro)
 * / -> /en (usuário internacional)
 * /sobre -> /pt-br/sobre
 * ```
 */

import { NextRequest, NextResponse } from 'next/server'

// Configuração de idiomas
const locales = ['pt-br', 'en', 'es', 'de'] as const
const defaultLocale = 'pt-br'

type Locale = typeof locales[number]

/**
 * Detecta o idioma preferido do usuário baseado em Accept-Language
 */
function getPreferredLocale(request: NextRequest): Locale {
  // Obter Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''

  // Mapear idiomas do browser para nossos locales
  const languageMap: Record<string, Locale> = {
    'pt': 'pt-br',
    'pt-br': 'pt-br',
    'pt-pt': 'pt-br',
    'en': 'en',
    'en-us': 'en',
    'en-gb': 'en',
    'es': 'es',
    'es-es': 'es',
    'es-mx': 'es',
    'de': 'de',
    'de-de': 'de'
  }

  // Extrair idiomas preferidos
  const preferred = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .find(lang => languageMap[lang])

  return preferred ? languageMap[preferred] : defaultLocale
}

/**
 * Verifica se o pathname já tem um locale válido
 */
function getLocaleFromPath(pathname: string): Locale | null {
  const pathSegments = pathname.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]

  return locales.includes(firstSegment as Locale) ? firstSegment as Locale : null
}

/**
 * Middleware principal
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Ignorar arquivos estáticos e rotas da API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/icons') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Verificar se já existe locale na URL
  const localeFromPath = getLocaleFromPath(pathname)

  if (localeFromPath) {
    // URL já tem locale válido, continuar
    return NextResponse.next()
  }

  // Redirecionar para incluir locale
  const preferredLocale = getPreferredLocale(request)
  const newPathname = `/${preferredLocale}${pathname}`
  const newUrl = new URL(newPathname + search, request.url)

  // Usar redirect permanente para SEO
  return NextResponse.redirect(newUrl, 301)
}

/**
 * Configuração do matcher
 * Define quais rotas o middleware deve processar
 */
export const config = {
  matcher: [
    /*
     * Aplicar middleware a todas as rotas exceto:
     * - API routes
     * - Arquivos estáticos (_next/static)
     * - Arquivos de imagem/media
     * - Arquivos com extensão
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
}
