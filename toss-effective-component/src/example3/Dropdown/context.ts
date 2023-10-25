import { createContext, useContext } from 'react';

interface DropdownContextValue<T> {
  isOpen: boolean;
  select?: T;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (item: T) => void;
}

// GYU-TODO: any 타입 변경? -> unknown??
export const DropdownContext = createContext<DropdownContextValue<any> | null>(null);

// Provider 를 정의해도 되지만, Provider 가 Dropdown 이기 때문에 해당 내용을 Dropdown 컴포넌트에서 정의

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error('useDropdownContext must be used within a DropdownProvider');
  }
  return context;
};
