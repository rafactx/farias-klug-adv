'use client'

import { motion } from 'framer-motion'
import { Filter, Grid, List, Search } from 'lucide-react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { legalAreas, legalAreasUtils } from '@/data/legal-areas'
import { cn } from '@/lib/utils'
import { AreaCard } from './area-card'
import { useAreasAnalytics } from './index'

/**
 * Props do componente Areas
 */
interface AreasProps {
  /** Idioma atual para exibição do conteúdo */
  locale: 'pt-br' | 'en' | 'es' | 'de'
  /** Layout inicial das áreas */
  initialLayout?: 'grid' | 'list'
  /** Mostrar apenas áreas em destaque */
  featuredOnly?: boolean
  /** Mostrar controles de filtro e busca */
  showControls?: boolean
  /** Número máximo de áreas a exibir */
  maxItems?: number
  /** Callback para tracking de interações */
  onAreaClick?: (areaId: string) => void
  /** Callback para tracking de filtros */
  onFilterChange?: (filter: string) => void
  /** Classe CSS adicional */
  className?: string
  /** Título da seção */
  title?: string
  /** Descrição da seção */
  description?: string
}

/**
 * Opções de filtro disponíveis
 */
const FILTER_OPTIONS = {
  all: { label: 'Todas as áreas', value: 'all' },
  featured: { label: 'Em destaque', value: 'featured' },
  defense: { label: 'Defesa e Recursos', value: 'defense' },
  licensing: { label: 'Licenciamento', value: 'licensing' },
  consulting: { label: 'Consultoria', value: 'consulting' },
  corporate: { label: 'Empresarial', value: 'corporate' },
} as const

/**
 * Variantes de animação para o container
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

/**
 * Variantes de animação para itens
 */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 1.11, 0.81, 0.99]
    }
  }
}

/**
 * Componente Areas
 *
 * Lista e gerencia a exibição das áreas de atuação legal.
 * Suporta filtros, busca, diferentes layouts e animações.
 *
 * @example
 * ```tsx
 * <Areas
 *   locale="pt-br"
 *   showControls={true}
 *   onAreaClick={(id) => analytics.track('area_clicked', { areaId: id })}
 * />
 * ```
 */
export const Areas = memo<AreasProps>(({
  locale,
  initialLayout = 'grid',
  featuredOnly = false,
  showControls = true,
  maxItems,
  onAreaClick,
  onFilterChange,
  className,
  title = 'Áreas de Atuação',
  description = 'Conheça nossas especialidades jurídicas'
}) => {
  // Estados do componente
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [layout, setLayout] = useState<'grid' | 'list'>(initialLayout)

  // Hook de analytics
  const { trackAreaClick, trackFilterChange, trackSearch } = useAreasAnalytics()

  /**
   * Filtra as áreas baseado nos critérios selecionados
   */
  const filteredAreas = useMemo(() => {
    let areas = featuredOnly ? legalAreasUtils.getFeatured() : legalAreasUtils.getOrdered()

    // Aplicar filtro por categoria
    if (activeFilter !== 'all') {
      switch (activeFilter) {
        case 'featured':
          areas = areas.filter(area => area.featured)
          break
        case 'defense':
          areas = areas.filter(area => area.id.includes('defesas'))
          break
        case 'licensing':
          areas = areas.filter(area => area.id.includes('licenciamento'))
          break
        case 'consulting':
          areas = areas.filter(area => area.id.includes('consultoria'))
          break
        case 'corporate':
          areas = areas.filter(area => area.id.includes('empresarial'))
          break
      }
    }

    // Aplicar busca por termo
    if (searchTerm.trim()) {
      areas = legalAreasUtils.search(searchTerm.trim(), locale).filter(area =>
        areas.some(filteredArea => filteredArea.id === area.id)
      )
    }

    // Limitar número de itens se especificado
    return maxItems ? areas.slice(0, maxItems) : areas
  }, [searchTerm, activeFilter, locale, featuredOnly, maxItems])

  /**
   * Efeito para tracking de busca com debounce
   */
  useEffect(() => {
    if (searchTerm.trim()) {
      const timeoutId = setTimeout(() => {
        trackSearch(searchTerm, filteredAreas.length)
      }, 500) // Debounce de 500ms

      return () => clearTimeout(timeoutId)
    }
  }, [searchTerm, filteredAreas.length, trackSearch])

  /**
   * Handler para mudança de filtro
   */
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter)
    trackFilterChange(filter, filteredAreas.length)
    onFilterChange?.(filter)
  }, [onFilterChange, filteredAreas.length, trackFilterChange])

  /**
   * Handler para mudança de busca
   */
  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }, [])

  /**
   * Handler para clique em área
   */
  const handleAreaClick = useCallback((areaId: string) => {
    trackAreaClick(areaId, locale, 'areas_section')
    onAreaClick?.(areaId)
  }, [onAreaClick, locale, trackAreaClick])

  /**
   * Configurações de grid responsivo
   */
  const gridConfig = {
    grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    list: 'grid-cols-1'
  }

  return (
    <section className={cn('py-16 bg-background', className)}>
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Controles de filtro e busca */}
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            {/* Barra de busca */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar área..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filtros e controles de layout */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Filtros */}
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                {Object.entries(FILTER_OPTIONS).map(([key, option]) => (
                  <Badge
                    key={key}
                    variant={activeFilter === option.value ? 'default' : 'outline'}
                    className="cursor-pointer transition-all duration-200 hover:scale-105"
                    onClick={() => handleFilterChange(option.value)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>

              {/* Controles de layout */}
              <div className="flex items-center gap-2">
                <Button
                  variant={layout === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLayout('grid')}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={layout === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLayout('list')}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid de áreas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            'grid gap-6',
            gridConfig[layout]
          )}
        >
          {filteredAreas.map((area, index) => (
            <motion.div
              key={area.id}
              variants={itemVariants}
            >
              <AreaCard
                area={area}
                locale={locale}
                animationDelay={index * 0.1}
                onCardClick={handleAreaClick}
                variant={area.featured ? 'featured' : 'default'}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Estado vazio */}
        {filteredAreas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              Nenhuma área encontrada com os filtros selecionados.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setActiveFilter('all')
              }}
              className="mt-4"
            >
              Limpar filtros
            </Button>
          </motion.div>
        )}

        {/* Contador de resultados */}
        {showControls && filteredAreas.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-muted-foreground">
              Exibindo {filteredAreas.length} de {legalAreas.length} áreas
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
})

// Definir displayName para debugging
Areas.displayName = 'Areas'

export default Areas
