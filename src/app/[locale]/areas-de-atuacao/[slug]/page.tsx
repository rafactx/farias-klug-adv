/**
 * @fileoverview Página individual de Área de Atuação
 *
 * Página dinâmica que apresenta informações detalhadas sobre uma área
 * específica de atuação do escritório Farias Klug Advocacia.
 * Inclui serviços, processos, casos de uso e chamadas para ação.
 *
 * @example
 * ```tsx
 * // Acessível via: /[locale]/areas-de-atuacao/[slug]
 * // Ex: /pt-br/areas-de-atuacao/defesas-e-recursos-ambientais
 * ```
 */

import { whatsappMessages } from '@/data/contact-info'
import { legalAreas } from '@/data/legal-areas'
import { getDictionary } from '@/lib/i18n'
import { Locale } from '@/types/globals'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

// Componentes de layout
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/footer'

// Componentes de seções
import { Contact } from '@/components/sections/contact'

// Interface para props da página
interface AreaPageProps {
  params: {
    locale: Locale
    slug: string
  }
}

// Geração de metadados dinâmicos para SEO
export async function generateMetadata({ params }: AreaPageProps) {
  const { locale, slug } = params
  const dictionary = await getDictionary(locale)
  const area = legalAreas.find(area => area.slug === slug)

  if (!area) {
    return {
      title: 'Página não encontrada',
      description: 'A área de atuação solicitada não foi encontrada',
    }
  }

  const areaTitle = area.title[locale as keyof typeof area.title] || area.title['pt-br']
  const areaDescription = area.description[locale as keyof typeof area.description] || area.description['pt-br']
  const seoMeta = area.seoMeta?.[locale as keyof typeof area.seoMeta]

  return {
    title: seoMeta?.title || `${areaTitle} - ${dictionary.company?.name}`,
    description: seoMeta?.description || areaDescription,
    keywords: seoMeta?.keywords?.join(', ') || [
      areaTitle.toLowerCase(),
      dictionary.company?.name,
      "advocacia",
      "Santa Catarina",
      "Florianópolis",
      "Joinville"
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `${areaTitle} - ${dictionary.company?.name}`,
      description: areaDescription,
      type: 'website',
      locale: locale === 'pt-br' ? 'pt_BR' : locale,
      images: [
        {
          url: `/images/areas/${area.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: areaTitle,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/areas-de-atuacao/${slug}`,
      languages: {
        'pt-BR': `${process.env.NEXT_PUBLIC_SITE_URL}/pt-br/areas-de-atuacao/${slug}`,
        'en': `${process.env.NEXT_PUBLIC_SITE_URL}/en/areas-de-atuacao/${slug}`,
        'es': `${process.env.NEXT_PUBLIC_SITE_URL}/es/areas-de-atuacao/${slug}`,
        'de': `${process.env.NEXT_PUBLIC_SITE_URL}/de/areas-de-atuacao/${slug}`,
      },
    },
  }
}

// Componente de loading para Suspense
function AreaPageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="h-20 bg-gray-200"></div>

      {/* Hero section skeleton */}
      <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200">
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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-64 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente principal da página
async function AreaPageContent({ locale, slug }: { locale: Locale; slug: string }) {
  const dictionary = await getDictionary(locale)
  const area = legalAreas.find(area => area.slug === slug)

  if (!area) {
    notFound()
  }

  // Extrair dados da área com tipagem correta
  const areaTitle = area.title[locale as keyof typeof area.title] || area.title['pt-br']
  const areaDescription = area.description[locale as keyof typeof area.description] || area.description['pt-br']
  const areaServices = area.services[locale as keyof typeof area.services] || area.services['pt-br']

  // Handler para analytics
  const handleAnalytics = (event: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        ...data,
        page_location: window.location.href,
        locale,
        page_type: 'area_detail',
        area_slug: slug,
        area_title: areaTitle
      })
    }
  }

  // Mensagem personalizada do WhatsApp para esta área
  const whatsappMessage = whatsappMessages[slug as keyof typeof whatsappMessages]?.[locale] ||
                          whatsappMessages.general[locale]

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
                {areaTitle}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {areaDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Area Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {areaDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Serviços Relacionados */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {dictionary.areas?.services || 'Nossos Serviços'}
                </h2>
                <p className="text-xl text-gray-600">
                  Como podemos ajudar você nesta área
                </p>
              </div>

                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {areaServices?.map((service: string, index: number) => (
                   <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                        <p className="text-sm text-gray-600">
                          Assessoria especializada e personalizada para suas necessidades
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Processo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Como Trabalhamos
                </h2>
                <p className="text-xl text-gray-600">
                  Nosso processo estruturado para garantir os melhores resultados
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Análise Inicial',
                    description: 'Avaliamos seu caso e identificamos as melhores estratégias'
                  },
                  {
                    step: '02',
                    title: 'Planejamento',
                    description: 'Desenvolvemos um plano de ação personalizado'
                  },
                  {
                    step: '03',
                    title: 'Execução',
                    description: 'Implementamos as soluções com acompanhamento constante'
                  },
                  {
                    step: '04',
                    title: 'Resultados',
                    description: 'Alcançamos os objetivos com segurança jurídica'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção de FAQ ou Casos Comuns */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4 text-gray-900">
                   Precisa de Ajuda?
                 </h2>
                <p className="text-xl text-gray-600">
                  Entre em contato conosco para uma consulta personalizada
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Consulta Especializada
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Nossa equipe está pronta para analisar seu caso e oferecer as melhores soluções
                  em {area.title[locale]?.toLowerCase()}.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/554799661321?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    onClick={() => handleAnalytics('whatsapp_cta_click', { source: 'area_detail' })}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Falar no WhatsApp
                  </a>

                  <a
                    href={`mailto:contato@fariasklugadvocacia.com.br?subject=Consulta sobre ${area.title[locale]}`}
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => handleAnalytics('email_cta_click', { source: 'area_detail' })}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enviar E-mail
                  </a>
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
 * Página individual de Área de Atuação
 *
 * Renderiza informações detalhadas sobre uma área específica,
 * incluindo serviços, processo de trabalho e chamadas para ação.
 *
 * @example
 * ```tsx
 * // Renderizada automaticamente para:
 * // /pt-br/areas-de-atuacao/defesas-e-recursos-ambientais
 * ```
 */
export default function AreaPage({ params }: AreaPageProps) {
  const { locale, slug } = params

  return (
    <Suspense fallback={<AreaPageSkeleton />}>
      <AreaPageContent locale={locale} slug={slug} />
    </Suspense>
  )
}

// Geração de parâmetros estáticos para todas as combinações
export async function generateStaticParams() {
  const locales: Locale[] = ['pt-br', 'en', 'es', 'de']
  const params = []

  for (const locale of locales) {
    for (const area of legalAreas) {
      params.push({
        locale,
        slug: area.slug,
      })
    }
  }

  return params
}
