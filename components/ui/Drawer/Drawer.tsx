/* eslint-disable react/prop-types */
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Drawer as AntDrawer, Button } from "antd";
import { useDispatch } from "react-redux";

interface IProps {
  close: any;
  title: string;
  width: string;
  visible: boolean;
  content: JSX.Element;
  placement: "right" | "left";
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
      placement={props.placement}
      closable={false}
      onClose={handleClose}
      visible={props.visible}
      width={sm ? "100%" : props.width}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={handleClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={handleClose} type="primary">
            Save
          </Button>
        </div>
      }
    >
      {props.content}
    </AntDrawer>
  );
};

export default Drawer;
