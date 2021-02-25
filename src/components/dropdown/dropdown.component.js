import React from "react";
import Button from "../button/button.component";
import { StyledDropdown, HR } from "./dropdown.styles";
import { DropdownLink } from "../links/menu-link.styles";
import { colors } from "../../cssVariables";

const Dropdown = ({ isOpen }) => {
  return (
    <StyledDropdown isOpen={isOpen}>
      <DropdownLink>Features</DropdownLink>
      <DropdownLink>Pricing</DropdownLink>
      <DropdownLink>Resources</DropdownLink>
      <HR />
      <DropdownLink>Login</DropdownLink>
      <Button size={"medium"} rad="28px" bg={colors.cyan} text="Sign Up" />
    </StyledDropdown>
  );
};

export default Dropdown;
