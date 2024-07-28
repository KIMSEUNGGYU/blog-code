'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { TooltipContentProps as _TooltipContentProps } from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import { TooltipContentContext } from './tooltipContentContext';
import { tooltipContentVariants } from './style';
import { TooltipContentTitle } from './TooltipContentTitle';
import { TooltipContentBody } from './TooltipContentBody';

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  mode?: 'normal' | 'tutorial'; // ??
  arrowTip?: boolean;
  placement?: _TooltipContentProps['side'];
}

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, mode = 'normal', arrowTip = true, placement, children, ...props }, ref) => (
    <TooltipPrimitive.Content
      className={cn(tooltipContentVariants({ mode }), className)}
      ref={ref}
      side={placement}
      sideOffset={sideOffset}
      {...props}
    >
      <TooltipContentContext.Provider value={{ mode }}>{children}</TooltipContentContext.Provider>
      {arrowTip ? <TooltipPrimitive.Arrow className="fill-gray800 h-1 w-2" /> : null}
    </TooltipPrimitive.Content>
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const CompoundTooltipContent = Object.assign(TooltipContent, {
  Title: TooltipContentTitle,
  Body: TooltipContentBody,
});

export { CompoundTooltipContent as TooltipContent };
