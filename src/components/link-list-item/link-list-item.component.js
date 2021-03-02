import React from "react";
import Button from "../button/button.component";
import { StyledUrlSpan, Wrapper, Divider, HR } from "./link-list-item.styles";
import { colors } from "../../cssVariables";
import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "react/cjs/react.development";

const LinkListItem = ({ originalUrl, shortUrl }) => {
  const [btnColor, setBtnColor] = useState(colors.cyan);
  const [btnText, setBtnText] = useState("Copy");
  const [width] = useWindowSize();

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(shortUrl).then(() => {
      e.target.style.pointerEvents = "none";
      setBtnColor(colors.darkViolet);
      setBtnText("Copied!");
    });
  };

  return (
    <Wrapper>
      <Divider>
        <StyledUrlSpan color={colors.veryDarkBlue}>{originalUrl}</StyledUrlSpan>
        <HR />
        <StyledUrlSpan color={colors.cyan}>{shortUrl}</StyledUrlSpan>
      </Divider>
      <Button
        size={width < 769 ? "smallWide" : "small"}
        rad="5px"
        text={btnText}
        bg={btnColor}
        color="white"
        handleClick={handleClick}
      />
    </Wrapper>
  );
};

export default LinkListItem;
