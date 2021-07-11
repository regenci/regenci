import * as React from "react";

interface IDivProps {
  id: string;
  style?: any;
  className: string;
  children: any[] | string;
  editable?: boolean;
}

export const Div = ({ children, className, id, style, editable }: IDivProps) => {
  return (
    <div id={id} className={className} style={style} contentEditable={editable} suppressContentEditableWarning={true}>
      {children}
    </div>
  );
};
