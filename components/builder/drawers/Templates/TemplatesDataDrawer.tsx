import React from "react";
import { Drawer } from "@components/ui";
import { useSelector } from "react-redux";
import TemplatesData from "./TemplatesData";
import { IRootState } from "interfaces/root";
import { toggleTemplatesAction } from "@store/actions/sidebar";

const TemplatesDataDrawer = () => {
  const toggled = useSelector((state: IRootState) => state.sidebar.templates);

  return <Drawer placement="left" className="left-28" title="Choose another template" width="600px" visible={toggled} close={toggleTemplatesAction} content={<TemplatesData />} />;
};

export default TemplatesDataDrawer;
