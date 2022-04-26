import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    background: #FCFCFD;
    color: #000;
    font-family: 'Poppins', sans-serif;
  }
  img{
    display:block;
  }
  body,
  html {
    font-size: calc(16px + (19 - 16) * ((100vw - 320px) / (1920 - 320)));
    scroll-behavior: smooth;
    overflow: hidden;
  }
  input,textarea,button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default Global;