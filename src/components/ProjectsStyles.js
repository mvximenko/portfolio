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
  padding: 17px 20px;

  @media only screen and (min-width: 550px) {
    padding: 25px 40px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #62748e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: 550px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 85px;

  @media only screen and (min-width: 1024px) {
    min-width: 120px;
  }
`;

export const Link = styled.a`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0184e8;
  border-radius: 10px;
  transition: ease-in-out 0.15s;
  fill: white;

  &:hover {
    background: #03a9f4;
  }

  @media only screen and (min-width: 1024px) {
    width: 50px;
    height: 50px;
    border-radius: 14px;
  }
`;
