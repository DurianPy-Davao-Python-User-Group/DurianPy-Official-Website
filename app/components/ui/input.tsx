import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex h-10 w-full px-3 py-2 text-base placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      variant: {
        default:
          'border border-neutral-200 bg-white dark:bg-neutral-950 dark:border-neutral-800',
        underline: 'border-0 border-b border-neutral-200 bg-transparent ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// ✅ Fix: Explicitly type the variant prop
interface InputProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
