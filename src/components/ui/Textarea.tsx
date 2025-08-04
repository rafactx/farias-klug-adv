import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const textareaVariants = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
  {
    variants: {
      variant: {
        default: 'bg-white border border-[var(--color-neutral-300)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]',
        paper: 'bg-[var(--color-background)] border border-[var(--color-neutral-200)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] shadow-sm',
        error: 'bg-white border border-red-300 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-red-500 focus:ring-red-500'
      },
      size: {
        sm: 'px-3 py-2 text-sm rounded-md min-h-[80px]',
        default: 'px-4 py-3 text-base rounded-lg min-h-[120px]',
        lg: 'px-5 py-4 text-lg rounded-xl min-h-[160px]'
      }
    },
    defaultVariants: {
      variant: 'paper',
      size: 'default'
    }
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCharCount?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    variant,
    size,
    label,
    error,
    helperText,
    maxLength,
    showCharCount = false,
    value,
    ...props
  }, ref) => {
    const hasError = !!error;
    const finalVariant = hasError ? 'error' : variant;
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-austera-medium text-[var(--color-foreground)] mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          className={cn(textareaVariants({ variant: finalVariant, size, className }))}
          ref={ref}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        <div className="flex justify-between items-center mt-1">
          <div>
            {(error || helperText) && (
              <p className={cn(
                "text-sm",
                error ? "text-red-600" : "text-[var(--color-muted-foreground)]"
              )}>
                {error || helperText}
              </p>
            )}
          </div>
          {showCharCount && maxLength && (
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
