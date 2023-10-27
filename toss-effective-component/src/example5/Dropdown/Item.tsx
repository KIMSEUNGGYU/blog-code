import styled from '@emotion/styled';

import { useDropdownContext } from './context';

export function Item({ value }: { value: string }) {
  const { select, onSelect } = useDropdownContext();

  return (
    <ItemWrapper>
      <span className={select === value ? 'active' : ''} onClick={() => onSelect(value)}>
        {value}
      </span>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  & span.active {
    color: blue;
    font-weight: bold;
  }
`;
