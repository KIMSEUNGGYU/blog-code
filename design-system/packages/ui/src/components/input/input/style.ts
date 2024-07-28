import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const inputVariants = cva(
  cn(
    'B1 text-text700 w-full outline-none h-11', //
    'focus:border-gray700 focus:read-only:border-gray200',
    'placeholder:text-text400',
  ),
  {
    variants: {
      variant: {
        default: 'border border-gray200 rounded-md px-4 py-2.5',
        underline: 'border-b border-gray200 py-2.5',
      },
      error: {
        true: 'border-danger500 focus:border-danger500 focus:read-only:border-danger500',
      },
      disabled: {
        true: cn('text-text300 placeholder:text-text300 bg-gray50 text-text300'),
      },
    },
    compoundVariants: [
      {
        disabled: true,
        variant: 'underline',
        class: 'bg-gray-white',
      },
    ],
  },
);