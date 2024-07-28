import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const tooltipContentVariants = cva(
  cn(
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 z-50 overflow-hidden rounded text-sm shadow-md',
    'bg-gray800 text-white', // custom
  ),
  {
    variants: {
      mode: {
        normal: 'C1_400 max-w-[219px] px-2 py-1.5 rounded',
        tutorial: 'B1 max-w-[296px] p-4 rounded-md',
      },
    },
  },
);

export const tooltipContentTitleVariants = cva(
  cn(
    'flex items-start gap-1 text-text-white', //
  ),
  {
    variants: {
      mode: {
        normal: 'C1_500', // truncate 는 외부(사용하는 곳)에서 처리하는게 확장성이 좋을거 같음..
        tutorial: 'T2_700',
      },
    },
  },
);

export const tooltipContentBodyVariants = cva(cn('text-text-white'), {
  variants: {
    mode: {
      normal: 'C1_400',
      tutorial: 'B1',
    },
  },
});
