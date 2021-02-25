import styled from "styled-components";
import { colors } from "../../cssVariables";

export const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
`;

export const HeaderLink = styled(StyledLink)`
  padding: 1.5rem 1.6rem;
  font-size: 1.5rem;
  color: ${colors.grayishViolet};

  &:hover {
    color: ${colors.veryDarkBlue};
  }
`;

export const DropdownLink = styled(StyledLink)`
  padding: 1.5rem 0;
  font-size: 1.8rem;
  color: white;
`;

export const FooterLink = styled(StyledLink)`
  padding: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: medium;
  color: ${colors.gray};

  &:hover {
    color: ${colors.cyan};
  }
`;
