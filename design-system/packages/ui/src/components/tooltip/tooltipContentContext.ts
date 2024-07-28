import { createContext, useContext } from 'react';

import type { TooltipContentProps } from './TooltipContent';

type TooltipContentContextValue = NonNullable<Pick<TooltipContentProps, 'mode'>>;

export const TooltipContentContext = createContext<TooltipContentContextValue | null>(null);

export const useTooltipContentContext = () => {
  const context = useContext(TooltipContentContext);

  if (context == null) {
    throw new Error('useTooltipContentContext 는 TooltipContent 안에서 사용해야합니다.');
  }

  return context;
};
