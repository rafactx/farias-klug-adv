// animations/variants/section.ts
// Animações para seções específicas do site

export const sectionVariants = {
  // Container para animações em sequência
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },

  // Container com stagger mais rápido
  staggerContainerFast: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  },

  // Item individual em stagger
  staggerItem: {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  },

  // Animação padrão de entrada
  fadeInUp: {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  },

  // Entrada suave apenas com fade
  fadeIn: {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  },

  // Entrada da esquerda
  slideInLeft: {
    initial: {
      opacity: 0,
      x: -60
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  },

  // Entrada da direita
  slideInRight: {
    initial: {
      opacity: 0,
      x: 60
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  },

  // Animação de escala suave
  scaleIn: {
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }
}

// Animações específicas para seções do escritório
export const lawFirmSections = {
  // Hero Section
  hero: {
    container: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3
        }
      }
    },
    title: {
      initial: {
        opacity: 0,
        y: 50
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut'
        }
      }
    },
    subtitle: {
      initial: {
        opacity: 0,
        y: 30
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut'
        }
      }
    },
    cta: {
      initial: {
        opacity: 0,
        y: 20,
        scale: 0.95
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: 'easeOut'
        }
      }
    }
  },

  // About Section
  about: {
    container: sectionVariants.staggerContainer,
    text: sectionVariants.fadeInUp,
    image: {
      initial: {
        opacity: 0,
        scale: 1.1
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut'
        }
      }
    },
    stats: {
      initial: {
        opacity: 0,
        y: 20
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
          staggerChildren: 0.1
        }
      }
    }
  },

  // Areas Section
  areas: {
    container: sectionVariants.staggerContainer,
    title: sectionVariants.fadeInUp,
    grid: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2
        }
      }
    },
    card: {
      initial: {
        opacity: 0,
        y: 30,
        scale: 0.95
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      },
      hover: {
        y: -5,
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: 'easeOut'
        }
      },
      tap: {
        scale: 0.98
      }
    }
  },

  // Contact Section
  contact: {
    container: sectionVariants.staggerContainer,
    info: sectionVariants.slideInLeft,
    buttons: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    },
    socialButton: {
      initial: {
        opacity: 0,
        x: -20,
        scale: 0.9
      },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: 'easeOut'
        }
      },
      hover: {
        scale: 1.05,
        y: -2,
        transition: {
          duration: 0.2,
          ease: 'easeOut'
        }
      },
      tap: {
        scale: 0.95
      }
    }
  }
}

// Animações para componentes UI
export const uiVariants = {
  // Botões
  button: {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.98
    }
  },

  // Botão primário com efeito especial
  primaryButton: {
    initial: {
      scale: 1,
      boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.15)',
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.97
    }
  },

  // Cards em geral
  card: {
    initial: {
      scale: 1,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 10px 25px 0 rgba(0, 0, 0, 0.1)',
      y: -2,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  },

  // Navegação
  navItem: {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  },

  // Dropdown
  dropdown: {
    initial: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: 'easeIn'
      }
    }
  },

  // Menu mobile
  mobileMenu: {
    initial: {
      opacity: 0,
      x: '100%'
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  },

  // Toast/Notificação
  toast: {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  }
}

// Animações para estados de loading
export const loadingVariants = {
  // Spinner simples
  spinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  // Pulse effect
  pulse: {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  // Skeleton loading
  skeleton: {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }
}
