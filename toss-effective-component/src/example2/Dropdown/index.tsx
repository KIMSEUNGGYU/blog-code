import { PropsWithChildren, useState } from 'react';

import { DropdownContext } from './context';
import { Item } from './Item';
import { Menu } from './Menu';
import { Trigger } from './Trigger';

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function Dropdown({ value, onChange, children }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(value);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSelect = (item: string) => {
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
