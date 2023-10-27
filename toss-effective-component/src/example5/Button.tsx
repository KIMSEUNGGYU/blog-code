import { ComponentProps } from 'react';
import styled from '@emotion/styled';

export function Button({ children, ...rest }: ComponentProps<'button'>) {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(211, 211, 211, 0.3);
  border: 1px solid rgba(211, 211, 211, 0.5);

  &[type='reset'] {
    background-color: transparent;
    border: none;
    color: gray;
  }

  &[type='submit'] {
    background-color: transparent;
    border: none;
    color: blue;
  }
`;
