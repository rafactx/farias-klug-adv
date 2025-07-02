/**
 * @fileoverview Exemplos de uso dos componentes de áreas de atuação
 *
 * Este arquivo demonstra diferentes formas de utilizar os componentes
 * Areas e AreaCard em diversos contextos da aplicação.
 */

import { AreaCard, Areas, legalAreas, useAreasAnalytics } from '@/components/sections/areas'

// =============================================================================
// EXEMPLO 1: Uso na Homepage (Áreas em Destaque)
// =============================================================================

/**
 * Homepage - Seção de áreas em destaque
 * Mostra apenas as áreas marcadas como featured, sem controles
 */
export function HomepageAreasSection() {
  const { trackAreaClick } = useAreasAnalytics()

  const handleAreaClick = (areaId: string) => {
    // Tracking específico para homepage
    trackAreaClick(areaId, 'pt-br', 'homepage')

    // Outros analytics específicos
    window.gtag?.('event', 'homepage_area_interest', {
      area_id: areaId,
      section: 'featured_areas'
    })
  }

  return (
    <Areas
      locale="pt-br"
      featuredOnly={true}
      showControls={false}
      maxItems={4}
      title="Nossas Especialidades"
      description="Áreas de atuação onde oferecemos excelência jurídica"
      onAreaClick={handleAreaClick}
      className="bg-gray-50"
    />
  )
}

// =============================================================================
// EXEMPLO 2: Página Completa de Áreas
// =============================================================================

/**
 * Página completa de áreas com todos os recursos
 */
export function AreasPage() {
  const { trackAreaClick, trackFilterChange } = useAreasAnalytics()

  const handleAreaClick = (areaId: string) => {
    trackAreaClick(areaId, 'pt-br', 'areas_page')
  }

  const handleFilterChange = (filter: string) => {
    trackFilterChange(filter, 0) // O count será atualizado internamente
  }

  return (
    <div className="min-h-screen">
      <Areas
        locale="pt-br"
        showControls={true}
        title="Todas as Áreas de Atuação"
        description="Conheça todos os serviços jurídicos que oferecemos"
        onAreaClick={handleAreaClick}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
}

// =============================================================================
// EXEMPLO 3: Seção Compacta
// =============================================================================

/**
 * Seção compacta para páginas internas
 */
export function CompactAreasSection() {
  return (
    <Areas
      locale="pt-br"
      initialLayout="list"
      maxItems={3}
      showControls={false}
      title="Outras Áreas"
      description="Explore mais especialidades"
      className="py-8"
    />
  )
}

// =============================================================================
// EXEMPLO 4: Cards Individuais Customizados
// =============================================================================

/**
 * Uso de cards individuais em contextos específicos
 */
export function CustomAreaCards() {
  const featuredAreas = legalAreas.filter(area => area.featured)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredAreas.map((area, index) => (
        <AreaCard
          key={area.id}
          area={area}
          locale="pt-br"
          variant="compact"
          animationDelay={index * 0.1}
          onCardClick={(areaId) => {
            console.log('Custom tracking:', areaId)
          }}
          className="shadow-lg"
        />
      ))}
    </div>
  )
}

// =============================================================================
// EXEMPLO 5: Integração com Busca Global
// =============================================================================

/**
 * Componente com busca integrada ao estado global
 */
export function SearchIntegratedAreas({ searchQuery }: { searchQuery: string }) {
  const [filteredAreas, setFilteredAreas] = useState(legalAreas)

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = legalAreasUtils.search(searchQuery, 'pt-br')
      setFilteredAreas(filtered)
    } else {
      setFilteredAreas(legalAreas)
    }
  }, [searchQuery])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAreas.map((area, index) => (
        <AreaCard
          key={area.id}
          area={area}
          locale="pt-br"
          animationDelay={index * 0.05}
        />
      ))}
    </div>
  )
}

// =============================================================================
// EXEMPLO 6: Multi-idioma
// =============================================================================

/**
 * Componente que suporta mudança de idioma
 */
export function MultiLanguageAreas({ locale }: { locale: 'pt-br' | 'en' | 'es' | 'de' }) {
  const titles = {
    'pt-br': 'Áreas de Atuação',
    'en': 'Practice Areas',
    'es': 'Áreas de Práctica',
    'de': 'Praxisbereiche'
  }

  const descriptions = {
    'pt-br': 'Nossas especialidades jurídicas',
    'en': 'Our legal specialties',
    'es': 'Nuestras especialidades legales',
    'de': 'Unsere Rechtsspezialisierungen'
  }

  return (
    <Areas
      locale={locale}
      title={titles[locale]}
      description={descriptions[locale]}
      showControls={true}
    />
  )
}

// =============================================================================
// EXEMPLO 7: Com Loading State
// =============================================================================

/**
 * Componente com estados de loading
 */
export function AreasWithLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border rounded-lg p-6 animate-pulse">
                <div className="h-12 bg-gray-200 rounded mb-4" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full mb-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                  <div className="h-3 bg-gray-200 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return <Areas locale="pt-br" />
}

// =============================================================================
// EXEMPLO 8: Com Filtros Avançados
// =============================================================================

/**
 * Filtros personalizados baseados em dados dinâmicos
 */
export function AdvancedFilterAreas() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'order' | 'title' | 'featured'>('order')

  const filteredAreas = useMemo(() => {
    let areas = [...legalAreas]

    // Filtrar por cores
    if (selectedColors.length > 0) {
      areas = areas.filter(area =>
        selectedColors.includes(area.color.primary)
      )
    }

    // Ordenar
    switch (sortBy) {
      case 'title':
        areas.sort((a, b) => a.title['pt-br'].localeCompare(b.title['pt-br']))
        break
      case 'featured':
        areas.sort((a, b) => Number(b.featured) - Number(a.featured))
        break
      default:
        areas.sort((a, b) => a.order - b.order)
    }

    return areas
  }, [selectedColors, sortBy])

  const uniqueColors = [...new Set(legalAreas.map(area => area.color.primary))]

  return (
    <div>
      {/* Controles avançados */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Ordenar por:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="border rounded px-3 py-1"
            >
              <option value="order">Ordem padrão</option>
              <option value="title">Título A-Z</option>
              <option value="featured">Destaque primeiro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Cores:</label>
            <div className="flex gap-2">
              {uniqueColors.map(color => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded border-2 ${
                    selectedColors.includes(color) ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setSelectedColors(prev =>
                      prev.includes(color)
                        ? prev.filter(c => c !== color)
                        : [...prev, color]
                    )
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid personalizado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAreas.map((area, index) => (
          <AreaCard
            key={area.id}
            area={area}
            locale="pt-br"
            animationDelay={index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}

// =============================================================================
// EXPORTAÇÕES PARA DEMONSTRAÇÃO
// =============================================================================

export default {
  HomepageAreasSection,
  AreasPage,
  CompactAreasSection,
  CustomAreaCards,
  SearchIntegratedAreas,
  MultiLanguageAreas,
  AreasWithLoading,
  AdvancedFilterAreas
}
