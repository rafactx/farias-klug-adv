/**
 * @fileoverview Página de Contato da aplicação
 *
 * Página dedicada ao contato com o escritório Farias Klug Advocacia.
 * Inclui formulário de contato, informações detalhadas, botões sociais
 * e mapa de localização das áreas de atendimento.
 *
 * @example
 * ```tsx
 * // Acessível via: /[locale]/contato
 * // Renderiza: Hero + Contact Expandido + Formulário + Mapa
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
interface ContactPageProps {
  params: {
    locale: Locale
  }
}

// Geração de metadados para SEO
export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.contact?.title} - ${dictionary.company?.name}`,
    description: dictionary.contact?.description || `Entre em contato com a ${dictionary.company?.name} em Florianópolis e Joinville`,
    keywords: [
      dictionary.contact?.title?.toLowerCase(),
      dictionary.company?.name,
      "contato advocacia",
      "advogado ambiental",
      "consultoria jurídica",
      "Santa Catarina",
      "Florianópolis",
      "Joinville",
      "WhatsApp advogado",
      "email escritório"
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `${dictionary.contact?.title} - ${dictionary.company?.name}`,
      description: dictionary.contact?.description,
      type: 'website',
      locale: locale === 'pt-br' ? 'pt_BR' : locale,
      images: [
        {
          url: '/images/og-contact.jpg',
          width: 1200,
          height: 630,
          alt: `${dictionary.contact?.title} - ${dictionary.company?.name}`,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/contato`,
      languages: {
        'pt-BR': `${process.env.NEXT_PUBLIC_SITE_URL}/pt-br/contato`,
        'en': `${process.env.NEXT_PUBLIC_SITE_URL}/en/contato`,
        'es': `${process.env.NEXT_PUBLIC_SITE_URL}/es/contato`,
        'de': `${process.env.NEXT_PUBLIC_SITE_URL}/de/contato`,
      },
    },
  }
}

// Componente de loading para Suspense
function ContactPageSkeleton() {
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
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente principal da página
async function ContactPageContent({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale)

  // Handler para analytics
  const handleAnalytics = (event: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        ...data,
        page_location: window.location.href,
        locale,
        page_type: 'contact'
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
                {dictionary.contact?.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {dictionary.contact?.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section Expandida */}
        <Contact
          dictionary={dictionary}
          locale={locale}
          variant="detailed"
          onAnalytics={handleAnalytics}
        />

        {/* Seção de Horários e Localização */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {dictionary.contact?.locations || 'Nossas Localidades'}
                </h2>
                <p className="text-xl text-gray-600">
                  {dictionary.contact?.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Florianópolis */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    {dictionary.locations?.florianopolis}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {dictionary.contact?.businessHours}
                      </h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {dictionary.contact?.response}
                      </h4>
                      <p className="text-gray-600">
                        Resposta em até 2 horas úteis
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {dictionary.contact?.emergency}
                      </h4>
                      <p className="text-gray-600">
                        Atendimento de urgência disponível
                      </p>
                    </div>
                  </div>
                </div>

                {/* Joinville */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    {dictionary.locations?.joinville}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {dictionary.contact?.businessHours}
                      </h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {dictionary.locations?.remote}
                      </h4>
                      <p className="text-gray-600">
                        Videoconferência disponível
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {dictionary.locations?.inPerson}
                      </h4>
                      <p className="text-gray-600">
                        Reuniões presenciais mediante agendamento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Canais de Contato */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-gray-900">
                {dictionary.contact?.channels || 'Canais de Contato'}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">
                    {dictionary.contact?.response}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ideal para consultas rápidas
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">E-mail</h3>
                  <p className="text-gray-600 mb-4">
                    {dictionary.contact?.professional}
                  </p>
                  <p className="text-sm text-gray-500">
                    Para consultas detalhadas
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Telefone</h3>
                  <p className="text-gray-600 mb-4">
                    {dictionary.contact?.consultation}
                  </p>
                  <p className="text-sm text-gray-500">
                    Agendamento de reuniões
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
 * Página de Contato da aplicação
 *
 * Renderiza página dedicada ao contato, incluindo informações detalhadas,
 * formulário, horários de atendimento e canais de comunicação.
 *
 * @example
 * ```tsx
 * // Renderizada automaticamente para:
 * // /pt-br/contato, /en/contato, /es/contato, /de/contato
 * ```
 */
export default function ContactPage({ params }: ContactPageProps) {
  const { locale } = params

  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPageContent locale={locale} />
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
