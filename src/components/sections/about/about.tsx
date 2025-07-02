'use client'

import {
  BuildingOfficeIcon,
  DocumentCheckIcon,
  GlobeAmericasIcon,
  HandRaisedIcon,
  ScaleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

/* ──────────────── Types & Interfaces ──────────────── */
interface ServiceItem {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface ValueItem {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface AnimationConfig {
  duration: number
  stagger: number
  viewport: {
    once: boolean
    margin?: string
  }
}

/* ──────────────── Constants & Configuration ──────────────── */
const ANIMATION_CONFIG: AnimationConfig = {
  duration: 0.6,
  stagger: 0.2,
  viewport: {
    once: true,
    margin: '-100px'
  }
} as const

const MAIN_SERVICES: ServiceItem[] = [
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
] as const

const COMPANY_VALUES: ValueItem[] = [
  {
    title: 'Missão',
    description: 'Promover segurança jurídica e sustentabilidade a empresas e empreendedores por meio de soluções jurídicas personalizadas, com visão estratégica e responsabilidade ambiental.',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Visão',
    description: 'Ser referência em Direito Ambiental e Empresarial, contribuindo para a construção de negócios éticos, legais e ambientalmente responsáveis.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Valores',
    description: 'Ética, clareza, proximidade com o cliente e compromisso com a legalidade e o meio ambiente.',
    icon: HandRaisedIcon,
  },
] as const

const CSS_CLASSES = {
  section: "relative bg-gradient-to-br from-white to-gray-100 py-24 px-6 lg:px-12 overflow-hidden",
  container: "relative max-w-7xl mx-auto",
  backgroundPattern: "absolute inset-0 opacity-10 pointer-events-none",
  button: {
    primary: "inline-block mt-4 px-6 py-3 text-white bg-[#8E4616] hover:bg-[#6B3410] transition shadow-md hover:shadow-lg rounded-none"
  },
  card: {
    service: "group bg-white p-6 hover:bg-[#CEBAA3]/20 transition shadow-sm hover:shadow-lg rounded-none",
    value: "text-center"
  }
} as const

const CONTENT = {
  header: {
    subtitle: "Sobre",
    title: "Comprometimento Jurídico com o Desenvolvimento Sustentável"
  },
  intro: {
    paragraphs: [
      'Atuo como advogado especializado em <strong className="text-[#8E4616]">Direito Ambiental</strong>, com ampla experiência em assessorar empresas, empreendedores e consultorias que buscam crescer com segurança jurídica, responsabilidade socioambiental e conformidade legal.',
      'Minha atuação é focada em licenciamento ambiental, defesas administrativas e judiciais, consultoria jurídica ambiental, regularização fundiária e análise de viabilidade legal de empreendimentos.',
      'Frequentemente, clientes que inicialmente me procuram por questões ambientais estendem a parceria para assessoria em <strong className="text-[#8E4616]">Direito Empresarial</strong>, aproveitando nossa visão jurídica integrada.'
    ]
  },
  image: {
    src: "/images/guto-hero.jpg",
    alt: "Augusto Klug Farias - Advogado"
  }
} as const

/* ──────────────── Animation Variants ──────────────── */
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: ANIMATION_CONFIG.duration }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: ANIMATION_CONFIG.duration }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger
    }
  }
}

/* ──────────────── Sub-components ──────────────── */
/**
 * Componente do padrão de fundo
 */
const BackgroundPattern = () => (
  <div className={CSS_CLASSES.backgroundPattern}>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E2B1A' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
)

/**
 * Componente do cabeçalho da seção
 */
const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <motion.p
      className="text-sm font-semibold text-[#8E4616] uppercase tracking-wide mb-2"
      {...fadeInUp}
    >
      {CONTENT.header.subtitle}
    </motion.p>
    <motion.h2
      className="text-4xl sm:text-5xl font-bold text-[#1E2B1A] leading-tight"
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.1 }}
    >
      {CONTENT.header.title}
    </motion.h2>
  </div>
)

/**
 * Componente do texto introdutório
 */
const IntroText = () => (
  <motion.div
    {...fadeInUp}
    viewport={ANIMATION_CONFIG.viewport}
    className="space-y-6 text-[#1E2B1A]/90 text-lg"
  >
    {CONTENT.intro.paragraphs.map((paragraph, index) => (
      <motion.p
        key={index}
        dangerouslySetInnerHTML={{ __html: paragraph }}
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
      />
    ))}

    <motion.a
      href="#contato"
      className={CSS_CLASSES.button.primary}
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Conhecer serviços jurídicos"
    >
      Conheça Nossos Serviços
    </motion.a>
  </motion.div>
)

/**
 * Componente da imagem do advogado
 */
const LawyerImage = () => (
  <div className="relative">
    <div className="absolute -inset-4 bg-gradient-to-r from-[#8E4616]/20 to-[#1E2B1A]/20 blur-2xl" />
    <motion.img
      src={CONTENT.image.src}
      alt={CONTENT.image.alt}
      className="relative w-full shadow-2xl rounded-none"
      {...scaleIn}
      viewport={ANIMATION_CONFIG.viewport}
    />
  </div>
)

/**
 * Componente da seção intro + imagem
 */
const IntroSection = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
    <IntroText />
    <LawyerImage />
  </div>
)

/**
 * Card individual de serviço
 */
const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  const { name, description, icon: Icon } = service

  return (
    <motion.div
      className={CSS_CLASSES.card.service}
      {...fadeInUp}
      viewport={ANIMATION_CONFIG.viewport}
      transition={{ ...fadeInUp.transition, delay: index * ANIMATION_CONFIG.stagger }}
      whileHover={{ y: -5 }}
    >
      <Icon className="h-10 w-10 text-[#8E4616] mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="text-lg font-semibold text-[#1E2B1A] mb-2">{name}</h4>
      <p className="text-[#1E2B1A]/80 leading-relaxed">{description}</p>
    </motion.div>
  )
}

/**
 * Seção de principais serviços
 */
const ServicesSection = () => (
  <div className="mb-24">
    <motion.h3
      className="text-3xl font-bold text-center text-[#1E2B1A] mb-12"
      {...fadeInUp}
      viewport={ANIMATION_CONFIG.viewport}
    >
      Principais Serviços
    </motion.h3>
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={ANIMATION_CONFIG.viewport}
    >
      {MAIN_SERVICES.map((service, index) => (
        <ServiceCard key={service.name} service={service} index={index} />
      ))}
    </motion.div>
  </div>
)

/**
 * Card individual de valor da empresa
 */
const ValueCard = ({ value, index }: { value: ValueItem; index: number }) => {
  const { title, description, icon: Icon } = value

  return (
    <motion.div
      className={CSS_CLASSES.card.value}
      {...scaleIn}
      viewport={ANIMATION_CONFIG.viewport}
      transition={{ ...scaleIn.transition, delay: index * ANIMATION_CONFIG.stagger }}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-[#8E4616]/10 flex items-center justify-center rounded-none">
        <Icon className="h-8 w-8 text-[#8E4616]" />
      </div>
      <h4 className="text-xl font-bold text-[#1E2B1A] mb-2">{title}</h4>
      <p className="text-[#1E2B1A]/80 leading-relaxed">{description}</p>
    </motion.div>
  )
}

/**
 * Seção de valores da empresa
 */
const ValuesSection = () => (
  <div className="mb-24">
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={ANIMATION_CONFIG.viewport}
    >
      {COMPANY_VALUES.map((value, index) => (
        <ValueCard key={value.title} value={value} index={index} />
      ))}
    </motion.div>
  </div>
)

/* ──────────────── Main Component ──────────────── */
/**
 * Componente About principal
 * Seção responsável por apresentar informações sobre o escritório,
 * seus valores, missão e principais serviços oferecidos
 */
export default function About() {
  return (
    <section id="sobre" className={CSS_CLASSES.section}>
      <BackgroundPattern />

      <div className={CSS_CLASSES.container}>
        <SectionHeader />
        <IntroSection />
        <ServicesSection />
        <ValuesSection />
      </div>
    </section>
  )
}
