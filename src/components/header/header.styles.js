import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  padding: 0 2.4rem;
  padding-top: 4rem;
  background-color: white;

  @media (min-width: 768px) {
    padding: 0 11vw;
    padding-top: 4rem;
    padding-bottom: 1px;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 0;
  row-gap: 0;
  grid-column: span 12;
  justify-items: center;
  align-items: center;
  height: 100%;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
