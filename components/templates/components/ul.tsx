import * as React from "react";

interface IUlProps {
  id: string;
  style?: any;
  className: string;
  children: any[] | string;
}

export const Ul = ({ children, className, id, style }: IUlProps) => {
  return (
    <ul id={id} className={className} style={style} suppressContentEditableWarning={true}>
      {children}
    </ul>
  );
};
