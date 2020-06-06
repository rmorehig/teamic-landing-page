import { createGlobalStyle } from "styled-components"
import { black } from "./colors"
import { fontFamily } from "./typography"

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color:inherit;
    background-color: transparent;
    text-decoration:none;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  * {
    box-sizing: inherit;
    margin:0;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    color: ${black};
    font-family: ${fontFamily};
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
  }
`
export default GlobalStyle
