import styled from "styled-components";
import { colors } from "../../cssVariables";
import bgBoostDesktop from "../../assets/bg-boost-desktop.svg";
import bgBoostMobile from "../../assets/bg-boost-mobile.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  min-height: 300px;
  background: url(${bgBoostMobile}), ${colors.darkViolet};
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    min-height: 250px;
    gap: 3.2rem;
    background: url(${bgBoostDesktop}), ${colors.darkViolet};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ActionTitle = styled.h2`
  font-size: 2.8rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
