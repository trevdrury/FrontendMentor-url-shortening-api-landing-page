import styled from "styled-components";
import { colors } from "../../cssVariables";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 350px;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 4.1rem 3.2rem;
  padding-top: 7.7rem;
  background-color: white;
  border-radius: 5px;

  @media (min-width: 768px) {
    max-width: 350px;
    max-height: 267px;
    align-items: flex-start;
  }

  @media (min-width: 1158px) {
    &:nth-child(3) {
      margin-top: 44px;
    }

    &:nth-child(4) {
      margin-top: 88px;
    }
  }
`;

export const AboutDetailIcon = styled.div`
  position: absolute;
  top: -4.4rem;
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 50%;
  background-color: ${colors.darkViolet};
  padding: 2.4rem;

  @media (min-width: 768px) {
    left: 3.2rem;
  }
`;

export const AboutDetailHeadline = styled.h2`
  font-size: 2.2rem;
  color: ${colors.veryDarkBlue};
`;

export const AboutDetailByline = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${colors.grayishViolet};

  @media (min-width: 768px) {
    text-align: left;
  }
`;
