import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 35px 0 40px;

  @media only screen and (min-width: 1024px) {
    margin: 90px 0 100px;
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-bottom: auto;

  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Case = styled.div`
  width: 100%;
  height: 252px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: rgba(209, 230, 255, 0.57) 0px 2px 24px 1px;
  margin-bottom: 20px;

  @media only screen and (min-width: 550px) {
    height: 380px;
  }

  @media only screen and (min-width: 1024px) {
    width: 48%;
    height: 369px;
    border-radius: 45px;
    margin-bottom: 40px;
  }
`;

export const Cover = styled.div`
  width: 100%;
  flex: 1 1 0%;
  background-size: cover;

  ${({ image }) => `background-image: url(${image});`}
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 17px 40px;

  @media only screen and (min-width: 1024px) {
    padding: 25px 60px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #62748e;

  @media only screen and (min-width: 550px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Button = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0184e8;
  border-radius: 10px;

  @media only screen and (min-width: 1024px) {
    width: 50px;
    height: 50px;
    border-radius: 14px;
  }
`;
