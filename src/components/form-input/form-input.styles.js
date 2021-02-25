import styled from "styled-components";
import { colors } from "../../cssVariables";

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: ${(props) =>
    props.hasError ? `3px solid ${colors.errorRed}` : "none"};
  padding: 0 1.6rem;
  font-size: 1.6rem;
  font-weight: medium;
  letter-spacing: 0.12px;
  color: ${(props) => (props.hasError ? colors.errorRed : colors.veryDarkBlue)};

  &:focus {
    outline: 0;
  }

  @media (min-width: 768px) {
    height: 64px;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: -20px;
  display: ${(props) => (props.hasError ? "auto" : "none")};
  font-size: 1.2rem;
  font-weight: medium;
  font-style: italic;
  color: ${colors.errorRed};
  padding-left: 1.6rem;
`;
