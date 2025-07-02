/**
 * @fileoverview Página de Áreas de Atuação da aplicação
 *
 * Página dedicada a apresentar todas as áreas de atuação do escritório
 * Farias Klug Advocacia com filtros, busca e navegação otimizada.
 * Inclui grid responsivo e informações detalhadas de cada área.
 *
 * @example
 * ```tsx
 * // Acessível via: /[locale]/areas-de-atuacao
 * // Renderiza: Hero + Areas Expandidas + Filtros + Contact
 * ```
 */

import { legalAreas } from '@/data/legal-areas'
import { getDictionary } from '@/lib/i18n'
import { Locale } from '@/types/globals'
import { Suspense } from 'react'

// Componentes de layout
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/footer'

// Componentes de seções
import { Areas } from '@/components/sections/areas'
import { Contact } from '@/components/sections/contact'

// Interface para props da página
interface AreasPageProps {
  params: {
    locale: Locale
  }
}

// Geração de metadados para SEO
export async function generateMetadata({ params }: AreasPageProps) {
  const { locale } = params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.areas?.title} - ${dictionary.company?.name}`,
    description: dictionary.areas?.description || `Conheça todas as áreas de atuação da ${dictionary.company?.name}`,
    keywords: [
      dictionary.areas?.title?.toLowerCase(),
      dictionary.company?.name,
      dictionary.specialties?.environmental,
      dictionary.specialties?.corporate,
      dictionary.specialties?.defense,
      dictionary.specialties?.licensing,
      dictionary.specialties?.consulting,
      "áreas advocacia",
      "especialidades jurídicas",
      "Santa Catarina",
      "Florianópolis",
      "Joinville"
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `${dictionary.areas?.title} - ${dictionary.company?.name}`,
      description: dictionary.areas?.description,
      type: 'website',
      locale: locale === 'pt-br' ? 'pt_BR' : locale,
      images: [
        {
          url: '/images/og-areas.jpg',
          width: 1200,
          height: 630,
          alt: `${dictionary.areas?.title} - ${dictionary.company?.name}`,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/areas-de-atuacao`,
      languages: {
        'pt-BR': `${process.env.NEXT_PUBLIC_SITE_URL}/pt-br/areas-de-atuacao`,
        'en': `${process.env.NEXT_PUBLIC_SITE_URL}/en/areas-de-atuacao`,
        'es': `${process.env.NEXT_PUBLIC_SITE_URL}/es/areas-de-atuacao`,
        'de': `${process.env.NEXT_PUBLIC_SITE_URL}/de/areas-de-atuacao`,
      },
    },
  }
}

// Componente de loading para Suspense
function AreasPageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="h-20 bg-gray-200"></div>

      {/* Hero section skeleton */}
      <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-12 bg-gray-300 rounded w-96 mx-auto"></div>
            <div className="h-6 bg-gray-300 rounded w-64 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-20 py-20">
        <div className="container mx-auto px-4">
          {/* Filters skeleton */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-24"></div>
              ))}
            </div>
          </div>

          {/* Grid skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente principal da página
async function AreasPageContent({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale)

  // Handler para analytics
  const handleAnalytics = (event: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        ...data,
        page_location: window.location.href,
        locale,
        page_type: 'areas'
      })
    }
  }

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="overflow-x-hidden">
        {/* Page Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {dictionary.areas?.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {dictionary.areas?.subtitle}
              </p>
              <div className="mt-8">
                <p className="text-lg text-gray-700">
                  {dictionary.areas?.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section Expandida */}
        <Areas
          dictionary={dictionary}
          locale={locale}
          variant="full"
          showControls={true}
          showFilters={true}
          initialLayout="grid"
          onAnalytics={handleAnalytics}
        />

        {/* Seção de Especialidades em Destaque */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {dictionary.areas?.featured || 'Áreas em Destaque'}
                </h2>
                <p className="text-xl text-gray-600">
                  {dictionary.areas?.expertise || 'Nossa expertise principal'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Direito Ambiental */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {dictionary.specialties?.environmental}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Especialização completa em direito ambiental, incluindo defesas,
                    licenciamento e consultoria preventiva para empresas e pessoas físicas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{dictionary.specialties?.defense}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{dictionary.specialties?.licensing}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{dictionary.specialties?.consulting}</span>
                    </li>
                  </ul>
                </div>

                {/* Direito Empresarial */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {dictionary.specialties?.corporate}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Assessoria jurídica completa para empresas, desde a constituição
                    até operações complexas, sempre com foco na segurança jurídica.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{dictionary.specialties?.contracts}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{dictionary.specialties?.compliance}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{dictionary.specialties?.litigation}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Estatísticas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-gray-900">
                {dictionary.areas?.howWeHelp || 'Como Podemos Ajudar'}
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{legalAreas.length}</div>
                  <div className="text-gray-600">{dictionary.about?.specialties}</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">{dictionary.about?.experience}</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-gray-600">{dictionary.locations?.coverage}</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <div className="text-gray-600">{dictionary.languages?.legal}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact
          dictionary={dictionary}
          locale={locale}
          variant="compact"
          onAnalytics={handleAnalytics}
        />
      </main>

      {/* Footer */}
      <Footer
        dictionary={dictionary}
        locale={locale}
      />
    </>
  )
}

/**
 * Página de Áreas de Atuação da aplicação
 *
 * Renderiza listagem completa das áreas de atuação do escritório,
 * incluindo filtros, busca e informações detalhadas.
 *
 * @example
 * ```tsx
 * // Renderizada automaticamente para:
 * // /pt-br/areas-de-atuacao, /en/areas-de-atuacao, etc.
 * ```
 */
export default function AreasPage({ params }: AreasPageProps) {
  const { locale } = params

  return (
    <Suspense fallback={<AreasPageSkeleton />}>
      <AreasPageContent locale={locale} />
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
