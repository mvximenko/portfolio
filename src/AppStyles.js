import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1124px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
