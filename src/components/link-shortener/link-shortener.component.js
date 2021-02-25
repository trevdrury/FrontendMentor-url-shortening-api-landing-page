import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  StyledLinkShortener,
  InputWrapper,
  StyledFormInput,
  ResultsWrapper,
} from "./link-shortener.styles";
import { colors } from "../../cssVariables";
import shrtcode from "../../api/shrtcode";
import Button from "../button/button.component";
import LinkList from "../link-list/link-list.component";

const LinkShortener = () => {
  const [hasError, setHasErrror] = useState(false);
  const [value, setValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [linkList, setLinkList] = useState([]);
  const [width] = useWindowSize();

  const handleClick = async (url) => {
    const response = await shrtcode.get(`/shorten?url=${url}`);
    let shortLink = response.data.result.short_link;

    let result = [url, shortLink];

    let updatedLinkList = linkList.push(result);
    setLinkList(updatedLinkList);

    setShowResults(true);
  };

  const handleChange = (e) => {
    let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    setValue(e.target.value);

    if (!regex.test(e.target.value)) {
      setHasErrror(true);
    } else {
      setHasErrror(false);
    }
  };

  return (
    <StyledLinkShortener>
      <InputWrapper bg={colors.darkViolet} rad="10px" hasError={hasError}>
        <StyledFormInput
          value={value}
          handleChange={handleChange}
          hasError={hasError}
        />
        <Button
          size={width < 769 ? "medium" : "xLarge"}
          rad="5px"
          bg={colors.cyan}
          color="white"
          text="Shorten It!"
          handleClick={() => handleClick(value)}
        />
      </InputWrapper>
      <ResultsWrapper showResults={showResults}>
        <LinkList linkList={linkList} />
      </ResultsWrapper>
    </StyledLinkShortener>
  );
};

export default LinkShortener;
