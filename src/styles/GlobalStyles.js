import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body, 
  #root {
    height: 100vh;
  }

  body,
  input,
  button {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.025rem;
  }

  body {
    font-weight: 300;
    position: relative;
    background-color: ${({ theme })=> theme.color.backgroundColor};
    background: ${({ theme })=> theme.color.backgroundGradient};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    line-height: 1.75rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  button {
    cursor: pointer;
  }
`;
