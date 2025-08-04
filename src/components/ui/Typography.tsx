import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// Heading Component
const headingVariants = cva(
  "font-austera tracking-tight",
  {
    variants: {
      level: {
        1: "text-4xl md:text-6xl font-austera-bold leading-tight",
        2: "text-3xl md:text-4xl font-austera-semibold leading-tight",
        3: "text-2xl md:text-3xl font-austera-semibold leading-snug",
        4: "text-xl md:text-2xl font-austera-medium leading-snug",
        5: "text-lg md:text-xl font-austera-medium leading-normal",
        6: "text-base md:text-lg font-austera-medium leading-normal"
      },
      color: {
        default: "text-[var(--color-foreground)]",
        primary: "text-[var(--color-primary-500)]",
        secondary: "text-[var(--color-secondary-500)]",
        muted: "text-[var(--color-muted-foreground)]"
      }
    },
    defaultVariants: {
      level: 1,
      color: "default"
    }
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, as, ...props }, ref) => {
    const Component = as || `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, color, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

// Paragraph Component
const paragraphVariants = cva(
  "font-austera leading-relaxed",
  {
    variants: {
      size: {
        sm: "text-sm font-austera-light",
        base: "text-base font-austera-regular",
        lg: "text-lg font-austera-light",
        xl: "text-xl font-austera-light"
      },
      color: {
        default: "text-[var(--color-foreground)]",
        muted: "text-[var(--color-muted-foreground)]",
        accent: "text-[var(--color-secondary-500)]"
      }
    },
    defaultVariants: {
      size: "base",
      color: "default"
    }
  }
);

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, color, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(paragraphVariants({ size, color, className }))}
      {...props}
    />
  )
);

Paragraph.displayName = "Paragraph";

// Link Component
const linkVariants = cva(
  "font-austera-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)] hover:underline underline-offset-4",
        subtle: "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:underline underline-offset-4",
        accent: "text-[var(--color-secondary-500)] hover:text-[var(--color-secondary-600)] hover:underline underline-offset-4"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(linkVariants({ variant, className }))}
      {...props}
    />
  )
);

Link.displayName = "Link";

// Text with emphasis
const emphasisVariants = cva(
  "font-austera",
  {
    variants: {
      variant: {
        strong: "font-austera-semibold",
        emphasis: "font-austera-medium italic",
        highlight: "bg-[var(--color-secondary-100)] px-1 py-0.5 rounded font-austera-medium",
        quote: "font-austera-light italic border-l-4 border-[var(--color-primary-500)] pl-4"
      }
    },
    defaultVariants: {
      variant: "strong"
    }
  }
);

export interface EmphasisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof emphasisVariants> {
  as?: 'span' | 'strong' | 'em' | 'mark' | 'blockquote';
}

const Emphasis = React.forwardRef<HTMLElement, EmphasisProps>(
  ({ className, variant, as = 'span', ...props }, ref) => {
    const Component = as as keyof JSX.IntrinsicElements;

    return (
      <Component
        ref={ref}
        className={cn(emphasisVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Emphasis.displayName = "Emphasis";

// Utility Text component for one-off styling
const textVariants = cva(
  "font-austera",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl"
      },
      weight: {
        extralight: "font-austera-extralight",
        light: "font-austera-light",
        regular: "font-austera-regular",
        medium: "font-austera-medium",
        semibold: "font-austera-semibold",
        bold: "font-austera-bold"
      },
      color: {
        default: "text-[var(--color-foreground)]",
        primary: "text-[var(--color-primary-500)]",
        secondary: "text-[var(--color-secondary-500)]",
        muted: "text-[var(--color-muted-foreground)]",
        white: "text-white"
      }
    },
    defaultVariants: {
      size: "base",
      weight: "regular",
      color: "default"
    }
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, weight, color, as = 'span', ...props }, ref) => {
    const Component = as as keyof JSX.IntrinsicElements;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, color, className }))}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export {
    Emphasis, emphasisVariants, Heading, headingVariants, Link, linkVariants, Paragraph, paragraphVariants, Text, textVariants
};
