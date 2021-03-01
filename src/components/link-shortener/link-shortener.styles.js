import styled from "styled-components";
import bgShortenMobile from "../../assets/bg-shorten-mobile.svg";
import bgShortenDesktop from "../../assets/bg-shorten-desktop.svg";
import FormInput from "../form-input/form-input.component";

export const StyledLinkShortener = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 160px;
  gap: 2.4rem;
  padding: 0 2.4rem;
  margin-top: -80px;

  @media (min-width: 768px) {
    max-width: 1110px;
    min-height: 168px;
    margin-top: -84px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgShortenMobile}), ${(props) => props.bg};
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: ${(props) => props.rad};
  gap: ${(props) => (props.hasError ? "2rem" : "1.6rem")};
  padding: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
    min-height: 168px;
    background: url(${bgShortenDesktop}), ${(props) => props.bg};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 6.4rem;
  }
`;

export const ResultsWrapper = styled.div`
  display: ${(props) => (props.showResults ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
`;

export const StyledFormInput = styled(FormInput)`
  width: 769px;
`;
