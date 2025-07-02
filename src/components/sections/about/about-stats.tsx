'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

/* ──────────────── Types & Interfaces ──────────────── */
interface StatItem {
  id: string
  value: number
  suffix: string
  label: string
  description: string
  color: 'primary' | 'secondary'
}

interface AnimationConfig {
  duration: number
  delay: number
  viewport: {
    once: boolean
    margin: string
  }
}

interface CounterProps {
  value: number
  suffix: string
  duration?: number
}

/* ──────────────── Constants & Configuration ──────────────── */
const ANIMATION_CONFIG: AnimationConfig = {
  duration: 2.5,
  delay: 0.5,
  viewport: {
    once: true,
    margin: '-100px'
  }
} as const

const STATS_DATA: StatItem[] = [
  {
    id: 'experience',
    value: 8,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Atuação especializada em Direito Ambiental e Empresarial',
    color: 'primary'
  },
  {
    id: 'cases',
    value: 150,
    suffix: '+',
    label: 'Casos Resolvidos',
    description: 'Licenciamentos, defesas e consultorias bem-sucedidas',
    color: 'secondary'
  },
  {
    id: 'clients',
    value: 80,
    suffix: '+',
    label: 'Clientes Atendidos',
    description: 'Empresas e empreendedores de diversos setores',
    color: 'primary'
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Satisfação',
    description: 'Índice de aprovação e recomendação dos clientes',
    color: 'secondary'
  },
] as const

const CSS_CLASSES = {
  section: "relative bg-gradient-to-br from-[#1E2B1A] via-[#1E2B1A] to-[#2A3B26] py-20 px-6 lg:px-12 overflow-hidden",
  container: "relative max-w-6xl mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  card: {
    base: "group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 rounded-none",
    content: "relative z-10 text-center"
  },
  counter: {
    primary: "text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#CEBAA3] to-[#F4E6D7] bg-clip-text text-transparent",
    secondary: "text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8E4616] to-[#B8631F] bg-clip-text text-transparent"
  },
  label: "text-lg font-semibold text-white/90 mt-4 mb-2",
  description: "text-sm text-white/70 leading-relaxed"
} as const

/* ──────────────── Custom Hooks ──────────────── */
/**
 * Hook para animação de contador numérico
 * @param targetValue - Valor final do contador
 * @param duration - Duração da animação em segundos
 * @returns Valor animado atual
 */
const useCounter = (targetValue: number, duration: number = 2): number => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0.2
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetValue)
    }
  }, [isInView, targetValue, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString()
      }
    })

    return unsubscribe
  }, [springValue])

  return Math.round(springValue.get())
}

/* ──────────────── Sub-components ──────────────── */
/**
 * Componente de contador animado
 */
const AnimatedCounter = ({ value, suffix, duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0.2
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString()
      }
    })
    return unsubscribe
  }, [springValue])

  return (
    <div className="flex items-center justify-center">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </div>
  )
}

/**
 * Card individual de estatística
 */
const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const { value, suffix, label, description, color } = stat
  const counterColorClass = CSS_CLASSES.counter[color]

  return (
    <motion.div
      className={CSS_CLASSES.card.base}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={ANIMATION_CONFIG.viewport}
      transition={{
        duration: ANIMATION_CONFIG.duration / 2,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12" />

      <div className={CSS_CLASSES.card.content}>
        <div className={counterColorClass}>
          <AnimatedCounter
            value={value}
            suffix={suffix}
            duration={ANIMATION_CONFIG.duration}
          />
        </div>

        <h3 className={CSS_CLASSES.label}>
          {label}
        </h3>

        <p className={CSS_CLASSES.description}>
          {description}
        </p>
      </div>

      {/* Borda animada */}
      <motion.div
        className="absolute inset-0 border border-transparent"
        whileHover={{
          borderColor: color === 'primary' ? '#CEBAA3' : '#8E4616',
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  )
}

/**
 * Título da seção de estatísticas
 */
const StatsHeader = () => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={ANIMATION_CONFIG.viewport}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
      Resultados que Falam por Si
    </h2>
    <p className="text-lg text-white/80 max-w-2xl mx-auto">
      Nossa experiência e dedicação refletem em números que demonstram
      nosso compromisso com a excelência jurídica
    </p>
  </motion.div>
)

/**
 * Elementos decorativos de fundo
 */
const BackgroundElements = () => (
  <>
    {/* Padrão geométrico */}
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    {/* Elementos de luz */}
    <motion.div
      className="absolute top-20 left-10 w-32 h-32 bg-[#8E4616]/20 blur-3xl rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-40 h-40 bg-[#CEBAA3]/15 blur-3xl rounded-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.15, 0.3, 0.15]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
)

/* ──────────────── Main Component ──────────────── */
/**
 * Componente AboutStats
 * Exibe estatísticas importantes do escritório de advocacia
 * com animações de contador e efeitos visuais elegantes
 */
export default function AboutStats() {
  return (
    <section className={CSS_CLASSES.section}>
      <BackgroundElements />

      <div className={CSS_CLASSES.container}>
        <StatsHeader />

        <div className={CSS_CLASSES.grid}>
          {STATS_DATA.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
