/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { Drawer as AntDrawer } from "antd";
import { useMediaQuery } from "react-responsive";
import { CloseIcon } from "@components/Icons";

interface IProps {
  close: any;
  title: string;
  width: string;
  visible: boolean;
  content: JSX.Element;
  placement: "right" | "left";
  className?: string;
}

const Drawer: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const sm = useMediaQuery({ maxWidth: "767px" });

  const handleClose = () => {
    props.close(false, dispatch);
  };
  return (
    <AntDrawer
      title={props.title}
      className={props?.className}
      placement={props.placement}
      closable={true}
      closeIcon={<CloseIcon />}
      onClose={handleClose}
      visible={props.visible}
      width={sm ? "100%" : props.width}
      footer={null}
    >
      {props.content}
    </AntDrawer>
  );
};

export default Drawer;
