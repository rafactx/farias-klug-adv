'use client';

import { locales, siteConfig, type Locale } from '@/lib/seo';
import { useLocale } from 'next-intl';

export default function SEOHead() {
  const locale = useLocale() as Locale;
  const baseUrl = siteConfig.url;

  // Generate hreflang tags
  const hreflangTags = locales.map((loc) => {
    const href = loc === 'pt-BR' ? baseUrl : `${baseUrl}/${loc}`;
    return (
      <link
        key={loc}
        rel="alternate"
        hrefLang={loc}
        href={href}
      />
    );
  });

  // Add x-default hreflang
  hreflangTags.push(
    <link
      key="x-default"
      rel="alternate"
      hrefLang="x-default"
      href={baseUrl}
    />
  );

  return (
    <>
      {hreflangTags}

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={locale === 'pt-BR' ? baseUrl : `${baseUrl}/${locale}`}
      />

      {/* Language detection */}
      <meta name="language" content={locale} />

      {/* Geographic targeting */}
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Santa Catarina" />
      <meta name="geo.position" content="-26.3044;-48.8487" />
      <meta name="ICBM" content="-26.3044, -48.8487" />

      {/* Publisher information */}
      <meta name="publisher" content="Farias Klug Advocacia" />
      <meta name="author" content="Augusto Farias Klug" />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Theme colors */}
      <meta name="theme-color" content="#1E2B1A" />
      <meta name="msapplication-TileColor" content="#1E2B1A" />
      <meta name="apple-mobile-web-app-title" content="Farias Klug" />
      <meta name="application-name" content="Farias Klug" />

      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
}
