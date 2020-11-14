import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 25px 35px;
  border-radius: 0px 0px 30px 30px;
  background: #fff;
  box-shadow: rgba(209, 230, 255, 0.57) 0px 2px 24px 1px;

  @media only screen and (min-width: 1024px) {
    padding: 20px 30px 90px;
    border-radius: 0px 0px 45px 45px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 55px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  align-self: center;
  max-width: 685px;
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0.43px;
  margin-bottom: 15px;

  @media only screen and (min-width: 550px) {
    font-size: 26px;
    letter-spacing: 0.56px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 42px;
    letter-spacing: 0.9px;
    margin-bottom: 45px;
  }
`;

export const Paragraph = styled.p`
  line-height: 20px;

  &:first-of-type {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1024px) {
    line-height: 30px;

    &:first-of-type {
      margin-bottom: 15px;
    }
  }
`;
