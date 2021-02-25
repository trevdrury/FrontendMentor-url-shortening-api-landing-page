import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ size, rad, bg, text, handleClick }) => {
  return (
    <StyledButton size={size} rad={rad} bg={bg} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
