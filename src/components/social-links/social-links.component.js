import React from "react";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import { StyledSocialLinks, StyledImg } from "./social-links.styles";

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <StyledImg src={facebookIcon} alt="facebook icon" />
      <StyledImg src={twitterIcon} alt="twitter icon" />
      <StyledImg src={pinterestIcon} alt="pinterest icon" />
      <StyledImg src={instagramIcon} alt="instagram icon" />
    </StyledSocialLinks>
  );
};

export default SocialLinks;
