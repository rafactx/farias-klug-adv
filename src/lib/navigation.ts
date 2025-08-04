import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['pt-BR', 'en', 'es', 'de', 'fr'] as const;
export type Locale = typeof locales[number];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales
});

// Utility function para obter URL localizada
export function getLocalizedUrl(locale: string, pathname: string = '/') {
  return `/${locale}${pathname === '/' ? '' : pathname}`;
}

// Utility function para extrair locale da URL
export function getLocaleFromUrl(url: string): string {
  const segments = url.split('/');
  const potentialLocale = segments[1];

  if (locales.includes(potentialLocale as Locale)) {
    return potentialLocale;
  }

  return 'pt-BR'; // fallback
}
