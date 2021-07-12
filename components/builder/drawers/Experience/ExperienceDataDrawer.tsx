import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { Drawer, DynamicForm } from "@components/ui";
import { toggleExperienceAction } from "@store/actions/sidebar";

const ExperienceDataDrawer = () => {
  const state = useSelector((state: IRootState) => state.sidebar.toggle_experience);
  console.log(state);

  return <Drawer placement="right" title="Your experience details here" width="700px" visible={state} close={toggleExperienceAction} content={<DynamicForm form_name="experience" />} />;
};

export default ExperienceDataDrawer;
