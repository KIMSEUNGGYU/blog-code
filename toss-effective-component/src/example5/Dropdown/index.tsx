import { PropsWithChildren, useState } from 'react';

import { DropdownContext } from './context';
import { Item } from './Item';
import { Menu } from './Menu';

interface Props<T> {
  value: T;
  onChange: (selecteds: T) => void;
}
export function Dropdown<T>({ value, onChange, children }: PropsWithChildren<Props<T>>) {
  const [select, setSelect] = useState<T>(value);

  const handleSelect = (item: T) => {
    setSelect(item);
    onChange(item);
  };

  return (
    <DropdownContext.Provider
      value={{
        select,
        onSelect: handleSelect,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

Dropdown.Menu = Menu;
Dropdown.Item = Item;
