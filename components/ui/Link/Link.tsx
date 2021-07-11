/* eslint-disable react/prop-types */
import React from "react";
import NextLink from "next/link";
import { TWFormLinkComponent } from "./link-tw-styled";

interface IProps {
  link: string;
  text: string;
  style?: {};
}

const Link: React.FC<IProps> = (props) => {
  return (
    <NextLink href={props.link}>
      <TWFormLinkComponent style={props?.style}>{props.text}</TWFormLinkComponent>
    </NextLink>
  );
};

export default Link;
