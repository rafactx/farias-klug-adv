import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const inputVariants = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-white border border-[var(--color-neutral-300)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]',
        paper: 'bg-[var(--color-background)] border border-[var(--color-neutral-200)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] shadow-sm',
        error: 'bg-white border border-red-300 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-red-500 focus:ring-red-500'
      },
      size: {
        sm: 'px-3 py-2 text-sm rounded-md',
        default: 'px-4 py-3 text-base rounded-lg',
        lg: 'px-5 py-4 text-lg rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'paper',
      size: 'default'
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, error, helperText, type, ...props }, ref) => {
    const hasError = !!error;
    const finalVariant = hasError ? 'error' : variant;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-austera-medium text-[var(--color-foreground)] mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(inputVariants({ variant: finalVariant, size, className }))}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn(
            "mt-1 text-sm",
            error ? "text-red-600" : "text-[var(--color-muted-foreground)]"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
