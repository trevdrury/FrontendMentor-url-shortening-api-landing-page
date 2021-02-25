import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../cssVariables";
import { Wrapper } from "./burger.styles";

const Burger = ({ handleClick }) => {
  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faBars}
        color={colors.grayishViolet}
        size="lg"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </Wrapper>
  );
};

export default Burger;
