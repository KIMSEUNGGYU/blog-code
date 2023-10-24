import { useState } from 'react';

import { Dropdown } from '@/example1/Dropdown';
// import {Select} from "@/example1/Select.tsx";

export function ExampleApp1() {
  const [selected, change] = useState('선택');
  const options = ['Next.js', 'Remix', 'Gatsby', 'Relay'];

  return (
    <div>
      <h1>ExampleApp1</h1>
      <Dropdown value={selected} onChange={change}>
        <Dropdown.Trigger as={<button>{selected}</button>} />
        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item key={index} value={option} />
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/*<Select value={selected} onChange={change} trigger={<button>{selected}</button>} options={options} />*/}
    </div>
  );
}
