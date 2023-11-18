import { ReactNode, useState } from 'react';

import { Dropdown } from './Dropdown';

type Props = {
  options: string[];
  children: ({ selected }: { selected: string }) => ReactNode;
};
export function Select({ options, children }: Props) {
  const [value, change] = useState<string>(options[0]);
  return (
    <Dropdown value={value} onChange={change}>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} value={option} />
        ))}
      </Dropdown.Menu>
      {children({ selected: value })}
    </Dropdown>
  );
}
