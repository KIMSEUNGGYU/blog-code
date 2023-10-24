import { useDropdownContext } from './context';

export function Item({ value }: { value: string }) {
  const { select, onSelect } = useDropdownContext();

  return (
    <div className={select === value ? 'active' : ''} onClick={() => onSelect(value)}>
      {value}
    </div>
  );
}
