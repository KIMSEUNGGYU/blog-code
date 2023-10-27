import styled from '@emotion/styled';

import { useDropdownContext } from './context';
import { Checkbox } from '../Checkbox';

export function Item({ value }: { value: string }) {
  const { select } = useDropdownContext();

  return (
    <ItemWrapper>
      <Checkbox label={value} checked={select?.includes(value)} />
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
