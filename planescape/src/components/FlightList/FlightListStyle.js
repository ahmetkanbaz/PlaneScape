import styled from "styled-components";

const showandBookFlightButton = `
  background-color: #44018b;
  color: #f5f5f5;
  font-size: .93rem;
`;

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
      ${showandBookFlightButton}
    }
  }

  .singleFlight {
    .position-relative {
      background-color: ${({theme}) => theme == 'light' ? '#FFFFFF' : '#232323'};
    }
    .bookFlightButton {
      ${showandBookFlightButton}
      border-radius: 7px 0 7px 0;
    }
    .checkTheDetails {
      background-color: #e8e0ed;
      color: #44018b;
      font-size: 0.88rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #e7c9f9;
      }
    }
    .otherInfos {
      font-size: .84rem;
    }
  }
`;
