import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export function Menu({ children }: PropsWithChildren) {
  return <MenuWrapper>{children}</MenuWrapper>;
}

const MenuWrapper = styled.ul`
  border-right: 1px solid black;
`;
