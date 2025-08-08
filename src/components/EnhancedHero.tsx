'use client';

import { Button, Container, Heading, Paragraph } from '@/components/ui';
import { useTranslations } from 'next-intl';

export default function EnhancedHero() {
  const t = useTranslations('home');

  return (
    <section
      id="home"
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--color-neutral-50) 0%, var(--color-neutral-100) 100%)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[var(--color-primary-500)] rounded-full animate-pulse-subtle"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-[var(--color-secondary-500)] rounded-lg rotate-45 animate-float animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-[var(--color-secondary-500)] rotate-12 animate-pulse-subtle animation-delay-400"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-[var(--color-primary-500)] rounded-full animate-float animation-delay-600"></div>
      </div>

      <Container size="default" padding="lg">
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            {/* Badge Superior */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-white rounded-full shadow-lg border border-[var(--color-primary-100)] animate-scale-in animation-delay-100">
              <div className="w-2 h-2 bg-[var(--color-primary-500)] rounded-full mr-2 animate-pulse"></div>
              <Paragraph size="sm" className="font-austera-medium text-[var(--color-primary-600)]">
                OAB/SC 51.807 • Especialistas em Direito Ambiental
              </Paragraph>
            </div>

            {/* Headline Principal */}
            <Heading
              level={1}
              className="mb-8 animate-fade-in-up animation-delay-200 text-gradient text-shadow-soft leading-tight"
            >
              Especialistas em Direito Ambiental e Empresarial
            </Heading>

            {/* Subheadline Aprimorada */}
            <Paragraph
              size="xl"
              className="mb-12 animate-fade-in-up animation-delay-300 leading-relaxed max-w-4xl mx-auto text-[var(--color-neutral-700)]"
            >
              Soluções jurídicas completas e estratégicas para empresas e particulares em Santa Catarina.
              <span className="font-austera-medium text-[var(--color-primary-600)]"> Segurança jurídica para seus negócios com responsabilidade ambiental.</span>
            </Paragraph>

            {/* CTAs com Efeitos */}
            <div className="flex gap-6 justify-center flex-col sm:flex-row animate-fade-in-up animation-delay-400 mb-16">
              <Button
                variant="primary"
                size="lg"
                className="hover-lift hover-glow font-austera-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-scale font-austera-medium"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Nossas Áreas de Atuação
              </Button>
            </div>

            {/* Trust Indicators Aprimorados */}
            <div className="animate-fade-in-up animation-delay-500">
              <Paragraph size="sm" color="muted" className="mb-6 uppercase tracking-wider font-austera-medium">
                Escritório de confiança há mais de 6 anos
              </Paragraph>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center hover-scale">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <Heading level={4} className="text-[var(--color-primary-600)] font-austera-bold mb-1">6+</Heading>
                  <Paragraph size="sm" color="muted" className="font-austera-medium">Anos de Experiência</Paragraph>
                </div>

                <div className="text-center hover-scale animation-delay-100">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-secondary-600)] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <Heading level={4} className="text-[var(--color-secondary-600)] font-austera-bold mb-1">100+</Heading>
                  <Paragraph size="sm" color="muted" className="font-austera-medium">Casos Atendidos</Paragraph>
                </div>

                <div className="text-center hover-scale animation-delay-200">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <Heading level={4} className="text-[var(--color-primary-600)] font-austera-bold mb-1">4.9★</Heading>
                  <Paragraph size="sm" color="muted" className="font-austera-medium">Avaliação Clientes</Paragraph>
                </div>
              </div>
            </div>

            {/* Credenciais Internacionais */}
            <div className="mt-12 animate-fade-in-up animation-delay-600">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--color-neutral-200)] shadow-sm">
                <svg className="w-5 h-5 mr-3 text-[var(--color-primary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <Paragraph size="sm" className="font-austera-medium text-[var(--color-neutral-700)]">
                  <span className="font-austera-semibold">Formação Internacional:</span> Universidade de Coimbra, Portugal •
                  <span className="font-austera-semibold ml-2">Idiomas:</span> PT, EN, DE, ES
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float animation-delay-800">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-[var(--color-neutral-500)] hover:text-[var(--color-primary-500)] transition-colors duration-300"
          aria-label="Scroll para próxima seção"
        >
          <Paragraph size="sm" className="mb-2 font-austera-medium">Role para baixo</Paragraph>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
