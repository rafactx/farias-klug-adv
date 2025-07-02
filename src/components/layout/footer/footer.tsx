/**
 * @fileoverview Componente Footer da aplicação
 *
 * Footer responsivo com navegação organizada, informações de contato,
 * links sociais e compliance legal. Suporta múltiplos idiomas e
 * inclui dados estruturados para SEO.
 *
 * @example
 * ```tsx
 * <Footer
 *   dictionary={dictionary}
 *   locale="pt-br"
 * />
 * ```
 */

'use client'

import { ContactButtons } from '@/components/social'
import { contactInfo, firmInfo } from '@/data/contact-info'
import { footerNavigation } from '@/data/navigation'
import { Locale } from '@/types/globals'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

// Interfaces e tipos
export interface FooterProps {
  /** Dicionário de traduções para o idioma atual */
  dictionary: any
  /** Idioma atual da aplicação */
  locale: Locale
  /** Classes CSS adicionais */
  className?: string
}

// Configurações do footer
const FOOTER_CONFIG = {
  CURRENT_YEAR: new Date().getFullYear(),
  ANIMATION_DELAY: 0.1,
  SOCIAL_BUTTONS_CONFIG: {
    layout: 'horizontal' as const,
    size: 'sm' as const,
    variant: 'minimal' as const
  }
} as const

// Variants de animação
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: FOOTER_CONFIG.ANIMATION_DELAY
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

/**
 * Componente Footer
 *
 * Footer principal da aplicação com navegação completa, informações
 * de contato e compliance legal. Totalmente responsivo e acessível.
 *
 * @example
 * ```tsx
 * <Footer dictionary={dictionary} locale="pt-br" />
 * ```
 */
export const Footer = memo<FooterProps>(({
  dictionary,
  locale,
  className = ''
}) => {
  // Dados organizados para renderização
  const footerData = useMemo(() => {
    return {
      navigation: footerNavigation,
      contact: contactInfo,
      firm: firmInfo,
      currentYear: FOOTER_CONFIG.CURRENT_YEAR
    }
  }, [])

  // Handler para analytics de links
  const handleLinkClick = (linkType: string, linkHref: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'footer_link_click', {
        link_type: linkType,
        link_url: linkHref,
        locale,
        page_location: window.location.href
      })
    }
  }

  return (
    <motion.footer
      className={`bg-gray-900 text-white ${className}`}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Container principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Coluna 1: Informações da empresa */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                {dictionary.company?.name || 'Farias Klug Advocacia'}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {dictionary.company?.tagline || dictionary.hero?.subtitle}
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{dictionary.company?.oab || 'OAB/SC 51.807'}</p>
                <p>{dictionary.company?.founded || 'Fundado em 2019'}</p>
                <p>{dictionary.company?.location || 'Florianópolis e Joinville - SC'}</p>
              </div>
            </div>
          </motion.div>

          {/* Coluna 2: Áreas de atuação */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">
              {dictionary.footer?.areas || 'Áreas de Atuação'}
            </h4>
            <ul className="space-y-3">
              {footerData.navigation[0]?.items?.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    onClick={() => handleLinkClick('area', item.href)}
                  >
                    {item.label[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3: Links úteis */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">
              {dictionary.navigation?.about || 'Institucional'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`/${locale}/sobre`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => handleLinkClick('page', '/sobre')}
                >
                  {dictionary.navigation?.about || 'Sobre'}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/areas-de-atuacao`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => handleLinkClick('page', '/areas-de-atuacao')}
                >
                  {dictionary.navigation?.areas || 'Áreas de Atuação'}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/contato`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => handleLinkClick('page', '/contato')}
                >
                  {dictionary.navigation?.contact || 'Contato'}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Coluna 4: Contato */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">
              {dictionary.footer?.contact || 'Contato'}
            </h4>

            {/* Informações de contato */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm text-gray-300">
                  <p>Florianópolis e Joinville</p>
                  <p>Santa Catarina - Brasil</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick('email', footerData.contact.email)}
                >
                  {footerData.contact.email}
                </a>
              </div>
            </div>

            {/* Botões sociais */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-3">
                {dictionary.footer?.followUs || 'Siga-nos'}
              </p>
              <ContactButtons
                locale={locale}
                layout="horizontal"
                size="sm"
                variant="minimal"
                className="justify-start"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seção inferior - Copyright e links legais */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-800"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                © {footerData.currentYear} {dictionary.company?.name || 'Farias Klug Advocacia'}. {dictionary.footer?.rights || 'Todos os direitos reservados'}.
              </p>
            </div>

            {/* Links legais */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a
                href="/politica-privacidade"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick('legal', '/politica-privacidade')}
              >
                {dictionary.footer?.privacy || 'Política de Privacidade'}
              </a>
              <a
                href="/termos-uso"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick('legal', '/termos-uso')}
              >
                {dictionary.footer?.terms || 'Termos de Uso'}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dados estruturados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": dictionary.company?.name || "Farias Klug Advocacia",
            "description": dictionary.company?.tagline,
            "url": process.env.NEXT_PUBLIC_SITE_URL,
            "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": footerData.contact.phone,
              "email": footerData.contact.email,
              "contactType": "customer service",
              "availableLanguage": ["pt-BR", "en", "es", "de"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Florianópolis",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "sameAs": [
              footerData.contact.whatsapp,
              footerData.contact.instagram
            ]
          })
        }}
      />
    </motion.footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
