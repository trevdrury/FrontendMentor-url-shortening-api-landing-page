import React from "react";
import Button from "../button/button.component";
import { StyledUrlSpan, Wrapper, HR } from "./link-list-item.styles";
import { colors } from "../../cssVariables";

const LinkListItem = ({ originalUrl, shortUrl }) => {
  return (
    <Wrapper>
      <StyledUrlSpan color={colors.veryDarkBlue}>{originalUrl}</StyledUrlSpan>
      <HR />
      <StyledUrlSpan color={colors.cyan}>{shortUrl}</StyledUrlSpan>
      <Button
        size={"small"}
        rad="5px"
        text="Copy"
        bg={colors.cyan}
        color="white"
      />
    </Wrapper>
  );
};

export default LinkListItem;
