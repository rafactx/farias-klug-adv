import type { Metadata, Viewport } from "next"
import { Lora, Playfair_Display } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
})

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
})

export const metadata: Metadata = {
  title: "Farias Klug Advocacia - Direito Empresarial Estratégico",
  description: "Soluções jurídicas estratégicas e personalizadas para proteger e impulsionar o crescimento do seu negócio com excelência e inovação.",
  keywords: [
    "advocacia",
    "direito empresarial",
    "consultoria jurídica",
    "advogado empresarial",
    "compliance corporativo",
    "contratos empresariais",
    "direito societário",
    "blindagem patrimonial",
    "recuperação judicial",
    "propriedade intelectual"
  ].join(', '),
  authors: [{ name: "Farias Klug Advocacia", url: "https://farias-klug.com.br" }],
  creator: "Farias Klug Advocacia",
  publisher: "Farias Klug Advocacia",
  applicationName: "Farias Klug Advocacia",
  category: "Legal Services",
  classification: "Business",
  openGraph: {
    title: "Farias Klug Advocacia - Direito Empresarial Estratégico",
    description: "Soluções jurídicas estratégicas para proteger e impulsionar o crescimento do seu negócio",
    url: "https://farias-klug.com.br",
    siteName: "Farias Klug Advocacia",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farias Klug Advocacia - Direito Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farias Klug Advocacia - Direito Empresarial",
    description: "Soluções jurídicas estratégicas para o crescimento do seu negócio",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: "https://farias-klug.com.br",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${playfairDisplay.variable} ${lora.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Farias Klug" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
