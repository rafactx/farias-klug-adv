# Farias Klug Law Firm - Corporate Website

Professional website for Farias Klug Law Firm, specializing in Environmental and Corporate Law. Built with Next.js 15 and modern web technologies.

## Overview

This is a production-ready, internationalized corporate website featuring advanced SEO optimization, custom design system, and multi-language support. The application serves legal content across 5 languages with optimized performance and accessibility.

## Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static type checking
- **React 19** - Latest React features

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom CSS Variables** - Design token system
- **Custom Font System** - Austera Text typography

### Internationalization

- **next-intl** - Type-safe internationalization
- **Dynamic routing** - Locale-based routing strategy

### SEO & Performance

- **Next.js Metadata API** - Dynamic meta tags
- **Schema.org structured data** - Rich snippets optimization
- **Dynamic sitemap generation** - Multi-language sitemap
- **Optimized robots.txt** - Search engine configuration

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Internationalized routing
│   │   ├── layout.tsx         # Locale-specific layout
│   │   └── page.tsx           # Home page component
│   ├── api/                   # API routes
│   │   └── contact/           # Contact form endpoint
│   ├── globals.css            # Global styles & design system
│   ├── robots.ts              # Dynamic robots.txt
│   └── sitemap.ts             # Dynamic sitemap generation
├── components/
│   ├── ui/                    # Design system components
│   ├── ContactForm.tsx        # Contact form with validation
│   ├── Navigation.tsx         # Main navigation component
│   ├── LanguageSwitcher.tsx   # Language selection
│   ├── WhatsAppButton.tsx     # WhatsApp integration
│   └── VisualEnhancements.tsx # Animation components
├── data/
│   └── official-content.ts    # Structured content data
└── lib/
    ├── i18n.ts               # Internationalization config
    ├── seo.ts                # SEO utilities
    └── utils.ts              # Common utilities

messages/                     # Translation files
├── pt-BR/                   # Portuguese (Brazil)
├── en/                      # English
├── es/                      # Spanish
├── de/                      # German
└── fr/                      # French

public/
├── fonts/                   # Austera Text font files
└── *.svg                    # Static assets
```

## Installation & Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm/bun

### Setup

```bash
# Clone repository
git clone <repository-url>
cd farias-klug-adv

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Features

### Internationalization

- **5 supported locales**: pt-BR (default), en, es, de, fr
- **Type-safe translations** with next-intl
- **Locale-based routing**: `/en`, `/pt-BR`, etc.
- **Automatic locale detection** and fallback

### SEO Optimization

- **Dynamic metadata** per locale and page
- **Schema.org structured data** for legal services
- **Multi-language sitemap** with proper hreflang
- **Optimized robots.txt** with locale-specific rules
- **Open Graph and Twitter Card** support

### Design System

- **Custom CSS variables** for consistent theming
- **Austera Text font family** with multiple weights
- **Modular component library** in `/components/ui`
- **Responsive design** with mobile-first approach
- **Animation system** with CSS-in-JS

### Performance Features

- **App Router architecture** for optimal performance
- **Static generation** where possible
- **Optimized font loading** with next/font
- **Image optimization** with next/image
- **Bundle optimization** with webpack

## Configuration

### Internationalization Setup

Located in `src/lib/i18n.ts`:

```typescript
export const locales = ['pt-BR', 'en', 'es', 'de', 'fr'] as const;
export type Locale = typeof locales[number];
```

### Environment Variables

```bash
# Optional: Add environment-specific configurations
NEXT_PUBLIC_SITE_URL=https://fariasklug.com.br
```

### Design System Variables

Custom properties defined in `globals.css`:

- Typography scale and weights
- Color palette with semantic naming
- Spacing and sizing systems
- Animation timing functions

## API Routes

### Contact Form Endpoint

- **Route**: `/api/contact`
- **Method**: POST
- **Validation**: Server-side input validation
- **Response**: JSON with success/error status

## Build & Deployment

### Production Build

```bash
npm run build    # Generates optimized production build
npm run start    # Serves production build locally
```

### Build Output

- **Static pages**: Pre-rendered at build time
- **Dynamic routes**: Server-side rendered
- **API routes**: Serverless functions
- **Assets**: Optimized and compressed

### Deployment Considerations

- **Vercel Platform**: Optimized for Next.js deployment
- **Environment variables**: Configure for production
- **Custom domain**: Set up with proper DNS configuration
- **Analytics**: Consider adding performance monitoring

## Development Guidelines

### Code Standards

- **TypeScript strict mode** enabled
- **ESLint configuration** for code quality
- **Component composition** over inheritance
- **Custom hooks** for reusable logic

### File Naming Conventions

- **PascalCase**: React components
- **camelCase**: Utilities and hooks
- **kebab-case**: Static assets and routes
- **lowercase**: Configuration files

### State Management

- **Server state**: React Server Components
- **Client state**: React hooks and context
- **Form state**: Controlled components with validation

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Accessibility**: WCAG 2.1 AA compliance
- **Progressive enhancement**: Graceful degradation

## License

Copyright 2024 Farias Klug Advocacia. All rights reserved.
