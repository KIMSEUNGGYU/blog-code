import { ReactNode } from 'react';

import { useDropdownContext } from './context';

// export const Trigger = ({ children, as }: PropsWithChildren) => {
export const Trigger = ({ as }: { as: ReactNode }) => {
  const context = useDropdownContext();
  const { isOpen, onOpen, onClose } = context;

  // return <div onClick={!isOpen ? onOpen : onClose}>{children}</div>;
  return <div onClick={!isOpen ? onOpen : onClose}>{as}</div>;
};
