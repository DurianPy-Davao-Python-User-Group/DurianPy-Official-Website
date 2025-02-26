import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        destructive:
          'bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
        outline:
          'border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        secondary:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        ghost:
          'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
        navLink:
          'p-[10px] border-[1px] hover:bg-transparent border-transparent rounded-[50px] text-tabs-navbar text-white hover:text-primary active:text-primary active:border-primary',
        navLinkMobile:
          'w-full !text-dark-green font-semibold py-[min(36px,3vh)] rounded-[0px] hover:bg-saturated-light-green-opacity-50 hover:shadow-md text-tabs-navbar',
        dropdown:
          'p-[10px] border-[1px] rounded-[50px] border-transparent hover:text-primary hover:border-primary active:bg-primary active:text-dark-green',
        'dropdown-item':
          'h-full w-full bg-primary text-dark-green rounded-[0px] p-[10px] hover:bg-[#FFC20120] hover:text-primary',
        'accordion-dropdown':
          'hover:bg-saturated-light-green-opacity-50 w-full text-[16px] rounded-[0px] text-dark-green p-[16px]',
        transparent:
          'bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0', // like ghost but no hover effect, no focus ring
      },
      size: {
        default: '',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
