import styled from "styled-components";

export const FlightListWrapper = styled.section`
  background-color: ${({ theme }) =>
    theme == "light" ? "#EBECF1" : "#333333"};

  .exploreMore {
    .singleImage,
    img {
      height: 230px;
    }
  }

  .flightFilterBar {
    background-color: ${({ theme }) =>
      theme == "light" ? "#FFFFFF" : "#252525"};
    span {
      font-size: 0.81rem;
    }

    label {
      background-color: #f0f0f0;
      border-color: #44018b;
      color: #44018b;
      font-size: 0.89rem;
      &:hover {
        border-color: #44018b;
      }
    }
    .btn-check:checked + label {
      background-color: #44018b;
      color: #f5f5f5;
    }
    .showButton {
      background-color: #44018b;
      color: #f5f5f5;
      font-size: .93rem;
    }
  }
`;
