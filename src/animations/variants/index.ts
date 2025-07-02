// animations/variants/index.ts
// Barrel export para todas as variantes de animação

// Importar todas as variants
export {
  getRouteTransition, pageVariants,
  routeTransitions
} from './page'

export {
  lawFirmSections, loadingVariants, sectionVariants, uiVariants
} from './section'

// Re-exportar variants específicas mais usadas para fácil acesso
export const {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  staggerItem
} = sectionVariants

export const {
  button,
  primaryButton,
  card,
  navItem,
  dropdown,
  mobileMenu,
  toast
} = uiVariants

export const {
  hero,
  about,
  areas,
  contact
} = lawFirmSections

// Variants combinadas para uso comum
export const commonVariants = {
  // Entrada padrão para qualquer seção
  defaultSection: sectionVariants.fadeInUp,

  // Container com stagger para listas
  listContainer: sectionVariants.staggerContainer,

  // Item de lista
  listItem: sectionVariants.staggerItem,

  // Botão padrão
  defaultButton: uiVariants.button,

  // Card padrão
  defaultCard: uiVariants.card,

  // Transição de página
  defaultPageTransition: pageVariants.pageTransition
}

// Configurações globais de animação
export const animationConfig = {
  // Durações padrão
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8
  },

  // Easing curves
  easings: {
    easeOut: 'easeOut',
    easeIn: 'easeIn',
    easeInOut: 'easeInOut',
    spring: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55]
  },

  // Delays para stagger
  staggerDelays: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    verySlow: 0.2
  },

  // Configurações de redução de movimento
  reducedMotion: {
    // Versões simplificadas para usuários com preferência de movimento reduzido
    fadeOnly: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },

    instant: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 }
    }
  }
}

// Utilitários para animações
export const animationUtils = {
  // Criar variant com delay personalizado
  withDelay: (variant: any, delay: number) => ({
    ...variant,
    animate: {
      ...variant.animate,
      transition: {
        ...variant.animate.transition,
        delay
      }
    }
  }),

  // Criar variant com duração personalizada
  withDuration: (variant: any, duration: number) => ({
    ...variant,
    animate: {
      ...variant.animate,
      transition: {
        ...variant.animate.transition,
        duration
      }
    }
  }),

  // Criar stagger container com delay personalizado
  createStaggerContainer: (staggerDelay: number = 0.1, delayChildren: number = 0.1) => ({
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren
      }
    }
  }),

  // Verificar se o usuário prefere movimento reduzido
  shouldReduceMotion: () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Obter variant respeitando preferência de movimento
  getAccessibleVariant: (normalVariant: any, reducedVariant: any = animationConfig.reducedMotion.fadeOnly) => {
    return animationUtils.shouldReduceMotion() ? reducedVariant : normalVariant
  },

  // Criar variant responsivo baseado no tamanho da tela
  createResponsiveVariant: (mobileVariant: any, desktopVariant: any) => ({
    mobile: mobileVariant,
    desktop: desktopVariant
  })
}

// Presets para casos de uso comuns
export const animationPresets = {
  // Entrada de página padrão
  pageEntry: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  },

  // Card hover padrão
  cardHover: {
    hover: {
      y: -4,
      scale: 1.02,
      boxShadow: '0 10px 25px 0 rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  },

  // Botão hover profissional
  professionalButton: {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    tap: { scale: 0.98 }
  },

  // Entrada de texto com typing effect
  textReveal: {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.02,
        delayChildren: 0.1
      }
    }
  }
}

// Tipos TypeScript para melhor desenvolvimento
export type AnimationVariant = {
  initial?: any
  animate?: any
  exit?: any
  hover?: any
  tap?: any
  transition?: any
}

export type StaggerConfig = {
  staggerChildren?: number
  delayChildren?: number
}

export type AnimationPreset =
  | 'pageEntry'
  | 'cardHover'
  | 'professionalButton'
  | 'textReveal'

// Hook personalizado para usar animações (para documentação)
export const useAnimationExamples = {
  // Como usar variants básicas
  basicUsage: `
    import { motion } from 'framer-motion'
    import { fadeInUp } from '@/animations/variants'

    <motion.div variants={fadeInUp}>
      Conteúdo animado
    </motion.div>
  `,

  // Como usar stagger
  staggerUsage: `
    import { motion } from 'framer-motion'
    import { staggerContainer, staggerItem } from '@/animations/variants'

    <motion.div variants={staggerContainer} initial="initial" animate="animate">
      {items.map(item => (
        <motion.div key={item.id} variants={staggerItem}>
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  `,

  // Como usar presets
  presetUsage: `
    import { motion } from 'framer-motion'
    import { animationPresets } from '@/animations/variants'

    <motion.div
      initial="initial"
      animate="animate"
      variants={animationPresets.pageEntry}
    >
      Conteúdo da página
    </motion.div>
  `
}
