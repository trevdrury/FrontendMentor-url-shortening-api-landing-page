import React from "react";
import {
  Wrapper,
  AboutDetailHeadline,
  AboutDetailByline,
  AboutDetailIcon,
} from "./about-detail.styles";

const AboutDetail = ({ headline, byline, image, offset }) => {
  return (
    <Wrapper offset={offset}>
      <AboutDetailIcon>
        <img src={image} alt="" />
      </AboutDetailIcon>
      <AboutDetailHeadline>{headline}</AboutDetailHeadline>
      <AboutDetailByline>{byline}</AboutDetailByline>
    </Wrapper>
  );
};

export default AboutDetail;
