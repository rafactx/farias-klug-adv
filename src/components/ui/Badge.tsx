import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-austera-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[var(--color-primary-500)] text-white shadow hover:bg-[var(--color-primary-600)]',
        secondary: 'border-transparent bg-[var(--color-secondary-500)] text-white shadow hover:bg-[var(--color-secondary-600)]',
        success: 'border-transparent bg-green-500 text-white shadow hover:bg-green-600',
        warning: 'border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-600',
        error: 'border-transparent bg-red-500 text-white shadow hover:bg-red-600',
        outline: 'border-[var(--color-neutral-300)] text-[var(--color-foreground)] hover:bg-[var(--color-neutral-100)]',
        ghost: 'border-transparent text-[var(--color-muted-foreground)] hover:bg-[var(--color-neutral-100)]'
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export function Badge({ className, variant, size, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
}

export { badgeVariants };
