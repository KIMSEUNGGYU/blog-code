import styled from '@emotion/styled';

import { Button } from '@/components/Button.tsx';
import { Label } from '@/components/Label.tsx';

type Props = {
  onNext: (...args: any) => void;
};
export function 가입방식({ onNext }: Props) {
  const handleClickNext = () => {
    onNext('010-1234-5678');
  };

  return (
    <가입방식Wrapper>
      <section style={{ flex: 1 }}>
        <h1>지금 휴대폰 번호를 그대로 쓸까요?</h1>
        <Label>휴대폰 번호</Label>
        <Text>010-1234-5678</Text>
      </section>
      <section>
        <Button onClick={handleClickNext}>내 번호 그대로 쓰기</Button>
      </section>
    </가입방식Wrapper>
  );
}

const 가입방식Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 20px;
  color: #0c4dd2;
  font-weight: bold;
`;
