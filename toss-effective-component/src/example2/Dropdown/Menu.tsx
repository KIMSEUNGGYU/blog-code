import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { useDropdownContext } from './context';

export function Menu({ children }: PropsWithChildren) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;
  return (
    <MenuWrapper>
      <div>{children}</div>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.ul`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  width: 100px;
  box-shadow: 7px 11px 15px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 7px 11px 15px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 7px 11px 15px 0px rgba(0, 0, 0, 0.14);
`;
