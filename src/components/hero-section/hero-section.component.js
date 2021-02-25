import React from "react";
import workingImage from "../../assets/illustration-working.svg";
import Button from "../button/button.component";
import { colors } from "../../cssVariables";
import {
  StyledHeroSection,
  HeroImage,
  HeroTitle,
  HeroContent,
  HeroContentWrapper,
  HeroImageWrapper,
} from "./hero-section.styles";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <HeroImageWrapper>
        <HeroImage src={workingImage} />
      </HeroImageWrapper>
      <HeroContentWrapper>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroContent>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </HeroContent>
        <Button
          size={"large"}
          rad="2.8rem"
          bg={colors.cyan}
          color="white"
          text="Get Started"
        />
      </HeroContentWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection;
