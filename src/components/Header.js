import { useState, useEffect } from 'react';
import Logo from './Logo';
import Translate from './Translate';
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
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', setMQuery);
    return () => mediaQuery.removeEventListener('change', setMQuery);
  }, []);

  return (
    <StyledHeader>
      <Nav>
        <a href='#'>
          <Logo desktop={mQuery.matches} />
        </a>
        <Social>
          <Language>
            <Translate desktop={mQuery.matches} />
            <Span>English</Span>
          </Language>
          <a href='https://github.com/mvximenko' target='_blank'>
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
