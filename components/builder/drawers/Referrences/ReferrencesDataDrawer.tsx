import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { Drawer, DynamicForm } from "@components/ui";
import { toggleReferrencesAction } from "@store/actions/sidebar";

const ReferrencesDataDrawer = () => {
  const toggled = useSelector((state: IRootState) => state.sidebar.referrences);

  return <Drawer placement="right" title="Your referrence links here" width="700px" visible={toggled} close={toggleReferrencesAction} content={<DynamicForm form_name="referrences" />} />;
};

export default ReferrencesDataDrawer;
