import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { Drawer, DynamicForm } from "@components/ui";
import { toggleExperienceAction } from "@store/actions/sidebar";

const ExperienceDataDrawer = () => {
  const toggled = useSelector((state: IRootState) => state.sidebar.experience);

  return <Drawer placement="right" title="Your experience details here" width="700px" visible={toggled} close={toggleExperienceAction} content={<DynamicForm form_name="experience" />} />;
};

export default ExperienceDataDrawer;
