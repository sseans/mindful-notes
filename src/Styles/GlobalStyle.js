import { createGlobalStyle } from "styled-components";
import variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  html {
    box-sizing: border-box;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
        font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
