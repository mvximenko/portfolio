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
          <Logo desktop={mQuery.matches} />
        </a>
        <Social>
          <Language>
            <Translate desktop={mQuery.matches} />
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
        <Heading>I solve problems for people.</Heading>
        <Paragraph>Hi, I’m George Maximenko.</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          neque quae ipsa eveniet ut enim cumque dolores, tempore consectetur
          optio sapiente quam fugit distinctio totam illo ab rerum? Reiciendis,
          maxime!
        </Paragraph>
      </Content>
    </StyledHeader>
  );
};

export default Header;
