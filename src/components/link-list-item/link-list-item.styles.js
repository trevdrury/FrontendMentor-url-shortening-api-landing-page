import styled from "styled-components";
import { colors } from "../../cssVariables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 1.6rem;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 2.4rem;
  }
`;

export const StyledUrlSpan = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.color};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 0.8rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const HR = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  border-top: 1px solid ${colors.grayishViolet};
  opacity: 25%;
  margin: 0.6rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
