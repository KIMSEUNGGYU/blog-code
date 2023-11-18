import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

type RegisterLayoutProps = {
  title: string;
};
export function RegisterLayout({ title, children }: PropsWithChildren<RegisterLayoutProps>) {
  return (
    <>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Title = styled.h1`
  color: gray;
`;
