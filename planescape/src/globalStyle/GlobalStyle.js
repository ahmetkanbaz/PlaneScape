import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme == 'light' ? '#F7F7F7' : '#232323'};
    color: ${({theme}) => theme == 'light' ? '#000000' : '#F5F5F5'};
    transition: all .3s ease-in-out;
  }

  .nav-link {
    color: ${({theme}) => theme == 'light' ? '#000000' : '#F5F5F5'}
  }
`;
