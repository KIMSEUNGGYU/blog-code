import styled from '@emotion/styled';

export const Wrapper = styled.main`
  width: 100vw;
  //height: 100vh;
`;

export const Layout = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 100%;
  border: 1px solid black;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.li`
  list-style: none;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    font-weight: bold;
  }
`;
