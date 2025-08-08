'use client';

import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import { Button, Card, CardContent, CardDescription, CardTitle, Container, FAQ, Heading, Paragraph } from '@/components/ui';
import { BackgroundPattern, ScrollProgress, VisualEnhancements } from '@/components/VisualEnhancements';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
      {/* Global Visual Enhancements */}
      <VisualEnhancements />
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section - Enhanced Visual Identity */}
        <section
          id="home"
          className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--color-neutral-50) 0%, var(--color-neutral-100) 100%)' }}
        >
          <BackgroundPattern pattern="geometric" opacity={0.05} />

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

        {/* About Section - Dados Oficiais Farias Klug */}
        <section id="about" className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
          <Container size="default" padding="lg">
            <div className="text-center mb-16">
              <Heading level={2} className="mb-6">
                Conheça nossa história e expertise
              </Heading>
              <Heading level={3} color="secondary" className="mb-8 font-austera-medium">
                Segurança jurídica com responsabilidade ambiental
              </Heading>
              <Paragraph size="lg" className="leading-relaxed max-w-4xl mx-auto">
                Somos um escritório de advocacia especializado em direito ambiental, oferecendo soluções jurídicas completas e estratégicas para empresas e particulares em Santa Catarina. Com anos de experiência, atendemos desde Empresas de Grande Porte até empreendimentos familiares, assim como Empresas de Consultoria Ambiental e de Engenharia Civil, sempre com o compromisso de encontrar soluções eficientes e sustentáveis para cada caso.
              </Paragraph>
            </div>

            {/* Serviços Principais */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card variant="paper" padding="lg" className="text-center transform hover:scale-105 transition-transform duration-300">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--color-primary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <CardTitle className="mb-3 text-lg">
                    Assessoria para Licenciamento Ambiental
                  </CardTitle>
                  <CardDescription className="text-base">
                    Acompanhamento técnico-jurídico em todas as fases do processo de licenciamento ambiental.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card variant="paper" padding="lg" className="text-center transform hover:scale-105 transition-transform duration-300">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-secondary-100)] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--color-secondary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <CardTitle className="mb-3 text-lg">
                    Defesa Jurídica
                  </CardTitle>
                  <CardDescription className="text-base">
                    Defesas e recursos contra autos de infração ambiental e em processos judiciais, com atuação estratégica.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card variant="paper" padding="lg" className="text-center transform hover:scale-105 transition-transform duration-300">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-neutral-200)] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--color-primary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <CardTitle className="mb-3 text-lg">
                    Consultoria Preventiva
                  </CardTitle>
                  <CardDescription className="text-base">
                    Assessoria para empresas, particulares e consultorias ambientais, conferindo segurança jurídica para casos específicos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Missão, Visão, Valores */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[var(--color-primary-500)] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <Heading level={4} className="mb-3 text-[var(--color-primary-500)]">Missão</Heading>
                <Paragraph className="text-sm leading-relaxed">
                  Oferecer segurança jurídica no processo de tomada de decisão para empresas e empreendedores por meio de soluções jurídicas personalizadas, com visão estratégica e responsabilidade ambiental.
                </Paragraph>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[var(--color-secondary-500)] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <Heading level={4} className="mb-3 text-[var(--color-secondary-500)]">Visão</Heading>
                <Paragraph className="text-sm leading-relaxed">
                  Ser referência em Direito Ambiental e Empresarial, contribuindo para a construção de negócios éticos, legais e ambientalmente responsáveis.
                </Paragraph>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[var(--color-neutral-600)] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <Heading level={4} className="mb-3 text-[var(--color-neutral-700)]">Valores</Heading>
                <Paragraph className="text-sm leading-relaxed">
                  Segurança, Tranquilidade, Sabedoria, Inovação, e Preocupação e compromisso com a legalidade e o meio ambiente.
                </Paragraph>
              </div>
            </div>

            {/* CTA Estratégico - Sobre */}
            <div className="text-center mt-12">
              <Heading level={4} className="mb-4 text-[var(--color-primary-500)]">
                Precisa de assessoria jurídica especializada?
              </Heading>
              <div className="flex gap-4 justify-center flex-col sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  Falar com Especialista
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5547999999999?text=Olá! Gostaria de conhecer melhor os serviços da Farias Klug Advocacia.', '_blank')}
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  WhatsApp Direto
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Áreas Jurídicas - 4 Especialidades Oficiais */}
        <section id="services" className="py-20">
          <Container size="default" padding="lg">
            <div className="text-center mb-16">
              <Heading level={2} className="mb-6">
                Áreas de Atuação
              </Heading>
              <Paragraph size="lg" color="muted" className="max-w-3xl mx-auto">
                Especialização completa em Direito Ambiental e Empresarial para empresas e particulares em Santa Catarina
              </Paragraph>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 1. Defesas e Recursos Ambientais */}
              <Card variant="paper" padding="lg" className="hover-lift group fade-in-viewport">
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center group-hover:bg-[var(--color-primary-500)] transition-colors duration-300">
                      <svg className="w-8 h-8 text-[var(--color-primary-500)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-3 text-[var(--color-primary-500)]">
                        Defesas e Recursos Ambientais
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        Representação técnica e jurídica em autos de infração, embargos, sanções administrativas ou judiciais ambientais. Atuação completa em contencioso administrativo e judicial.
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Defesa para Autos de Infração Ambiental
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Recursos IBAMA, ICMBio, órgãos estaduais
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Negociação de TAC
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Licenciamento e Regularização */}
              <Card variant="paper" padding="lg" className="hover-lift group fade-in-viewport">
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center group-hover:bg-[var(--color-secondary-500)] transition-colors duration-300">
                      <svg className="w-8 h-8 text-[var(--color-secondary-500)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-3 text-[var(--color-secondary-500)]">
                        Licenciamento e Regularização
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        Suporte jurídico completo em processos de licenciamento ambiental, autorizações e regularizações de atividades junto a órgãos públicos.
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Licenciamento LP, LI, LO
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          CAR e Reserva Legal
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Regularização rural/urbana
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Consultoria Jurídica Ambiental */}
              <Card variant="paper" padding="lg" className="hover-lift group fade-in-viewport">
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center group-hover:bg-[var(--color-primary-500)] transition-colors duration-300">
                      <svg className="w-8 h-8 text-[var(--color-primary-500)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-3 text-[var(--color-primary-500)]">
                        Consultoria Jurídica Ambiental
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        Análise preventiva e estratégica para empreendimentos que desejam implantar ou crescer com segurança jurídica ambiental.
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Due diligence ambiental
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          EIA/RIMA, RCA/PCA
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Compliance ambiental
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Direito Empresarial */}
              <Card variant="paper" padding="lg" className="hover-lift group fade-in-viewport">
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center group-hover:bg-[var(--color-secondary-500)] transition-colors duration-300">
                      <svg className="w-8 h-8 text-[var(--color-secondary-500)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-3 text-[var(--color-secondary-500)]">
                        Direito Empresarial
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        Atendimento jurídico complementar para empresas que buscam segurança em negociações e contratos.
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Contratos empresariais
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Estruturação societária
                        </div>
                        <div className="flex items-center text-sm text-[var(--color-muted-foreground)]">
                          <svg className="w-4 h-4 mr-2 text-[var(--color-secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Governança corporativa
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Estratégico - Áreas Jurídicas */}
            <div className="text-center mt-16">
              <Card variant="paper" padding="lg" className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border-[var(--color-primary-200)]">
                <CardContent>
                  <Heading level={4} className="mb-4 text-[var(--color-primary-600)]">
                    Sua situação jurídica precisa de atenção especializada?
                  </Heading>
                  <Paragraph className="mb-6 text-[var(--color-primary-700)]">
                    Nossa equipe oferece consultoria personalizada em todas as áreas apresentadas. Agende uma conversa para discutir seu caso específico.
                  </Paragraph>
                  <div className="flex gap-4 justify-center flex-col sm:flex-row">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="transform hover:scale-105 transition-transform duration-200"
                    >
                      Agendar Consulta
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                      className="transform hover:scale-105 transition-transform duration-200"
                    >
                      Ver Perguntas Frequentes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQ Section - 5 Categorias Oficiais */}
        <section id="faq" className="py-20" style={{ backgroundColor: 'var(--color-muted)' }}>
          <Container size="default" padding="lg">
            <div className="text-center mb-16">
              <Heading level={2} className="mb-6">
                Perguntas Frequentes
              </Heading>
              <Paragraph size="lg" color="muted" className="max-w-3xl mx-auto">
                Respostas para as dúvidas mais comuns sobre nossos serviços jurídicos especializados
              </Paragraph>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQ
                categories={[
                  {
                    category: "Defesas e Recursos Ambientais",
                    questions: [
                      {
                        question: "Recebi um auto de infração ambiental. O que devo fazer?",
                        answer: "Se você recebeu uma notificação de infração ambiental, o ideal é procurar um advogado especializado antes de responder ou assinar qualquer documento. É importante apresentar uma defesa técnica e juridicamente bem fundamentada, com vistas a evitar penalidades maiores, embargos ou a evolução para um processo que responsabilize civil ou criminalmente, além da responsabilidade administrativa em corrigir ou fazer cessar o dano ambiental percebido."
                      },
                      {
                        question: "Posso recorrer de uma multa aplicada por órgão ambiental como o IBAMA ou a Polícia Ambiental?",
                        answer: "Sim. É possível apresentar defesa administrativa e, em alguns casos, levar a discussão ao Judiciário. Cada situação deve ser analisada conforme os autos, a legislação aplicável e as provas disponíveis. A assessoria jurídica garante que a multa em questão seja revisada ou discutida nos termos da legislação aplicável."
                      }
                    ]
                  },
                  {
                    category: "Consultoria Jurídica Ambiental",
                    questions: [
                      {
                        question: "Minha empresa precisa de um parecer jurídico antes de realizar obras. Vocês fazem isso?",
                        answer: "Sim. Atuamos com análises jurídicas preventivas para avaliar a viabilidade legal de empreendimentos, levando em conta as regras aplicáveis aos licenciamentos ambientais, áreas protegidas, zoneamento, legislação local e riscos ambientais."
                      },
                      {
                        question: "Vocês atendem consultorias ambientais e engenheiros?",
                        answer: "Sim. Há 6 anos prestamos suporte jurídico a consultores, engenheiros e equipes técnicas para alinhar os estudos ambientais com as exigências legais, assessorando na elaboração de estudos ambientais ou na atuação junto a órgãos competentes."
                      }
                    ]
                  },
                  {
                    category: "Licenciamento e Regularização",
                    questions: [
                      {
                        question: "Quais tipos de licenciamento ambiental vocês acompanham?",
                        answer: "A assessoria jurídica ambiental se destina a todas as atividades passíveis de licenciamento ambiental de acordo com as resoluções estaduais e municipais que determinam a qual órgão deverá ser submetida a análise do licenciamento em questão, bem como situações envolvendo processos de regularização fundiária, obtenção de alvarás e supressão de vegetação."
                      },
                      {
                        question: "Tenho uma propriedade rural/urbana que precisa ser regularizada. Como funciona?",
                        answer: "A situação documental e ambiental da propriedade deve ser analisada, com vistas a obter a melhor orientação jurídica sobre os passos necessários para legalização, incluindo áreas de preservação, reserva legal, registro imobiliário, entre outros."
                      }
                    ]
                  },
                  {
                    category: "Direito Empresarial",
                    questions: [
                      {
                        question: "Além da área ambiental, vocês ajudam com contratos empresariais?",
                        answer: "A Farias Klug presta assessoria jurídica contratual, abrangendo desde a elaboração de contratos de compra e venda, prestação de serviços, notificações extrajudiciais, até a assessoria para resolução de impasses contratuais ou negociações entre empresas ou particulares."
                      }
                    ]
                  },
                  {
                    category: "Atendimento a Estrangeiros",
                    questions: [
                      {
                        question: "Sou estrangeiro e quero comprar um imóvel no Brasil. Vocês auxiliam nesse processo?",
                        answer: "Sim. Com fluência nas línguas inglês e alemão, a Farias Klug oferece assessoria jurídica personalizada para estrangeiros interessados em adquirir imóveis no Brasil, com orientação completa sobre documentação, registro e conformidade legal, incluindo a assessoria nas negociações, de maneira a garantir confiabilidade ao negócio jurídico."
                      }
                    ]
                  }
                ]}
              />
            </div>

            {/* Observação Final */}
            <div className="mt-16 max-w-3xl mx-auto">
              <Card variant="paper" padding="lg" className="bg-[var(--color-primary-50)] border-[var(--color-primary-200)]">
                <CardContent>
                  <Paragraph className="text-center text-[var(--color-primary-700)] leading-relaxed">
                    <strong>Importante:</strong> A Farias Klug oferece soluções para todas as áreas apontadas acima, para que a tomada de decisão seja realizada com segurança jurídica. Antes de dar seguimento em processos administrativos ambientais, tanto para defesas em infrações ambientais quanto para assessoria na obtenção da documentação objetivada, consulte um advogado de sua confiança.
                  </Paragraph>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Team Section - Augusto Farias Klug */}
        <section id="team" className="py-20">
          <Container size="default" padding="lg">
            <div className="text-center mb-16">
              <Heading level={2} className="mb-6">
                Nossa Equipe
              </Heading>
              <Paragraph size="lg" color="muted" className="max-w-3xl mx-auto">
                Profissionais especializados com foco na excelência e resultados eficazes
              </Paragraph>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card variant="paper" padding="xl" className="hover-lift fade-in-viewport">
                <CardContent>
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* Avatar/Photo Placeholder */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-secondary-500)] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-austera-bold text-white">AFK</span>
                      </div>
                    </div>

                    {/* Informações Profissionais */}
                    <div className="flex-1 text-center md:text-left">
                      <Heading level={3} className="mb-2 text-[var(--color-primary-500)]">
                        Augusto Farias Klug
                      </Heading>
                      <Paragraph className="text-[var(--color-secondary-500)] font-austera-medium mb-2">
                        Advogado Sócio-Fundador
                      </Paragraph>
                      <Paragraph className="text-sm text-[var(--color-muted-foreground)] mb-4">
                        OAB/SC 51.807 | Formado UNIVILLE (2018) | Estudos em Coimbra, Portugal
                      </Paragraph>

                      <Paragraph className="leading-relaxed mb-6">
                        Augusto Farias Klug é advogado sócio-fundador da Farias Klug Advocacia. Formado pela Univille em 2018, teve a oportunidade de trabalhar e aprender em diversos locais, bem como estudar na Universidade de Direito de Coimbra (2014), em Portugal, onde pode estudar as matérias de Inglês Jurídico e Introdução ao Pensamento Jurídico Contemporâneo. No escritório, dedica-se à atuação nas áreas do Direito Ambiental e Direito Empresarial.
                      </Paragraph>

                      {/* Especialidades */}
                      <div className="mb-6">
                        <Heading level={5} className="mb-3 text-[var(--color-primary-500)]">Especialidades</Heading>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {['Direito Ambiental', 'Direito Empresarial', 'Defesas e Recursos', 'Licenciamento Ambiental', 'Consultoria Jurídica', 'Contratos Empresariais'].map((specialty) => (
                            <span
                              key={specialty}
                              className="px-3 py-1 bg-[var(--color-primary-100)] text-[var(--color-primary-500)] rounded-full text-sm font-austera-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Idiomas */}
                      <div className="mb-6">
                        <Heading level={5} className="mb-3 text-[var(--color-secondary-500)]">Idiomas</Heading>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                          <div className="bg-[var(--color-neutral-100)] rounded-lg p-2">
                            <Paragraph className="text-sm font-austera-medium">🇧🇷 Português</Paragraph>
                            <Paragraph className="text-xs text-[var(--color-muted-foreground)]">Nativo</Paragraph>
                          </div>
                          <div className="bg-[var(--color-neutral-100)] rounded-lg p-2">
                            <Paragraph className="text-sm font-austera-medium">🇺🇸 Inglês</Paragraph>
                            <Paragraph className="text-xs text-[var(--color-muted-foreground)]">Avançado Jurídico</Paragraph>
                          </div>
                          <div className="bg-[var(--color-neutral-100)] rounded-lg p-2">
                            <Paragraph className="text-sm font-austera-medium">🇩🇪 Alemão</Paragraph>
                            <Paragraph className="text-xs text-[var(--color-muted-foreground)]">Intermediário</Paragraph>
                          </div>
                          <div className="bg-[var(--color-neutral-100)] rounded-lg p-2">
                            <Paragraph className="text-sm font-austera-medium">🇪🇸 Espanhol</Paragraph>
                            <Paragraph className="text-xs text-[var(--color-muted-foreground)]">Básico</Paragraph>
                          </div>
                        </div>
                      </div>

                      {/* Conquistas */}
                      <div>
                        <Heading level={5} className="mb-3 text-[var(--color-neutral-700)]">Principais Conquistas</Heading>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Fundação da Farias Klug Advocacia (2019)</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Estudos internacionais - Universidade de Coimbra, Portugal</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Membro do Núcleo Jurídico da ACIJ (2023/2024)</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Membro Julgador do COMDEMA Joinville/SC</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Experiência em Consultoria Ambiental (AMBIENT 2018-2021)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Estratégico - Augusto */}
            <div className="text-center mt-16">
              <Card variant="paper" padding="lg" className="max-w-3xl mx-auto bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-primary-50)] border-[var(--color-secondary-200)]">
                <CardContent>
                  <Heading level={4} className="mb-4 text-[var(--color-secondary-600)]">
                    Quer falar diretamente com o Dr. Augusto Farias Klug?
                  </Heading>
                  <Paragraph className="mb-6 text-[var(--color-secondary-700)]">
                    Formação internacional, experiência em 4 idiomas e especialização em Direito Ambiental e Empresarial. Entre em contato para uma orientação personalizada.
                  </Paragraph>
                  <div className="flex gap-4 justify-center flex-col sm:flex-row">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="transform hover:scale-105 transition-transform duration-200"
                    >
                      Falar com Dr. Augusto
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.open('https://wa.me/5547999999999?text=Olá Dr. Augusto! Gostaria de agendar uma consulta jurídica.', '_blank')}
                      className="transform hover:scale-105 transition-transform duration-200"
                    >
                      WhatsApp Direto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Contact Section - Formulário Profissional */}
        <section id="contact" className="py-20" style={{ backgroundColor: 'var(--color-primary-500)' }}>
          <Container size="default" padding="lg">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-6 text-white">
                Fale com Nossos Especialistas
              </Heading>
              <Paragraph size="lg" className="text-[var(--color-primary-100)] mb-8 max-w-3xl mx-auto">
                Precisa de assessoria jurídica especializada? Nossa equipe está pronta para oferecer soluções personalizadas para seu caso.
              </Paragraph>

              {/* Informações de Contato */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Heading level={4} className="text-white mb-2">E-mail</Heading>
                  <Paragraph className="text-[var(--color-primary-100)]">contato@fariasklug.com.br</Paragraph>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <Heading level={4} className="text-white mb-2">Telefone</Heading>
                  <Paragraph className="text-[var(--color-primary-100)]">(47) 99999-9999</Paragraph>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <Heading level={4} className="text-white mb-2">Atendimento</Heading>
                  <Paragraph className="text-[var(--color-primary-100)]">Florianópolis e Joinville, SC</Paragraph>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-neutral-900)' }} className="py-12">
        <Container size="default" padding="lg">
          <div className="text-center">
            <Paragraph color="white" className="opacity-80">
              &copy; 2024 Farias Klug Advocacia. {tCommon('footer.all_rights_reserved')}
            </Paragraph>
          </div>
        </Container>
      </footer>

      {/* WhatsApp Fixed Button */}
      <WhatsAppButton />
    </div>
  );
}
