"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import React, { useRef, useState } from "react";

/* ──────────────────────────────────
   Interfaces
────────────────────────────────── */
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
  currentPath?: string; // opcional para aria-current
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}
interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}
interface NavbarLogoProps {
  size?: "default" | "compact";
  className?: string;
}
interface NavbarButtonProps {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "dark"
    | "gradient"
    | "farias";
  onClick?: () => void;
}

/* ──────────────────────────────────
   Navbar wrapper – scroll handler
────────────────────────────────── */
export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState<boolean>(true); // evita "salto" inicial

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 50));

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

/* ──────────────────────────────────
   Desktop container
────────────────────────────────── */
export const NavBody = ({
  children,
  className,
  visible,
}: NavBodyProps) => (
  <motion.nav
    role="navigation"
    animate={{
      backdropFilter: visible ? "blur(12px)" : "none",
      boxShadow: visible ? "0 1px 4px rgba(0,0,0,.04)" : "none",
      paddingTop: visible ? "0.5rem" : "1rem",
      paddingBottom: visible ? "0.5rem" : "1rem",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 40 }}
    className={cn(
      "relative mx-auto flex w-full max-w-7xl items-center justify-between bg-[#CEBAA3] px-6 transition-all duration-300 ease-in-out",
      visible &&
        "bg-[#CEBAA3]/95 backdrop-blur-md border-b border-[#1E2B1A]/10",
      className,
    )}
  >
    {children}
  </motion.nav>
);

/* ──────────────────────────────────
   Desktop links
────────────────────────────────── */
export const NavItems = ({
  items,
  className,
  onItemClick,
  currentPath,
}: NavItemsProps) => (
  <ul
    className={cn(
      "hidden lg:flex flex-1 items-center justify-center gap-6",
      className,
    )}
  >
    {items.map((item) => {
      const isActive = currentPath === item.link;
      return (
        <li key={item.link}>
          <motion.a
            href={item.link}
            onClick={onItemClick}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className={cn(
              "group relative px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 ease-in-out",
              isActive
                ? "text-[#8E4616]"
                : "text-[#1E2B1A]/90 hover:text-[#8E4616]",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.name}
            {/* underline */}
            <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </motion.a>
        </li>
      );
    })}
  </ul>
);

/* ──────────────────────────────────
   Mobile containers
────────────────────────────────── */
export const MobileNav = ({
  children,
  className,
  visible,
}: MobileNavProps) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(12px)" : "none",
      boxShadow: visible ? "0 1px 4px rgba(0,0,0,.04)" : "none",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 40 }}
    className={cn(
      "relative z-50 flex w-full flex-col items-center justify-between bg-[#CEBAA3] lg:hidden transition-all duration-300 ease-in-out",
      visible &&
        "bg-[#CEBAA3]/95 backdrop-blur-md border-b border-[#1E2B1A]/10",
      className,
    )}
  >
    {children}
  </motion.div>
);

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => (
  <div className={cn("flex w-full items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col gap-6 bg-[#CEBAA3]/98 backdrop-blur-md px-6 py-8 shadow-[0_1px_4px_rgba(0,0,0,.04)] border-b border-[#1E2B1A]/10",
          className,
        )}
      >
        {React.Children.map(children, (child, i) =>
          React.isValidElement(child) ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="w-full"
            >
              {React.cloneElement(child as React.ReactElement<{ className?: string }>, {
                className: cn(
                  (child as React.ReactElement<{ className?: string }>).props.className || "",
                  "block w-full py-3 text-lg font-medium text-[#1E2B1A]/90 hover:text-[#8E4616] transition-colors duration-300 ease-in-out",
                ),
              })}
            </motion.div>
          ) : (
            child
          ),
        )}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
}: MobileNavToggleProps) => (
  <motion.button
    whileTap={{ scale: 0.92 }}
    onClick={onClick}
    className={cn(
      "p-2 rounded-md hover:bg-[#1E2B1A]/5 transition-colors duration-200",
      className,
    )}
    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    type="button"
  >
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <motion.div
          key="close"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconX className="h-6 w-6 text-[#1E2B1A]" />
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconMenu2 className="h-6 w-6 text-[#1E2B1A]" />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

/* ──────────────────────────────────
   Logo
────────────────────────────────── */
export const NavbarLogo = ({
  size = "default",
  className,
}: NavbarLogoProps) => (
  <a
    href="#"
    aria-label="Farias Klug Advocacia – página inicial"
    className={cn("relative z-20 flex items-center select-none", className)}
  >
    <img
      src="/images/farias.png"
      alt="Farias Klug Advocacia"
      className={cn(
        "w-auto transition-all duration-300",
        size === "compact" ? "h-8 sm:h-10" : "h-10 sm:h-12 lg:h-14",
      )}
    />
  </a>
);

/* ──────────────────────────────────
   Botão reutilizável
────────────────────────────────── */
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: NavbarButtonProps &
  (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-4 py-2 text-sm font-medium inline-block cursor-pointer transition-all duration-200 ease-in-out text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8E4616]/50";

  const variantStyles = {
    primary:
      "bg-[#8E4616] text-white hover:bg-[#6B3410] ring-1 ring-[#1E2B1A]/10 hover:ring-[#1E2B1A]/20 shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-[#1E2B1A]/90 hover:text-[#8E4616] hover:bg-[#1E2B1A]/5 rounded-md",
    dark:
      "bg-[#1E2B1A] text-white hover:bg-[#0F1A0D] ring-1 ring-white/10 hover:ring-white/20 shadow-sm hover:shadow-md",
    gradient:
      "bg-gradient-to-r from-[#8E4616] to-[#6B3410] text-white ring-1 ring-[#1E2B1A]/10 hover:ring-[#1E2B1A]/20 shadow-sm hover:shadow-md hover:from-[#6B3410] hover:to-[#8E4616]",
    farias:
      "bg-white text-[#1E2B1A] hover:bg-gray-50 ring-1 ring-[#1E2B1A]/10 hover:ring-[#1E2B1A]/20 shadow-sm hover:shadow-md",
  };

  return (
    <Tag
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
