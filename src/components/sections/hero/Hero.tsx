'use client'

import { IconCalendar, IconChevronDown } from '@tabler/icons-react'
import { cubicBezier, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

/* ──────────────── Types & Constants ──────────────── */
interface MousePosition {
  x: number
  y: number
}

interface AnimationConfig {
  ease: [number, number, number, number]
  parallax: {
    scrollRange: [number, number]
    translateRange: [number, number]
  }
  mouse: {
    sensitivity: number
    spring: {
      damping: number
      stiffness: number
    }
  }
}

// Configurações centralizadas de animação
const ANIMATION_CONFIG: AnimationConfig = {
  ease: [0.43, 0.13, 0.23, 0.96],
  parallax: {
    scrollRange: [0, 500],
    translateRange: [0, -50]
  },
  mouse: {
    sensitivity: 50,
    spring: {
      damping: 30,
      stiffness: 200
    }
  }
} as const

// Delays escalonados para animações sequenciais
const ANIMATION_DELAYS = {
  logo: 0,
  headline: 0.3,
  firstLine: 0.5,
  secondLine: 0.7,
  subtitle: 0.9,
  cta: 1.1,
  scroll: 1.3
} as const

// Classes CSS reutilizáveis
const CSS_CLASSES = {
  button: {
    base: "group relative flex items-center justify-center gap-2 px-8 py-4 text-base font-medium transition-all duration-300 ease-out sm:w-auto lg:text-lg rounded-none",
    primary: "w-full text-white bg-[#8E4616]/90 border border-transparent shadow-lg hover:bg-[#1E2B1A] hover:border-[#8E4616] hover:shadow-[0_0_24px_#8E4616]/30",
    secondary: "w-full text-[#1E2B1A]/90 bg-white/90 ring-1 ring-[#1E2B1A]/10 shadow-lg hover:bg-[#1E2B1A] hover:text-white hover:ring-1 hover:ring-[#8E4616] hover:shadow-[0_0_24px_#8E4616]/30"
  },
  text: {
    headline: "mb-6 text-3xl font-semibold tracking-tight text-[#1E2B1A]/90 sm:text-4xl md:text-5xl xl:text-6xl",
    subtitle: "mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed tracking-wide text-[#1E2B1A]/70 sm:text-xl lg:text-2xl"
  }
} as const

/* ──────────────── Custom Hooks ──────────────── */
/**
 * Hook personalizado para tracking de posição do mouse
 * @returns {MousePosition} Posição normalizada do mouse
 */
const useMouseTracking = (): MousePosition => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (e.clientX - innerWidth / 2) / ANIMATION_CONFIG.mouse.sensitivity,
        y: (e.clientY - innerHeight / 2) / ANIMATION_CONFIG.mouse.sensitivity,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePos
}

/**
 * Hook para verificação de hidratação do cliente
 * @returns {boolean} Status de hidratação
 */
const useClientHydration = (): boolean => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

/* ──────────────── Sub-components ──────────────── */
/**
 * Componente para elementos de fundo animados
 */
const BackgroundElements = ({ mousePos, backgroundY }: {
  mousePos: MousePosition
  backgroundY: any
}) => (
  <>
    {/* Pattern de fundo com parallax */}
    <motion.div className="absolute inset-0 opacity-10" style={{ y: backgroundY }}>
      <motion.div
        className="absolute inset-0"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{
          type: 'spring',
          damping: ANIMATION_CONFIG.mouse.spring.damping,
          stiffness: ANIMATION_CONFIG.mouse.spring.stiffness
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E2B1A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>

    {/* Sombras radiais para profundidade */}
    <motion.div
      className="absolute top-20 left-10 h-32 w-32 bg-[#8E4616]/15 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-10 h-40 w-40 bg-[#1E2B1A]/15 blur-3xl"
      animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  </>
)

/**
 * Componente do logo principal
 */
const HeroLogo = () => {
  const ease = cubicBezier(...ANIMATION_CONFIG.ease)

  return (
    <motion.img
      src="/images/logo-redonda.png"
      alt="Farias Klug Advocacia"
      className="h-40 w-auto drop-shadow-2xl ring-1 ring-[#1E2B1A]/10 sm:h-52 lg:h-64"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1,
        ease,
        scale: { type: 'spring', damping: 15, stiffness: 100 }
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    />
  )
}

/**
 * Componente do título principal
 */
const HeroHeadline = () => {
  const ease = cubicBezier(...ANIMATION_CONFIG.ease)

  return (
    <motion.h1
      className={CSS_CLASSES.text.headline}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: ANIMATION_DELAYS.headline, duration: 0.8, ease }}
    >
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: ANIMATION_DELAYS.firstLine, duration: 0.8, ease }}
      >
        Soluções Jurídicas em
      </motion.span>
      <motion.span
        className="block mt-2 text-[#8E4616]/95"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: ANIMATION_DELAYS.secondLine, duration: 0.8, ease }}
      >
        Direito Ambiental e Empresarial
      </motion.span>
    </motion.h1>
  )
}

/**
 * Componente do subtítulo
 */
const HeroSubtitle = () => {
  const ease = cubicBezier(...ANIMATION_CONFIG.ease)

  return (
    <motion.p
      className={CSS_CLASSES.text.subtitle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: ANIMATION_DELAYS.subtitle, duration: 0.7, ease }}
    >
      Regularize, proteja e desenvolva seu empreendimento com segurança jurídica e responsabilidade socioambiental.
    </motion.p>
  )
}

/**
 * Componente dos botões de chamada para ação
 */
const HeroCTAs = () => {
  const ease = cubicBezier(...ANIMATION_CONFIG.ease)

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 mb-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: ANIMATION_DELAYS.cta, duration: 0.6, ease }}
    >
      {/* Botão primário - Consulta */}
      <motion.a
        href="#contato"
        className={`${CSS_CLASSES.button.base} ${CSS_CLASSES.button.primary}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Agendar consulta jurídica"
      >
        <IconCalendar className="h-5 w-5" />
        Agende uma Consulta
        <motion.div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.a>

      {/* Botão secundário - Serviços */}
      <motion.a
        href="#areas"
        className={`${CSS_CLASSES.button.base} ${CSS_CLASSES.button.secondary}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Conhecer áreas de atuação"
      >
        Conheça Nossos Serviços
        <motion.div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-[#1E2B1A]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.a>
    </motion.div>
  )
}

/**
 * Componente do botão de scroll
 */
const ScrollButton = () => {
  const ease = cubicBezier(...ANIMATION_CONFIG.ease)

  const handleScrollClick = (): void => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: ANIMATION_DELAYS.scroll, duration: 0.6, ease }}
    >
      <motion.button
        onClick={handleScrollClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center border border-[#1E2B1A]/40 text-[#1E2B1A]/70 transition-colors duration-300 hover:bg-[#1E2B1A]/10 hover:text-[#8E4616] rounded-none"
        aria-label="Explorar conteúdo"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IconChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}

/* ──────────────── Main Component ──────────────── */
/**
 * Componente Hero principal da landing page
 * Responsável pela seção inicial com logo, títulos e CTAs
 */
export default function Hero() {
  // Hooks personalizados para estado e efeitos
  const { scrollY } = useScroll()
  const backgroundY = useTransform(
    scrollY,
    ANIMATION_CONFIG.parallax.scrollRange,
    ANIMATION_CONFIG.parallax.translateRange
  )
  const mousePos = useMouseTracking()
  const isClient = useClientHydration()

  return (
    <div className="relative h-screen min-h-screen overflow-hidden bg-gradient-to-br from-[#CEBAA3] to-[#B89B84]">
      {/* Elementos de fundo - renderizados apenas no cliente */}
      {isClient && (
        <BackgroundElements mousePos={mousePos} backgroundY={backgroundY} />
      )}

      {/* Conteúdo principal */}
      <div className="relative flex min-h-screen items-center justify-center px-6 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <HeroLogo />
          <HeroHeadline />
          <HeroSubtitle />
          <HeroCTAs />
          <ScrollButton />
        </div>
      </div>
    </div>
  )
}
