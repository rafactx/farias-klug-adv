'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  FileCheck,
  Leaf,
  ShieldCheck
} from 'lucide-react'
import Link from 'next/link'
import { memo } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LegalArea } from '@/types/legal'

/**
 * Mapeamento de ícones disponíveis
 * Facilita a manutenção e adição de novos ícones
 */
const ICON_MAP = {
  'shield-check': ShieldCheck,
  'file-check': FileCheck,
  'leaf': Leaf,
  'briefcase': Briefcase,
} as const

/**
 * Props do componente AreaCard
 */
interface AreaCardProps {
  /** Dados da área legal */
  area: LegalArea
  /** Idioma atual para exibição do conteúdo */
  locale: 'pt-br' | 'en' | 'es' | 'de'
  /** Animação de entrada personalizada */
  animationDelay?: number
  /** Callback opcional para tracking de cliques */
  onCardClick?: (areaId: string) => void
  /** Estilo de layout do card */
  variant?: 'default' | 'featured' | 'compact'
  /** Classe CSS adicional */
  className?: string
}

/**
 * Variantes de animação para entrada do card
 */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.21, 1.11, 0.81, 0.99]
    }
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
}

/**
 * Componente AreaCard
 *
 * Exibe um card individual para uma área de atuação legal.
 * Suporta múltiplos idiomas, animações e variantes de layout.
 *
 * @example
 * ```tsx
 * <AreaCard
 *   area={legalArea}
 *   locale="pt-br"
 *   variant="featured"
 *   onCardClick={(id) => analytics.track('area_card_click', { areaId: id })}
 * />
 * ```
 */
export const AreaCard = memo<AreaCardProps>(({
  area,
  locale,
  animationDelay = 0,
  onCardClick,
  variant = 'default',
  className
}) => {
  // Obter o componente de ícone apropriado
  const IconComponent = ICON_MAP[area.icon as keyof typeof ICON_MAP] || Leaf

  // Handler para clique no card
  const handleCardClick = () => {
    onCardClick?.(area.id)
  }

  // Configurações de estilo baseadas na variante
  const variantStyles = {
    default: 'p-6',
    featured: 'p-8 border-2',
    compact: 'p-4'
  }

  // Número limitado de serviços para preview
  const previewServices = area.services[locale].slice(0, variant === 'compact' ? 2 : 3)
  const hasMoreServices = area.services[locale].length > previewServices.length

  return (
    <motion.div
      custom={animationDelay}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className={cn('group', className)}
    >
      <Card
        className={cn(
          'h-full border transition-all duration-300 hover:border-opacity-60 cursor-pointer',
          'hover:shadow-lg dark:hover:shadow-2xl',
          variant === 'featured' && 'border-primary/20 shadow-md',
          variantStyles[variant]
        )}
        style={{
          borderColor: variant === 'featured' ? area.color.primary : undefined,
          '--card-primary': area.color.primary,
          '--card-secondary': area.color.secondary,
          '--card-accent': area.color.accent,
        } as React.CSSProperties}
        onClick={handleCardClick}
      >
        <CardHeader className="pb-4">
          {/* Cabeçalho com ícone e badge featured */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="p-3 rounded-lg transition-colors duration-300"
              style={{ backgroundColor: area.color.secondary }}
            >
              <IconComponent
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                style={{ color: area.color.primary }}
              />
            </div>

            {area.featured && (
              <Badge
                variant="secondary"
                className="text-xs font-medium"
                style={{
                  backgroundColor: area.color.primary,
                  color: 'white'
                }}
              >
                Destaque
              </Badge>
            )}
          </div>

          {/* Título */}
          <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {area.title[locale]}
          </h3>

          {/* Descrição curta */}
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {area.shortDescription[locale]}
          </p>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Lista de serviços preview */}
          {variant !== 'compact' && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground mb-3">
                Principais serviços:
              </h4>
              <ul className="space-y-2">
                {previewServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: area.color.primary }}
                    />
                    <span className="line-clamp-2">{service}</span>
                  </li>
                ))}
              </ul>

              {hasMoreServices && (
                <p className="text-xs text-muted-foreground mt-2">
                  +{area.services[locale].length - previewServices.length} outros serviços
                </p>
              )}
            </div>
          )}

          {/* CTA Button */}
          <Button
            asChild
            variant="outline"
            size={variant === 'compact' ? 'sm' : 'default'}
            className={cn(
              'w-full group/btn transition-all duration-300',
              'hover:shadow-md'
            )}
            style={{
              borderColor: area.color.primary,
              color: area.color.primary,
            }}
          >
            <Link
              href={`/areas-de-atuacao/${area.slug}`}
              className="inline-flex items-center justify-center gap-2"
            >
              <span>{area.cta[locale]}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
})

// Definir displayName para debugging
AreaCard.displayName = 'AreaCard'

export default AreaCard
