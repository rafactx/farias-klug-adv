import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const containerVariants = cva(
  // Base styles - Grid de 12 colunas com padding responsivo
  "mx-auto w-full",
  {
    variants: {
      size: {
        narrow: "max-w-4xl",       // 896px - Para conteúdo focado
        default: "max-w-7xl",      // 1280px - Padrão do projeto
        wide: "max-w-screen-2xl",  // 1536px - Para layouts amplos
        full: "max-w-none"         // Full width quando necessário
      },
      padding: {
        none: "px-0",
        sm: "px-4",               // Mobile
        md: "px-6 md:px-8",       // Tablet
        lg: "px-6 md:px-8 lg:px-12", // Desktop - Gutter de 24px (px-6 = 24px)
        xl: "px-6 md:px-8 lg:px-12 xl:px-16" // Large desktop
      }
    },
    defaultVariants: {
      size: "default",
      padding: "lg"
    }
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: keyof JSX.IntrinsicElements;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, as = 'div', ...props }, ref) => {
    const Component = as as keyof JSX.IntrinsicElements;

    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, padding, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };
