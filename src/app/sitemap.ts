import { locales } from '@/lib/locales';
import { siteConfig } from '@/lib/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Generate sitemap entries for each locale
  const routes = (locales as readonly string[]).flatMap((locale) => {
    const localePrefix = locale === 'pt-BR' ? '' : `/${locale}`;

    return [
      // Home page
      {
        url: `${baseUrl}${localePrefix}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
        alternates: {
          languages: Object.fromEntries(
            (locales as readonly string[]).map((loc) => [
              loc,
              loc === 'pt-BR' ? baseUrl : `${baseUrl}/${loc}`
            ])
          )
        }
      },
      // About section
      {
        url: `${baseUrl}${localePrefix}#about`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            (locales as readonly string[]).map((loc) => [
              loc,
              loc === 'pt-BR' ? `${baseUrl}#about` : `${baseUrl}/${loc}#about`
            ])
          )
        }
      },
      // Services section
      {
        url: `${baseUrl}${localePrefix}#services`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            (locales as readonly string[]).map((loc) => [
              loc,
              loc === 'pt-BR' ? `${baseUrl}#services` : `${baseUrl}/${loc}#services`
            ])
          )
        }
      },
      // Team section
      {
        url: `${baseUrl}${localePrefix}#team`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            (locales as readonly string[]).map((loc) => [
              loc,
              loc === 'pt-BR' ? `${baseUrl}#team` : `${baseUrl}/${loc}#team`
            ])
          )
        }
      },
      // FAQ section
      {
        url: `${baseUrl}${localePrefix}#faq`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            (locales as readonly string[]).map((loc) => [
              loc,
              loc === 'pt-BR' ? `${baseUrl}#faq` : `${baseUrl}/${loc}#faq`
            ])
          )
        }
      },
      // Contact section
      {
        url: `${baseUrl}${localePrefix}#contact`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            (locales as readonly string[]).map((loc) => [
              loc,
              loc === 'pt-BR' ? `${baseUrl}#contact` : `${baseUrl}/${loc}#contact`
            ])
          )
        }
      }
    ];
  });

  return routes;
}
