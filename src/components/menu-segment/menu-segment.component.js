import React from "react";
import { MenuSegmentContainer, MenuSegmentTitle } from "./menu-segment.styles";

const MenuSegment = ({ title, children }) => {
  return (
    <MenuSegmentContainer>
      <MenuSegmentTitle>{title}</MenuSegmentTitle>
      {children}
    </MenuSegmentContainer>
  );
};

export default MenuSegment;
