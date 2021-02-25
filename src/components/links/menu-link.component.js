import React from "react";
import { StyledLink } from "./menu-link.styles";

const MenuLink = ({ text, url, color, padding }) => {
  return (
    <StyledLink color={color} href={url} padding={padding}>
      {text}
    </StyledLink>
  );
};

export default MenuLink;
