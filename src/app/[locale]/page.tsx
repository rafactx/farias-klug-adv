/**
 * @fileoverview Página inicial da aplicação - Home
 *
 * Página principal que apresenta o escritório Farias Klug Advocacia,
 * suas especialidades, serviços e informações de contato. Inclui
 * todas as seções principais e suporte completo a internacionalização.
 *
 * @example
 * ```tsx
 * // Acessível via: /[locale] (pt-br, en, es, de)
 * // Renderiza: Hero + About + Areas + Contact
 * ```
 */

import { getDictionary } from '@/lib/i18n'
import { Locale } from '@/types/globals'
import { Suspense } from 'react'
import HomeClientContent from './client-content'

// Interface para props da página
interface HomePageProps {
  params: {
    locale: Locale
  }
}

// Geração de metadados para SEO
export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.company?.name} - ${dictionary.hero?.title}`,
    description: dictionary.hero?.description || dictionary.about?.description,
    keywords: [
      dictionary.specialties?.environmental,
      dictionary.specialties?.corporate,
      dictionary.specialties?.defense,
      dictionary.specialties?.licensing,
      "advocacia ambiental",
      "direito empresarial",
      "Santa Catarina",
      "Florianópolis",
      "Joinville"
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `${dictionary.company?.name} - ${dictionary.hero?.title}`,
      description: dictionary.hero?.description,
      type: 'website',
      locale: locale === 'pt-br' ? 'pt_BR' : locale,
      images: [
        {
          url: '/images/og-home.jpg',
          width: 1200,
          height: 630,
          alt: `${dictionary.company?.name} - ${dictionary.hero?.title}`,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
      languages: {
        'pt-BR': `${process.env.NEXT_PUBLIC_SITE_URL}/pt-br`,
        'en': `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        'es': `${process.env.NEXT_PUBLIC_SITE_URL}/es`,
        'de': `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
      },
    },
  }
}

// Componente de loading para Suspense
function PageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="h-20 bg-gray-200"></div>

      {/* Hero skeleton */}
      <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-1/2 space-y-4">
            <div className="h-12 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-10 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-20 py-20">
        {[1, 2, 3].map((i) => (
          <div key={i} className="container mx-auto px-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-40 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



/**
 * Página inicial da aplicação
 *
 * Renderiza a página principal com todas as seções: Hero, About, Areas e Contact.
 * Inclui suporte completo a internacionalização e otimizações de performance.
 *
 * @example
 * ```tsx
 * // Renderizada automaticamente para:
 * // /pt-br, /en, /es, /de
 * ```
 */
export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <Suspense fallback={<PageSkeleton />}>
      <HomeClientContent locale={locale} dictionary={dictionary} />
    </Suspense>
  )
}

// Configuração para geração de páginas estáticas
export async function generateStaticParams() {
  const locales: Locale[] = ['pt-br', 'en', 'es', 'de']

  return locales.map((locale) => ({
    locale,
  }))
}
