/* eslint-disable camelcase */
import React, { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
import { TWBlackButtonComponent, TWWhiteButtonComponent } from "./button-tw-styled";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties | undefined;
  bgType: "white" | "black";
}

const Button = (props: IProps) => {
  return props.bgType === "white" ? (
    <TWBlackButtonComponent type={props?.type} style={props?.style} className={props?.className} {...props}>
      {props.children}
    </TWBlackButtonComponent>
  ) : (
    <TWWhiteButtonComponent type={props?.type} style={props?.style} className={props?.className} {...props}>
      {props.children}
    </TWWhiteButtonComponent>
  );
};

export default Button;
