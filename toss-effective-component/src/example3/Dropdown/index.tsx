import { PropsWithChildren, useState } from 'react';

import { DropdownContext } from './context';
import { Item } from './Item';
import { Menu } from './Menu';
import { Modal } from './Modal';
import { Trigger } from './Trigger';

interface Props<T> {
  value: T;
  onChange: (selecteds: T) => void;
}
export function Dropdown<T>({ value, onChange, children }: PropsWithChildren<Props<T>>) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<T>(value);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSelect = (item: T) => {
    setSelect(item);
    onChange(item);
    handleClose();
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        select,
        onOpen: handleOpen,
        onClose: handleClose,
        onSelect: handleSelect,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
Dropdown.Modal = Modal;
