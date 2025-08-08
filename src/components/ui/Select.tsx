import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const selectVariants = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-no-repeat bg-right bg-[length:16px_16px] cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-white border border-[var(--color-neutral-300)] text-[var(--color-foreground)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]',
        paper: 'bg-[var(--color-background)] border border-[var(--color-neutral-200)] text-[var(--color-foreground)] focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] shadow-sm',
        error: 'bg-white border border-red-300 text-[var(--color-foreground)] focus:border-red-500 focus:ring-red-500'
      },
      size: {
        sm: 'px-3 py-2 text-sm rounded-md pr-8',
        default: 'px-4 py-3 text-base rounded-lg pr-10',
        lg: 'px-5 py-4 text-lg rounded-xl pr-12'
      }
    },
    defaultVariants: {
      variant: 'paper',
      size: 'default'
    }
  }
);

type NativeSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends NativeSelectProps,
    VariantProps<typeof selectVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, label, error, helperText, options, placeholder, ...props }, ref) => {
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
        <div className="relative">
          <select
            className={cn(selectVariants({ variant: finalVariant, size, className }))}
            ref={ref}
            {...props}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`
            }}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
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

Select.displayName = 'Select';

export { Select, selectVariants };
