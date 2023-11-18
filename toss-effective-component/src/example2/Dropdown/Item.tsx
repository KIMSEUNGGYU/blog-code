import styled from '@emotion/styled';

import { useDropdownContext } from './context';

export function Item({ value }: { value: string }) {
  const { select, onSelect } = useDropdownContext();

  return (
    <ItemWrapper className={select === value ? 'active' : ''} onClick={() => onSelect(value)}>
      {value}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  height: 30px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
  }

  &.active {
    background-color: skyblue;
    color: white;
  }
`;
