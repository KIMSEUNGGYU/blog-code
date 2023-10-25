import { Button } from './Button.tsx';
import { Dropdown } from './Dropdown';

type FrameworkMultiSelectProps = {
  selectedFrameworks: string[];
  onFrameworkChange: (selecteds: string[]) => void;
  frameworks: Array<{ label: string }>;
};
export function FrameworkMultiSelect({ selectedFrameworks, onFrameworkChange, frameworks }: FrameworkMultiSelectProps) {
  return (
    <Dropdown value={selectedFrameworks} onChange={onFrameworkChange}>
      <Dropdown.Trigger as={<Button>{String(selectedFrameworks.length ? selectedFrameworks : '선택하기')}</Button>} />
      <Dropdown.Modal
        controls={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type={'reset'}>초기화</Button>
            <Button type={'submit'}>적용하기</Button>
          </div>
        }
      >
        {frameworks.map((framework, index: number) => (
          <Dropdown.Item key={index} value={framework.label} />
        ))}
      </Dropdown.Modal>
    </Dropdown>
  );
}
