import React from "react";
import { Wrapper } from "./link-list.styles";
import LinkListItem from "../link-list-item/link-list-item.component";

const LinkList = ({ linkList }) => {
  const renderedLinkList = linkList.map((item) => {
    return <LinkListItem originalUrl={item[0]} shortUrl={item[1]} />;
  });
  return <Wrapper>{renderedLinkList}</Wrapper>;
};

export default LinkList;
