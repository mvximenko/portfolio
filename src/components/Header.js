import Logo from './assets/Logo';
import Translate from './assets/Translate';
import useMediaQuery from '../hooks/useMediaQuery';
import {
  StyledHeader,
  Nav,
  Social,
  Language,
  Span,
  Content,
  Heading,
  Paragraph,
} from './HeaderStyles';

const Header = () => {
  const mQuery = useMediaQuery();

  return (
    <StyledHeader>
      <Nav>
        <a href='#' rel='noreferrer'>
          <Logo desktop={mQuery} />
        </a>
        <Social>
          <Language>
            <Translate desktop={mQuery} />
            <Span>English</Span>
          </Language>
          <a
            href='https://github.com/mvximenko'
            target='_blank'
            rel='noreferrer'
          >
            <Span>Github</Span>
          </a>
        </Social>
      </Nav>
      <Content>
        <Heading>Hi, I’m George Maximenko.</Heading>
        <Paragraph>
          I'm experienced front-end developer with a passion to create awesome
          high-quality products.
        </Paragraph>
        <Paragraph>Always up for learning new things.</Paragraph>
      </Content>
    </StyledHeader>
  );
};

export default Header;
