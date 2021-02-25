import styled from "styled-components";
import { colors } from "../../cssVariables";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.veryDarkViolet};
  color: white;
  padding: 2.8rem;
  text-align: center;
  padding: 5.5rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    padding: 7.2rem 11%;
  }
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 1.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 730px;
    margin-top: 0;
    margin-left: 3rem;
  }
`;
