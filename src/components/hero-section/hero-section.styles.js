import styled from "styled-components";
import { colors } from "../../cssVariables";

export const StyledHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2.4rem;
  padding-bottom: 16.8rem;
  background-color: white;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 7.8rem 0 16.8rem 11vw;
  }

  @media (min-width: 1200px) {
    padding-bottom: 15.2rem;
  }
`;

export const HeroImageWrapper = styled.div`
  align-self: flex-start;

  @media (min-width: 559px) {
    align-self: center;
  }

  @media (min-width: 768px) {
    min-width: 50%;
    max-width: 564px;
    overflow: visible;
  }
`;

export const HeroImage = styled.img`
  width: 511px;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 733px;
    margin-left: 10%;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 564px;
  text-align: center;
  padding: 1.4rem 0;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    padding: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4.2rem;
  font-weight: bold;
  line-height: 4.8rem;
  padding-top: 1.5rem;
  color: ${colors.veryDarkBlue};

  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 6rem;
    letter-spacing: -2px;
    padding: 0;
  }

  @media (min-width: 1200px) {
    font-size: 8rem;
    line-height: 9rem;
  }
`;

export const HeroContent = styled.p`
  font-size: 1.8rem;
  font-weight: medium;
  line-height: 3rem;
  color: ${colors.grayishViolet};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
`;
