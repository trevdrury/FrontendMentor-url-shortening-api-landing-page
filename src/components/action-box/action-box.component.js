import React from "react";
import Button from "../button/button.component";
import { Wrapper, ActionTitle } from "./action-box.styles";
import { colors } from "../../cssVariables";

const ActionBox = () => {
  return (
    <Wrapper>
      <ActionTitle>Boost your links today</ActionTitle>
      <Button
        size={"large"}
        rad="28px"
        bg={colors.cyan}
        color="white"
        text="Get Started"
      />
    </Wrapper>
  );
};

export default ActionBox;
