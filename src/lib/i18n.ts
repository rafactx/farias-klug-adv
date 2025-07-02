import { Locale } from '@/types/globals'

const dictionaries = {
  'pt-br': () => import('@/content/dictionaries/pt-br/common.json').then(module => module.default),
  en: () => import('@/content/dictionaries/en/common.json').then(module => module.default),
  es: () => import('@/content/dictionaries/es/common.json').then(module => module.default),
  de: () => import('@/content/dictionaries/de/common.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}
