import SEOHead from '@/components/SEOHead';
import { locales, type Locale } from '@/lib/locales';
import { generateSEOMetadata, generateStructuredData } from '@/lib/seo';
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata(locale as Locale);
}

export function generateStaticParams() {
  return (locales as readonly string[]).map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params (Next.js 15 requirement)
  const { locale } = await params;

  // Retrieve messages for the current locale
  const messages = await getMessages();

  // Generate structured data
  const structuredData = generateStructuredData(locale as Locale);

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Pass SEO data to the head of the root layout via children */}
      <SEOHead locale={locale as Locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
