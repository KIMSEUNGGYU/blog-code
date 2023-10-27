import styled from '@emotion/styled';

type Props = {
  value?: string;
};
export function InputButton({ value }: Props) {
  return <Input type={'button'} value={value} />;
}

const Input = styled.input`
  border: 1px solid lightgray;
  background-color: transparent;
  width: 200px;
  height: 30px;
  border-radius: 0.25rem;
`;
