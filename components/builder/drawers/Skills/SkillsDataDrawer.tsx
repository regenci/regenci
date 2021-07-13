import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { Drawer } from "@components/ui";
import { toggleSkillAction } from "@store/actions/sidebar";
import SkillsForm from "./SkillsForm";

const SkillsDataDrawer = () => {
  const toggled = useSelector((state: IRootState) => state.sidebar.skills);

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return <Drawer placement="right" title="Add your skills down here" width="700px" visible={toggled} close={toggleSkillAction} content={<SkillsForm onFinish={handleFormSubmit} />} />;
};

export default SkillsDataDrawer;
