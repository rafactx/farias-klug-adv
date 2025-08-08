'use client';

import { useEffect, type HTMLAttributes } from 'react';

// Intersection Observer for scroll animations
export function VisualEnhancements() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-viewport class
    const elements = document.querySelectorAll('.fade-in-viewport');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // This component doesn't render anything
}

// Advanced card hover effects
export function EnhancedCard({ children, className = '', ...props }: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`hover-lift transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Gradient text effect component
export function GradientText({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-gradient ${className}`}>
      {children}
    </span>
  );
}

// Floating action button with enhanced styling
export function FloatingButton({
  children,
  onClick,
  className = '',
  variant = 'primary'
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}) {
  const baseClasses = "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white",
    secondary: "bg-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-600)] text-white"
  } as const;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Background pattern component
export function BackgroundPattern({ pattern = 'dots', opacity = 0.05 }: {
  pattern?: 'dots' | 'grid' | 'geometric';
  opacity?: number;
}) {
  const patterns = {
    dots: (
      <div className="absolute inset-0" style={{ opacity }}>
        <div className="absolute top-10 left-10 w-2 h-2 bg-[var(--color-primary-500)] rounded-full"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-[var(--color-secondary-500)] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-[var(--color-primary-500)] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-[var(--color-secondary-500)] rounded-full"></div>
      </div>
    ),
    grid: (
      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: `linear-gradient(var(--color-neutral-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-200) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
    ),
    geometric: (
      <div className="absolute inset-0" style={{ opacity }}>
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[var(--color-primary-500)] rounded-full animate-pulse-subtle"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-[var(--color-secondary-500)] rounded-lg rotate-45 animate-float animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-[var(--color-secondary-500)] rotate-12 animate-pulse-subtle animation-delay-400"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-[var(--color-primary-500)] rounded-full animate-float animation-delay-600"></div>
      </div>
    )
  } as const;

  return patterns[pattern];
}

// Progress indicator for scrolling
export function ScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[var(--color-neutral-200)]">
      <div
        id="scroll-progress"
        className="h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] transition-all duration-150"
        style={{ width: '0%' }}
      />
    </div>
  );
}
