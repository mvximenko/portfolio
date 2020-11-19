import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid rgb(209, 230, 255);
  text-align: center;
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
`;

const Footer = () => (
  <StyledFooter>
    <p>Invite me for a ☕ at test@gmail.com</p>
  </StyledFooter>
);

export default Footer;
