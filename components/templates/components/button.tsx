import * as React from "react";

interface IButtonProps {
  id: string;
  style?: any;
  className: string;
  children: any[] | string;
  editable?: boolean;
}

export const Button = ({ children, className, id, style, editable }: IButtonProps) => {
  return (
    <button id={id} className={className} style={style} contentEditable={editable} suppressContentEditableWarning={true}>
      {children}
    </button>
  );
};
