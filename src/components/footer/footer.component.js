import React from "react";
import Logo from "../logo/logo.component";
import { StyledFooter, FooterMenuContainer } from "./footer.styles";
import { FooterLink } from "../links/menu-link.styles";
import MenuSegment from "../menu-segment/menu-segment.component";
import SocialLinks from "../social-links/social-links.component";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo fill={"white"} />
      <FooterMenuContainer>
        <MenuSegment title={"Features"}>
          <FooterLink>Link Shortening</FooterLink>
          <FooterLink>Branded Links</FooterLink>
          <FooterLink>Analytics</FooterLink>
        </MenuSegment>
        <MenuSegment title={"Resources"}>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Developers</FooterLink>
          <FooterLink>Support</FooterLink>
        </MenuSegment>
        <MenuSegment title={"Company"}>
          <FooterLink>About</FooterLink>
          <FooterLink>Our Team</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Contact</FooterLink>
        </MenuSegment>
        <SocialLinks />
      </FooterMenuContainer>
    </StyledFooter>
  );
};

export default Footer;
