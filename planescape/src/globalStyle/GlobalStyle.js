import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F0F0F0" : "#232323"};
    color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")};
    transition: all .3s ease-in-out;
  }

  ::placeholder {
    font-size: .89rem;
    font-style: italic;
  }

  nav, footer {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F7F7F7" : "#282828"};
    transition: all .3s ease-in-out;
  }

  .nav-link {
    color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")}
  }

  .myFlight {
    background-color: ${({theme}) => theme == 'light' ? '#FFFFFF' : '#252525'};
  }
`;
