import styled from "styled-components";
import { colors } from "../../cssVariables";

export const StyledDropdown = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  grid-column: span 12;
  width: 100%;
  align-items: center;
  background-color: ${colors.darkViolet};
  padding: 2.4rem;
  margin: 2.4rem 0;
  border-radius: 1rem;
  z-index: 1;
`;

export const HR = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  border-top: 1px solid ${colors.grayishViolet};
  opacity: 25%;
  margin: 1.5rem 0;
`;
