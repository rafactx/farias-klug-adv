import { locales } from '@/lib/locales';
import { getRequestConfig } from 'next-intl/server';

// next-intl request configuration
export default getRequestConfig(async ({ locale }) => {
  const supported = (locales as readonly string[]);
  const currentLocale = supported.includes(String(locale)) ? String(locale) : 'pt-BR';

  const common = (await import(`../../messages/${currentLocale}/common.json`)).default;
  const home = (await import(`../../messages/${currentLocale}/home.json`)).default;
  const seo = (await import(`../../messages/${currentLocale}/seo.json`)).default;

  return {
    locale: currentLocale,
    messages: {
      common,
      home,
      seo,
      contact: common // expose contact under its own namespace if components use it
    }
  };
});
