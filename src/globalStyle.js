import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    color: black;
  }

  body {
    background-color: #fff;
  }
`;

export default GlobalStyle;