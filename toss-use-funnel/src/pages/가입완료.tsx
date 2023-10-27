import styled from '@emotion/styled';

import { Button } from '@/components/Button.tsx';

type Props = {
  onNext: (...args: any) => void;
};
export function 가입완료({ onNext }: Props) {
  return (
    <Wrapper>
      <section style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>👍 가입완료</h1>
      </section>
      <section>
        <Button onClick={onNext}>다음</Button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
