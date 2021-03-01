import React from "react";
import { Wrapper } from "./link-list.styles";
import LinkListItem from "../link-list-item/link-list-item.component";

const LinkList = ({ linkList }) => {
  const renderedLinkList = linkList.map((item) => {
    return (
      <LinkListItem key={item[0]} originalUrl={item[1]} shortUrl={item[2]} />
    );
  });
  return <Wrapper>{renderedLinkList}</Wrapper>;
};

export default LinkList;
