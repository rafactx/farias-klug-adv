'use client'

import { Locale } from '@/types/globals'

// Componentes de layout
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/footer'

// Componentes de seções
// import { About } from '@/components/sections/about'
import { Areas } from '@/components/sections/areas'
import { Contact } from '@/components/sections/contact'
import Hero from '@/components/sections/hero/Hero'

interface HomeClientContentProps {
  locale: Locale
  dictionary: any
}

/**
 * Cliente Content Component para Home Page
 *
 * Este componente é marcado como 'use client' para permitir
 * event handlers e interações do usuário.
 */
export default function HomeClientContent({ locale, dictionary }: HomeClientContentProps) {
  // Handler para analytics (pode ser expandido conforme necessário)
  const handleAnalytics = (event: string, data?: Record<string, any>) => {
    // Analytics tracking será implementado aqui
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        ...data,
        page_location: window.location.href,
        locale,
        page_type: 'home'
      })
    }
  }

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white" id="sobre">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Sobre Nós
              </h2>
              <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
                Excelência em Direito Ambiental
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Somos um escritório de advocacia especializado em direito ambiental, oferecendo soluções jurídicas completas e estratégicas para empresas e pessoas físicas em Santa Catarina.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Anos de Experiência</h4>
                <p className="text-sm text-gray-600">Atuando no mercado</p>
              </div>

              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Casos de Sucesso</h4>
                <p className="text-sm text-gray-600">Resultados positivos</p>
              </div>

              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Clientes Atendidos</h4>
                <p className="text-sm text-gray-600">Empresas e pessoas físicas</p>
              </div>

              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Cidades Atendidas</h4>
                <p className="text-sm text-gray-600">Em Santa Catarina</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <Areas
          locale={locale}
          featuredOnly={true}
          maxItems={6}
          showControls={false}
          title={dictionary.areas?.title || "Áreas de Atuação"}
          description={dictionary.areas?.subtitle || "Nossas especialidades jurídicas"}
          onAreaClick={(areaId) => handleAnalytics('area_click', { areaId })}
        />

        {/* Contact Section */}
        <Contact
          dictionary={dictionary}
          locale={locale}
          variant="default"
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
