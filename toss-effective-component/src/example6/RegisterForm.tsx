import { useId } from 'react';
import styled from '@emotion/styled';

export function RegisterForm({ bank }: { bank: string }) {
  const id = useId();
  return (
    <RegisterFormWrapper>
      <Title>{bank} 등록</Title>
      <Form>
        <Label htmlFor={id}>계좌번호</Label>
        <Input id={id} />
      </Form>
    </RegisterFormWrapper>
  );
}

const RegisterFormWrapper = styled.div``;

const Title = styled.h2`
  color: gray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: gray;
  font-weight: bold;
`;
const Input = styled.input`
  min-width: 300px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
`;
