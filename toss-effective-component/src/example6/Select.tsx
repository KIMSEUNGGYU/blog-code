import { PropsWithChildren } from 'react';

import { Dropdown } from './Dropdown';

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
};
export function Select({ value, onChange, options, children }: PropsWithChildren<Props>) {
  return (
    <Dropdown value={value} onChange={onChange}>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} value={option} />
        ))}
      </Dropdown.Menu>
      {children}
    </Dropdown>
  );
}
