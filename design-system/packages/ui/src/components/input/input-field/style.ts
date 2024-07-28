import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const inputWrapperVariants = cva(
  cn(
    'bg-white border-gray200 flex items-center justify-center rounded-md px-4 py-2.5 h-11', //
    'focus-within:border-gray700',
  ),
  {
    variants: {
      error: {
        true: 'focus-within:border-danger500 border-danger500',
      },
      disabled: {
        true: 'border-gray200 bg-gray50 text-text300 placeholder:text-text300',
      },
      variant: {
        default: 'border',
        underline: 'border-b rounded-none bg-transparent bg-white px-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
  },
);

export const inputVariants = cva(
  //
  cn(
    'B1 text-text700 w-full outline-none', //
    'placeholder:text-text400',
  ),
  {
    variants: {
      disabled: {
        true: 'text-text300 placeholder:text-text300',
      },
      variant: {
        default: '',
        underline: '',
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
