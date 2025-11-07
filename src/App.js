import { createGlobalStyle } from "styled-components";
import { MobilebreakPoints } from "./Breakpoints/breakpoints";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto";
  }

  #root {
    margin: 0;
  }



`;
