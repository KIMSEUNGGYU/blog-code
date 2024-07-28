import { cn } from '@/lib/utils';

import { useTooltipContentContext } from './tooltipContentContext';
import { tooltipContentBodyVariants } from './style';

type TooltipContentBodyProps = React.HTMLAttributes<HTMLParagraphElement>;

export function TooltipContentBody({ className, ...props }: TooltipContentBodyProps) {
  const { mode } = useTooltipContentContext();

  return <p className={cn(tooltipContentBodyVariants({ mode }), className)} {...props} />;
}
