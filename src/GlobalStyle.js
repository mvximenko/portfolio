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
    font-family: 'Spartan', sans-serif;
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
    line-height: 17px;
  }

  @media only screen and (min-width: 550px) {
    p,
    h2 {
      font-size: 18px;
      line-height: 22px;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    p {
      font-size: 22px;
    }
  }  
`;