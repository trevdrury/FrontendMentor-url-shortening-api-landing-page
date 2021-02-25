import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { colors } from "../../cssVariables";
import Burger from "../burger/burger.component";
import Logo from "../logo/logo.component";
import Dropdown from "../dropdown/dropdown.component";
import HeaderMenu from "../header-menu/header-menu.component";
import { Wrapper, Nav } from "./header.styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width] = useWindowSize();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (width < 769) {
    return (
      <Wrapper>
        <Nav>
          <Logo fill={colors.veryDarkBlue} />
          <Burger handleClick={handleClick} />
          <Dropdown isOpen={isOpen} />
        </Nav>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Nav>
          <Logo fill={colors.veryDarkBlue} />
          <HeaderMenu />
        </Nav>
      </Wrapper>
    );
  }
};

export default Header;
