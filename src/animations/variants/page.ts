// animations/variants/page.ts
// Animações para transições de página e layouts

export const pageVariants = {
  // Transição principal de páginas
  pageTransition: {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  },

  // Transição suave para páginas internas
  slideUp: {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] // ease-out-quart
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  },

  // Transição com fade lateral
  slideRight: {
    initial: {
      opacity: 0,
      x: -50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  },

  // Animação para páginas de área jurídica
  areaPageTransition: {
    initial: {
      opacity: 0,
      scale: 0.98,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  },

  // Loading states
  loading: {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  },

  // Animação para modal/overlay
  modal: {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  },

  // Backdrop para modais
  backdrop: {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }
}

// Configurações de transição para diferentes tipos de rota
export const routeTransitions = {
  // Transição padrão
  default: pageVariants.pageTransition,

  // Páginas principais (Início, Sobre, Contato)
  main: pageVariants.slideUp,

  // Páginas de áreas jurídicas
  legal: pageVariants.areaPageTransition,

  // Páginas administrativas (Privacidade, Termos)
  admin: pageVariants.slideRight
}

// Utilitário para obter transição baseada na rota
export const getRouteTransition = (pathname: string) => {
  if (pathname === '/') return routeTransitions.main
  if (pathname.includes('/areas-de-atuacao')) return routeTransitions.legal
  if (pathname.includes('/sobre') || pathname.includes('/contato')) return routeTransitions.main
  if (pathname.includes('/privacidade') || pathname.includes('/termos')) return routeTransitions.admin

  return routeTransitions.default
}
