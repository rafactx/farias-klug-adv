import { locales, type Locale } from '@/lib/locales';
import { createNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales
});

// Utility function to build a localized URL
export function getLocalizedUrl(locale: string, pathname: string = '/') {
  return `/${locale}${pathname === '/' ? '' : pathname}`;
}

// Utility function to extract locale from URL
export function getLocaleFromUrl(url: string): string {
  const segments = url.split('/');
  const potentialLocale = segments[1];

  if ((locales as readonly string[]).includes(potentialLocale as Locale)) {
    return potentialLocale;
  }

  return 'pt-BR'; // fallback
}
