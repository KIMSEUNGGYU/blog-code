import { FormEvent, PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';

import { useDropdownContext } from './context.ts';

type ModalProps = {
  controls: ReactNode;
};
export function Modal({ children, controls }: PropsWithChildren<ModalProps>) {
  const { isOpen, onSelect } = useDropdownContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkedCheckbox = event.currentTarget.querySelectorAll<HTMLInputElement>("input[type='checkbox']:checked");
    const values = [...checkedCheckbox].map((checkbox) => checkbox.value);
    onSelect(values);
  };

  if (!isOpen) return null;
  return (
    <ModalWrapper onSubmit={handleSubmit}>
      {children}
      {controls}
    </ModalWrapper>
  );
}

const ModalWrapper = styled.form`
  margin-top: 1rem;
  margin-left: 1rem;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  width: 200px;
  box-shadow: 7px 11px 15px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 7px 11px 15px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 7px 11px 15px 0px rgba(0, 0, 0, 0.14);
`;
