import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  html {
    scroll-behavior: smooth;
    font-family: 'Roboto Mono', monospace;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  section {
    margin-top: 2em;
  }
`;