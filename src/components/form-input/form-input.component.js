import React from "react";
import {
  Wrapper,
  StyledForm,
  StyledInput,
  ErrorMessage,
} from "./form-input.styles";

const FormInput = ({ value, handleChange, hasError }) => {
  return (
    <Wrapper>
      <StyledForm>
        <StyledInput
          type="url"
          value={value}
          onChange={handleChange}
          placeholder="Shorten a link here..."
          hasError={hasError}
        />
        <ErrorMessage hasError={hasError}>Please add a link</ErrorMessage>
      </StyledForm>
    </Wrapper>
  );
};

export default FormInput;
