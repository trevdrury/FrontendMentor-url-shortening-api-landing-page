import React from "react";
import {
  Wrapper,
  AboutSectionHeader,
  AboutHeadline,
  AboutByline,
  BackgroundStripe,
  AboutSectionDetails,
} from "./about-section.styles";
import brandRecognition from "../../assets/icon-brand-recognition.svg";
import detailedRecords from "../../assets/icon-detailed-records.svg";
import fullyCustomizable from "../../assets/icon-fully-customizable.svg";
import AboutDetail from "../about-detail/about-detail.component";

const AboutSection = () => {
  return (
    <Wrapper>
      <AboutSectionHeader>
        <AboutHeadline>Advanced Statistics</AboutHeadline>
        <AboutByline>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </AboutByline>
      </AboutSectionHeader>
      <AboutSectionDetails>
        <BackgroundStripe />
        <AboutDetail
          headline="Brand Recognition"
          byline="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          image={brandRecognition}
        />
        <AboutDetail
          offset="-44px"
          headline="Detailed Records"
          byline="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          image={detailedRecords}
        />
        <AboutDetail
          mTop={"44px"}
          headline="Fully Customizable"
          byline="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          image={fullyCustomizable}
        />
      </AboutSectionDetails>
    </Wrapper>
  );
};

export default AboutSection;
