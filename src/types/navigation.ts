// src/types/navigation.ts
export interface NavigationItem {
  id: string
  label: Record<Locale, string>
  href: string
  description?: Record<Locale, string>
  icon?: string
  external?: boolean
  children?: NavigationItem[]
  featured?: boolean
  order: number
}

export interface NavigationGroup {
  id: string
  label: Record<Locale, string>
  items: NavigationItem[]
  order: number
}

export interface BreadcrumbItem {
  label: string
  href: string
}
