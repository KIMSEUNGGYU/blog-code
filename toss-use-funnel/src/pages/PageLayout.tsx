import { ReactNode } from 'react';
import styled from '@emotion/styled';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
}

const PageLayoutWrapper = styled.main`
  margin: 1rem auto;
  max-width: 500px;
  height: calc(97vh - 2rem);
  padding: 1rem;

  border: 1px solid #bfbfbf;
  border-radius: 20px;
`;
