/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import { Button } from "antd";
import { TWFormSocialHeadingComponent, TWFormSocialButtonWrapperComponent } from "./form-tw-styled";

interface IProps {
  form_title: string;
}

const FormSocial: React.FC<IProps> = ({ form_title }) => {
  return (
    <>
      <TWFormSocialHeadingComponent>
        Or <span style={{ textTransform: "lowercase" }}>{form_title}</span> with
      </TWFormSocialHeadingComponent>
      <TWFormSocialButtonWrapperComponent>
        <Button type="dashed" className="w-full mr-1 custom-dashed-btn">
          <span className="text-black">Facebook</span>
        </Button>
        <Button type="dashed" className="w-full ml-1 custom-dashed-btn">
          <span className="text-black">Google</span>
        </Button>
      </TWFormSocialButtonWrapperComponent>
    </>
  );
};

export default FormSocial;
