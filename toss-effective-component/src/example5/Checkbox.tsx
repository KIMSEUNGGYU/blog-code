import { ChangeEvent, ComponentProps, ReactNode, useId, useState } from 'react';
import styled from '@emotion/styled';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'label'> {
  label?: ReactNode;
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  const checkBoxId = useId();
  const [isChecked, setIsChecked] = useState(rest.checked || false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked);
  };

  return (
    <CheckboxWrapper>
      <CheckboxInput
        id={checkBoxId}
        type="checkbox"
        {...rest}
        value={String(label)}
        onChange={onChange}
        checked={isChecked}
      />
      <LabelWrapper>{label && <label htmlFor={checkBoxId}>{label}</label>}</LabelWrapper>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  color: lightgray;
  line-height: 1.2;
  gap: 0.5rem;
  align-items: center;
`;

const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 0.5rem;
`;

const LabelWrapper = styled.div`
  flex: 1;
  margin-top: 2px;
  color: black;

  label {
    font-size: 14px;
    display: block;
  }
`;
