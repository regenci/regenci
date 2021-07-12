import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { Drawer, DynamicForm } from "@components/ui";
import { toggleEducationAction } from "@store/actions/sidebar";

const EducationDataDrawer = () => {
  const state = useSelector((state: IRootState) => state.sidebar.toggle_education);

  return <Drawer placement="right" title="Your education details here" width="700px" visible={state} close={toggleEducationAction} content={<DynamicForm form_name="education" />} />;
};

export default EducationDataDrawer;
