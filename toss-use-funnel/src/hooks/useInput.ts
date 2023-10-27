import { ChangeEvent, useState } from 'react';

export function useInput() {
  const [value, setValue] = useState('');

  const hanleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return { value, onChange: hanleChange };
}
