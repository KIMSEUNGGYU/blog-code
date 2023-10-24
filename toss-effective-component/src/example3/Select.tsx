import { ReactNode } from 'react';

import { Dropdown } from './Dropdown';

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  trigger: ReactNode;
  options: string[];
};
export function Select({ value, onChange, trigger, options }: Props) {
  return (
    <Dropdown value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} value={option} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
