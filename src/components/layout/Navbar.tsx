"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function NavbarComponent() {
  const navItems = [
    {
      name: "Sobre",
      link: "#sobre",
    },
    {
      name: "Áreas de Atuação",
      link: "#areas",
    },
    {
      name: "Conteúdos",
      link: "#conteudos",
    },
    {
      name: "Mídia",
      link: "#midia",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo size={isScrolled ? "compact" : "default"} />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="primary" href="#contato">Fale Conosco</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo size={isScrolled ? "compact" : "default"} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-[#1E2B1A] hover:text-[#8E4616] font-medium"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
              href="#contato"
            >
              Fale Conosco
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
