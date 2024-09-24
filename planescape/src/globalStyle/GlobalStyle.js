import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    transition: all .3s ease-in-out;
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
    background-color: ${({ theme }) =>
      theme == "light" ? "#FFFFFF" : "#252525"};
  }

  .rightfooter {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: #E0E0E0;
      &:hover {
        color: #FFFFFF;
      }
      &:nth-child(1) {
        &:hover {
          background-color: #EC6B49;
        }
      }
      &:nth-child(2) {
        &:hover {
          background-color: #0A84E8;
        }
      }
      &:nth-child(3) {
        &:hover {
          background-color: #000000;
        }
      }
      &:nth-child(4) {
        &:hover {
          background-color: #F70000;
        }
      }}
  }
`;
