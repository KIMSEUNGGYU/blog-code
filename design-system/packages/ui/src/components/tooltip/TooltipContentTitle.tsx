import * as React from 'react';

import { cn } from '@/lib/utils';

import { useTooltipContentContext } from './tooltipContentContext';
import { tooltipContentTitleVariants } from './style';

interface TooltipContentTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  icon?: React.ReactNode;
}

export function TooltipContentTitle({ icon, className, children, ...props }: TooltipContentTitleProps) {
  const { mode } = useTooltipContentContext();

  return (
    <p className={cn(tooltipContentTitleVariants({ mode }), className)} {...props}>
      {icon ? <div className="min-w-5">{icon}</div> : null}
      {children}
    </p>
  );
}
