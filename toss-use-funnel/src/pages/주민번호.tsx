import styled from '@emotion/styled';

import { Button } from '@/components/Button.tsx';
import { Input } from '@/components/Input.tsx';
import { Label } from '@/components/Label.tsx';
import { useInput } from '@/hooks/useInput.ts';

type Props = {
  onNext: (...args: any) => void;
};
export function 주민번호({ onNext }: Props) {
  const { value, onChange } = useInput();

  const handleClickNext = () => {
    if (value.trim() === '') {
      return;
    }

    onNext(value);
  };

  return (
    <Wrapper>
      <section style={{ flex: 1, width: '100%' }}>
        <h1>주민번호 뒷자리를 입력해주세요</h1>
        <Label htmlFor="resident">주민등록번호</Label>
        <Input id="resident" autoFocus maxLength={6} value={value} onChange={onChange} placeholder="990530" />
      </section>
      <section>
        <Button onClick={handleClickNext}>다음</Button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
