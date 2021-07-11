/* eslint-disable camelcase */
import React, { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
import { TWButtonComponent } from "./button-tw-styled";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties | undefined;
}

const Button = (props: IProps) => {
  return (
    <TWButtonComponent type={props?.type} style={props?.style} className={props?.className} {...props}>
      {props.children}
    </TWButtonComponent>
  );
};

export default Button;
