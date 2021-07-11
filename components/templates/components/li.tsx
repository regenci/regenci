import * as React from "react";

interface ILiProps {
  id: string;
  style?: any;
  className: string;
  children: any[] | string;
  editable?: boolean;
}

export const Li = ({ children, className, id, style, editable }: ILiProps) => {
  return (
    <li id={id} className={className} style={style} contentEditable={editable} suppressContentEditableWarning={true}>
      {children}
    </li>
  );
};
