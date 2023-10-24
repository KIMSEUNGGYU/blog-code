import { PropsWithChildren } from 'react';

import { useDropdownContext } from './context';

export function Menu({ children }: PropsWithChildren) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
