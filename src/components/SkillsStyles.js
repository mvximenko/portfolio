import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  @media only screen and (min-width: 1024px) {
    margin-top: 90px;
  }
`;

export const Heading = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #6e819c;

  @media only screen and (min-width: 550px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
    margin-bottom: 40px;
  }
`;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 30px;
  padding: 30px;
  box-shadow: rgba(209, 230, 255, 0.57) 0px 2px 24px 1px;

  @media only screen and (min-width: 1024px) {
    border-radius: 45px;
    padding: 100px 0px;
  }
`;

export const Skill = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 91px;

  &:nth-of-type(-n + 3) {
    margin-bottom: 60px;
  }

  @media only screen and (min-width: 1024px) {
    width: 33%;
    height: 170px;
  }
`;

export const Paragraph = styled.p`
  color: #62748e;
  font-size: 13px;
  font-weight: 700;

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ background }) => `background: ${background};`}

  @media only screen and (min-width: 1024px) {
    width: 121px;
    height: 121px;
    border-radius: 23px;
  }
`;

export const Logo = styled.span`
  font-size: 35px;
  padding-top: 8px;
  font-weight: 600;
  user-select: none;

  ${({ color }) => `color: ${color};`}

  @media only screen and (min-width: 1024px) {
    font-size: 65px;
    padding-top: 16px;
  }
`;
