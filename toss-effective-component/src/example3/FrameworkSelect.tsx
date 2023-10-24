import { useState } from 'react';

import { InputButton } from './InputButton.tsx';
import { Select } from './Select';
import { useFrameworks } from './useFrameworks.ts';

export function FrameworkSelect() {
  const {
    data: { frameworks },
  } = useFrameworks();
  const [selected, change] = useState<string>('');

  return (
    <Select //
      trigger={<InputButton value={selected} />}
      value={selected}
      onChange={change}
      options={frameworks}
    />
  );
}
