import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Goudy Old Style';
    src: url('./static/fonts/Goudy Old Style Regular.ttf');
  }
  #root {
    height: inherit;
  }
  body {
  }
  body, html {
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Goudy Old Style';
    padding: 0;
    margin: 0;
  }
  p {
    font-family: 'Goudy Old Style'
  }
  div {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`