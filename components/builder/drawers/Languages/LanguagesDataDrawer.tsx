import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { Drawer, DynamicForm } from "@components/ui";
import { toggleLanguagesAction } from "@store/actions/sidebar";

const LanguagesDataDrawer = () => {
  const toggled = useSelector((state: IRootState) => state.sidebar.languages);

  return <Drawer placement="right" title="Your language data here" width="700px" visible={toggled} close={toggleLanguagesAction} content={<DynamicForm form_name="languages" />} />;
};

export default LanguagesDataDrawer;
