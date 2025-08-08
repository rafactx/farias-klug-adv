import createNextIntlPlugin from 'next-intl/plugin';

// Configure next-intl plugin to load request config
const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  }
};

export default withNextIntl(nextConfig);
