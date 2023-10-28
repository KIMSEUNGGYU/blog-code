import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  margin: 0 auto;
  height: 100vh;
`;

export const Layout = styled.div`
  margin: 0 auto;
  width: 320px;
  border: 1px solid black;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: calc(100% - 200px);
  overflow: scroll;
  overflow-x: hidden;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    font-weight: bold;
  }
`;

export const Loading = styled.div`
  text-align: center;
`;
