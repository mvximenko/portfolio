import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: rgb(242, 248, 255);
    font-family: 'Spartan', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  a {
    color: inherit; 
    text-decoration: none;
   }
  
  p,
  span {
    color: rgba(0, 0, 0, 0.65);
  }

  p,
  h2 {
    margin: 0;
    font-size: 15px;
  }

  @media only screen and (min-width: 550px) {
    p,
    h2 {
      font-size: 18px;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    p {
      font-size: 22px;
    }
  }  
`;
