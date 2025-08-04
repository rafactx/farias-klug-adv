'use client';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button, Container, Text } from '@/components/ui';
// Temporary: Using HTML anchor for smooth scroll
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  const t = useTranslations('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    // Smooth scroll para âncoras
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-[var(--color-card)] border-b border-[var(--color-border)] shadow-sm ${className}`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <Container size="default" padding="lg">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
                      <a
              href="#home"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Farias Klug Advocacia - Página inicial"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
            <Text
              as="span"
              size="xl"
              weight="bold"
              className="text-[var(--color-primary-500)] font-austera-bold tracking-tight"
            >
              Farias Klug
            </Text>
            <Text
              as="span"
              size="sm"
              weight="medium"
              className="text-[var(--color-secondary-500)] font-austera-medium hidden sm:inline"
            >
              Advocacia
            </Text>
            </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-[var(--color-foreground)] hover:text-[var(--color-primary-500)] font-austera-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2 rounded"
                aria-label={`Navegar para ${t(`navigation.${item.key}`)}`}
              >
                {t(`navigation.${item.key}`)}
              </button>
            ))}

            {/* CTA Button */}
            <Button variant="primary" size="sm" className="ml-4">
              {t('navigation.contact_cta')}
            </Button>

            {/* Language Switcher */}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[var(--color-foreground)] hover:text-[var(--color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2 rounded"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col space-y-3 pt-4 border-t border-[var(--color-border)]">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-[var(--color-foreground)] hover:text-[var(--color-primary-500)] font-austera-medium py-2 px-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2"
                aria-label={`Navegar para ${t(`navigation.${item.key}`)}`}
              >
                {t(`navigation.${item.key}`)}
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => handleNavClick('#contact')}
              >
                {t('navigation.contact_cta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
