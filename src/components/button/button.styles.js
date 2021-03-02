import styled from "styled-components";
import { colors } from "../../cssVariables";

// width, height, font-size
const SIZES = {
  small: ["105px", "40px", "1.5rem"],
  smallWide: ["295px", "40px", "1.6rem"],
  medium: ["279px", "48px", "1.8rem"],
  large: ["197px", "56px", "2rem"],
  xLarge: ["188px", "64px", "2rem"],
};

const handleButtonSize = (size) => {
  if (size) {
    return `width: ${SIZES[`${size}`][0]};
            height: ${SIZES[`${size}`][1]};
            font-size: ${SIZES[`${size}`][2]};`;
  } else {
    return;
  }
};

export const StyledButton = styled.button`
  ${({ size }) => handleButtonSize(size)};
  max-width: 100%;
  border-radius: ${(props) => props.rad};
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${colors.lightCyan};
  }

  &:focus {
    outline: 0;
  }
`;
