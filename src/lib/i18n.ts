import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Lista de idiomas suportados
export const locales = ['pt-BR', 'en', 'es', 'de', 'fr'] as const;
export type Locale = typeof locales[number];

// Configuração do next-intl
export default getRequestConfig(async ({ locale }) => {
  // Validar se o idioma é suportado
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: {
      // Carregar as traduções para o idioma atual
      ...(await import(`../../messages/${locale}/common.json`)).default,
      ...(await import(`../../messages/${locale}/home.json`)).default,
      ...(await import(`../../messages/${locale}/seo.json`)).default,
    }
  };
});
