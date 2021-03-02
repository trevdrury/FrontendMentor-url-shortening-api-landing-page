import styled from "styled-components";
import { colors } from "../../cssVariables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.2rem;
  height: 100%;
  margin: 8rem 0;
  padding: 0 2.4rem;
  background-color: hsl(225, 32%, 95%);

  @media (min-width: 768px) {
    margin: 12rem 0;
  }
`;

export const AboutSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
`;

export const AboutHeadline = styled.h2`
  font-size: 2.8rem;
  color: ${colors.veryDarkBlue};
  padding: 1.6rem 0;
`;

export const AboutByline = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: ${colors.grayishViolet};
`;

export const AboutSectionDetails = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9.2rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 6rem;
    margin: 0 11vw;
    min-height: 355px;
  }

  @media (min-width: 1158px) {
    gap: 3rem;
  }
`;

export const BackgroundStripe = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 8px;
  height: 100%;
  background-color: ${colors.cyan};

  @media (min-width: 805px) {
    display: none;
  }

  @media (min-width: 1158px) {
    display: block;
    top: 153px;
    width: 1110px;
    height: 8px;
  }
`;
