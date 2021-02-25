import React from "react";
import Button from "../button/button.component";
import { MenuWrapper, MenuLeft, MenuRight } from "./header-menu.styles";
import { HeaderLink } from "../links/menu-link.styles";
import { colors } from "../../cssVariables";

const HeaderMenu = () => {
  return (
    <MenuWrapper>
      <MenuLeft>
        <HeaderLink>Features</HeaderLink>
        <HeaderLink>Pricing</HeaderLink>
        <HeaderLink>Resources</HeaderLink>
      </MenuLeft>
      <MenuRight>
        <HeaderLink>Login</HeaderLink>
        <Button
          size={"small"}
          fontSize="1.5rem"
          rad="28px"
          bg={colors.cyan}
          color="white"
          text="Sign Up"
          margin="0 0 0 1.6rem"
        />
      </MenuRight>
    </MenuWrapper>
  );
};

export default HeaderMenu;
