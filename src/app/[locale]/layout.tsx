/**
 * @fileoverview Layout principal da aplicação com suporte a internacionalização
 *
 * Layout responsável por configurar a estrutura base da aplicação, incluindo
 * metadados dinâmicos, fontes, viewport e suporte completo a múltiplos idiomas.
 *
 * @example
 * ```tsx
 * // Estrutura de rota: /[locale]/page.tsx
 * // Idiomas suportados: pt-br, en, es, de
 * ```
 */

import { generateMeta } from '@/features/seo/utils/generate-meta'
import { getDictionary } from '@/lib/i18n'
import "@/styles/globals.css"
import { Locale } from '@/types/globals'
import type { Metadata, Viewport } from "next"
import { Lora, Playfair_Display } from "next/font/google"

// Configuração de fontes otimizada
const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
})

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
})

// Configuração de idiomas suportados
const locales: Locale[] = ['pt-br', 'en', 'es', 'de']
const defaultLocale: Locale = 'pt-br'

// Interface para props do layout
interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

// Geração de metadados dinâmicos baseados no idioma
export async function generateMetadata({ params }: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return generateMeta({
    locale,
    title: dictionary.company?.name || "Farias Klug Advocacia",
    description: dictionary.company?.tagline || "Advocacia Ambiental de Excelência",
    keywords: [
      dictionary.specialties?.environmental,
      dictionary.specialties?.corporate,
      dictionary.specialties?.defense,
      dictionary.specialties?.licensing,
      dictionary.specialties?.consulting,
      "advocacia ambiental",
      "direito empresarial",
      "Santa Catarina",
      "Florianópolis",
      "Joinville"
    ].filter(Boolean),
    canonical: `/${locale}`,
    image: "/images/og-image.jpg"
  })
}

// Configuração de viewport otimizada
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light dark',
}

// Geração de parâmetros estáticos para todas as rotas de idioma
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

/**
 * Layout principal da aplicação
 *
 * Configura a estrutura base com suporte a múltiplos idiomas, otimizações
 * de performance e estrutura semântica HTML5.
 *
 * @example
 * ```tsx
 * // Automaticamente renderizado para cada rota [locale]
 * // Suporte completo a pt-br, en, es, de
 * ```
 */
export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params

  // Validação de idioma
  const validLocale = locales.includes(locale) ? locale : defaultLocale

  // Configuração de idioma HTML
  const htmlLang = validLocale === 'pt-br' ? 'pt-BR' :
                   validLocale === 'en' ? 'en' :
                   validLocale === 'es' ? 'es' :
                   validLocale === 'de' ? 'de' : 'pt-BR'

  return (
    <html
      lang={htmlLang}
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${lora.variable}`}
      dir="ltr"
    >
      <head>
        {/* Preconnect para otimização de fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Meta tags técnicas */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Farias Klug" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Links alternativos para idiomas */}
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc === 'pt-br' ? 'pt-BR' : loc}
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/${loc}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL} />

        {/* Dados estruturados básicos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Farias Klug Advocacia",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "areaServed": ["Florianópolis", "Joinville", "Santa Catarina"],
              "serviceType": ["Direito Ambiental", "Direito Empresarial"],
              "availableLanguage": ["pt-BR", "en", "es", "de"]
            })
          }}
        />
      </head>

      <body className="font-sans antialiased bg-white text-gray-900">
        {/* Skip to main content para acessibilidade */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Pular para o conteúdo principal
        </a>

        <div className="relative min-h-screen flex flex-col">
          {/* Wrapper principal com contexto de idioma */}
          <div id="main-content" className="flex-1">
            {children}
          </div>
        </div>

        {/* Analytics e scripts externos */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics - ajustar ID */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    custom_map: {
                      dimension1: '${validLocale}',
                      dimension2: 'legal_services'
                    }
                  });
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
