import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  grid-column: span 11;
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const MenuRight = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
