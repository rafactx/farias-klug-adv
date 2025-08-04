import SEOHead from '@/components/SEOHead';
import { generateSEOMetadata, generateStructuredData, type Locale } from '@/lib/seo';
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from 'next/navigation';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Lista de idiomas suportados
const locales = ['pt-BR', 'en', 'es', 'de', 'fr'];

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return generateSEOMetadata(locale as Locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Aguardar os params (Next.js 15 requirement)
  const { locale } = await params;

  // Validar se o idioma é suportado
  if (!locales.includes(locale)) {
    notFound();
  }

  // Obter as mensagens para o idioma atual
  const messages = await getMessages();

  // Generate structured data
  const structuredData = generateStructuredData(locale as Locale);

  return (
    <html lang={locale}>
      <head>
        {/* SEO Head with hreflang, canonical, etc */}
        <SEOHead />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
