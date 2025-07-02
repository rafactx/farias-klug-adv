/**
 * @fileoverview Página "Sobre" da aplicação
 *
 * Página dedicada a apresentar informações detalhadas sobre o escritório
 * Farias Klug Advocacia, sua história, missão, valores e equipe.
 * Inclui seções expandidas sobre experiência e credenciais.
 *
 * @example
 * ```tsx
 * // Acessível via: /[locale]/sobre
 * // Renderiza: Hero + About Expandido + Equipe + Contact
 * ```
 */

import { getDictionary } from '@/lib/i18n'
import { Locale } from '@/types/globals'
import { Suspense } from 'react'

// Componentes de layout
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/footer'

// Componentes de seções
import { Contact } from '@/components/sections/contact'

// Interface para props da página
interface AboutPageProps {
  params: {
    locale: Locale
  }
}

// Geração de metadados para SEO
export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.about?.title} - ${dictionary.company?.name}`,
    description: dictionary.about?.description || `Conheça a história e expertise da ${dictionary.company?.name}`,
    keywords: [
      dictionary.about?.title?.toLowerCase(),
      dictionary.company?.name,
      dictionary.specialties?.environmental,
      dictionary.specialties?.corporate,
      "história escritório",
      "experiência advocacia",
      "Santa Catarina",
      "Florianópolis",
      "Joinville"
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `${dictionary.about?.title} - ${dictionary.company?.name}`,
      description: dictionary.about?.description,
      type: 'website',
      locale: locale === 'pt-br' ? 'pt_BR' : locale,
      images: [
        {
          url: '/images/og-about.jpg',
          width: 1200,
          height: 630,
          alt: `${dictionary.about?.title} - ${dictionary.company?.name}`,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/sobre`,
      languages: {
        'pt-BR': `${process.env.NEXT_PUBLIC_SITE_URL}/pt-br/sobre`,
        'en': `${process.env.NEXT_PUBLIC_SITE_URL}/en/sobre`,
        'es': `${process.env.NEXT_PUBLIC_SITE_URL}/es/sobre`,
        'de': `${process.env.NEXT_PUBLIC_SITE_URL}/de/sobre`,
      },
    },
  }
}

// Componente de loading para Suspense
function AboutPageSkeleton() {
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
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente principal da página
async function AboutPageContent({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale)

  // Handler para analytics
  const handleAnalytics = (event: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        ...data,
        page_location: window.location.href,
        locale,
        page_type: 'about'
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
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {dictionary.about?.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {dictionary.about?.subtitle}
              </p>
            </div>
          </div>
        </section>

                {/* About Section Expandida */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                {dictionary.about?.description}
              </h2>
            </div>
          </div>
        </section>

        {/* Seção de História e Missão */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* História */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {dictionary.about?.mission}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {dictionary.about?.missionText}
                </p>

                {/* Valores */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {dictionary.about?.values}
                  </h3>
                  <ul className="space-y-2">
                    {dictionary.about?.valuesList?.map((value: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Imagem/Estatísticas */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {dictionary.company?.founded?.replace('Fundado em ', '') || '2019'}
                  </div>
                  <div className="text-sm text-gray-600">
                    Ano de Fundação
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-gray-600">
                    {dictionary.about?.experience}
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-gray-600">
                    {dictionary.about?.cases}
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600">
                    {dictionary.about?.clients}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Credenciais */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-gray-900">
                {dictionary.team?.credentials || 'Credenciais Profissionais'}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {dictionary.company?.oab || 'OAB/SC 51.807'}
                  </h3>
                  <p className="text-gray-600">
                    Registro profissional na Ordem dos Advogados do Brasil - Seção Santa Catarina
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {dictionary.company?.expertise}
                  </h3>
                  <p className="text-gray-600">
                    Especialização em direito ambiental e empresarial com atuação comprovada
                  </p>
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
 * Página "Sobre" da aplicação
 *
 * Renderiza informações detalhadas sobre o escritório, incluindo história,
 * missão, valores e credenciais profissionais.
 *
 * @example
 * ```tsx
 * // Renderizada automaticamente para:
 * // /pt-br/sobre, /en/sobre, /es/sobre, /de/sobre
 * ```
 */
export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = params

  return (
    <Suspense fallback={<AboutPageSkeleton />}>
      <AboutPageContent locale={locale} />
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
