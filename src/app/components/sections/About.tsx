import {
  BuildingOfficeIcon,
  DocumentCheckIcon,
  GlobeAmericasIcon,
  HandRaisedIcon,
  ScaleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const mainServices = [
  {
    name: 'Licenciamento Ambiental',
    description: 'Acompanhamento técnico completo em todas as fases do processo de licenciamento ambiental.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Defesa Jurídica',
    description: 'Defesas e recursos contra autos de infração ambiental, com atuação estratégica no contencioso.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Consultoria Preventiva',
    description: 'Assessoria jurídica para empresas e consultorias ambientais, garantindo conformidade legal.',
    icon: ScaleIcon,
  },
]

const sectors = [
  'Construção Civil',
  'Empreendimentos Imobiliários',
  'Postos de Combustíveis',
  'Mineração',
  'Indústrias',
  'Marmorarias',
  'Marinas',
  'Terminais Retroportuários',
  'Cooperativas de Reciclagem',
  'Coleta de Resíduos'
]

const values = [
  {
    title: 'Missão',
    description: 'Promover segurança jurídica e sustentabilidade a empresas e empreendedores por meio de soluções jurídicas personalizadas, com visão estratégica e responsabilidade ambiental.',
    icon: GlobeAmericasIcon
  },
  {
    title: 'Visão',
    description: 'Ser referência em Direito Ambiental e Empresarial, contribuindo para a construção de negócios éticos, legais e ambientalmente responsáveis.',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Valores',
    description: 'Ética, clareza, proximidade com o cliente e compromisso com a legalidade e o meio ambiente.',
    icon: HandRaisedIcon
  }
]

export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231E2B1A' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="text-base font-semibold text-[#8E4616] mb-2">Sobre</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2B1A] mb-6">
            Comprometimento Jurídico com o Desenvolvimento Sustentável
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Text Content */}
          <div className="lg:pr-8">
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">
                Atuo como advogado especializado em <strong className="text-[#8E4616]">Direito Ambiental</strong>, com ampla experiência em assessorar empresas, empreendedores e consultorias que buscam crescer com segurança jurídica, responsabilidade socioambiental e conformidade legal.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Minha atuação é focada em licenciamento ambiental, defesas administrativas e judiciais, consultoria jurídica ambiental, regularização fundiária e análise de viabilidade legal de empreendimentos.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Com frequência, clientes que inicialmente me procuram por questões ambientais estendem a parceria para assessoria em <strong className="text-[#8E4616]">Direito Empresarial</strong>, aproveitando nossa visão jurídica integrada.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contato"
                className="inline-block px-8 py-4 text-base font-semibold text-white bg-[#8E4616] hover:bg-[#6B3410] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8E4616]/20 to-[#1E2B1A]/20 blur-2xl" />
            <img
              alt="Augusto Klug Farias - Advogado"
              src="/images/guto-hero.jpg"
              className="relative w-full rounded-none shadow-2xl"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2B1A] text-center mb-10">
            Principais Serviços
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service) => (
              <div
                key={service.name}
                className="group bg-gray-50 p-6 lg:p-8 hover:bg-[#CEBAA3]/20 transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                <service.icon className="h-10 w-10 text-[#8E4616] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-[#1E2B1A] mb-2">{service.name}</h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Section */}
        <div className="mb-16 lg:mb-20 bg-[#1E2B1A] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Setores Atendidos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 text-center text-sm font-medium text-white hover:bg-white/20 transition-all"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-[#8E4616]/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-[#8E4616]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2B1A] mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#CEBAA3] to-[#B89B84] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2B1A] mb-4">
            Pronto para desenvolver seu projeto com segurança jurídica?
          </h3>
          <p className="text-lg text-[#1E2B1A]/80 mb-8 max-w-2xl mx-auto">
            Meu compromisso é atuar de forma técnica, clara e estratégica, entregando soluções jurídicas sob medida.
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-4 text-base lg:text-lg font-semibold text-white bg-[#1E2B1A] hover:bg-[#0F1A0D] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
