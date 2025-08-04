import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  // Base styles - Austera Text com altura mínima 48px
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-austera transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[48px] px-6",
  {
    variants: {
      variant: {
        // Primary - Verde jurídico com fonte serifada
        primary: "bg-[var(--color-primary-500)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-600)] focus-visible:ring-[var(--color-primary-500)]",

        // Secondary - Terracota elegante
        secondary: "bg-[var(--color-secondary-500)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-600)] focus-visible:ring-[var(--color-secondary-500)]",

        // Outline - Borda com fundo neutro
        outline: "border-2 border-[var(--color-border)] bg-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] focus-visible:ring-[var(--color-ring)]",

        // Ghost - Transparente com hover sutil
        ghost: "hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] focus-visible:ring-[var(--color-ring)]",

        // Link - Estilo de link com underline
        link: "text-[var(--color-primary-500)] underline-offset-4 hover:underline focus-visible:ring-[var(--color-ring)]"
      },
      size: {
        sm: "h-10 px-4 text-sm font-austera-medium",
        md: "h-12 px-6 text-base font-austera-medium",
        lg: "h-14 px-8 text-lg font-austera-semibold",
        xl: "h-16 px-10 text-xl font-austera-semibold"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, iconLeft, iconRight, loading, children, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {iconLeft && !loading && (
          <span className="mr-2" aria-hidden="true">{iconLeft}</span>
        )}
        {children}
        {iconRight && !loading && (
          <span className="ml-2" aria-hidden="true">{iconRight}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
