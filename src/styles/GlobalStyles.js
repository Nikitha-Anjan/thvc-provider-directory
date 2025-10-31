import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ${props => props.theme.font};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,h2,h3 { color: ${props => props.theme.colors.primary}; margin: 0 0 12px 0; }
  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; }
`;

export default GlobalStyles;