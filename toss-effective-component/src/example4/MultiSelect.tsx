import { Button } from './Button.tsx';
import { Dropdown } from './Dropdown';

type MultiSelectProps = {
  value: string[];
  onChange: (value: string[]) => void;
  options: Array<{ label: string }>;
};
export function MultiSelect({ value, onChange, options }: MultiSelectProps) {
  return (
    <Dropdown value={value} onChange={onChange}>
      <Dropdown.Trigger as={<Button>{String(value.length ? value : '선택하기')}</Button>} />
      <Dropdown.Modal
        controls={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type={'reset'}>초기화</Button>
            <Button type={'submit'}>적용하기</Button>
          </div>
        }
      >
        {options.map((framework, index: number) => (
          <Dropdown.Item key={index} value={framework.label} />
        ))}
      </Dropdown.Modal>
    </Dropdown>
  );
}
