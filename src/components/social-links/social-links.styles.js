import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 168px;
`;

export const StyledImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  &:hover {
    filter: brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(347%)
      hue-rotate(119deg) brightness(82%) contrast(100%);
    cursor: pointer;
  }
`;
