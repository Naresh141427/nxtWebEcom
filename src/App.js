import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto";
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    margin: 0;
  }

  input, textarea {
  user-select: text;
  -webkit-user-select: text;
}


`;
