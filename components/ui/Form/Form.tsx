/* eslint-disable camelcase */
import React from "react";
import { Form as AntForm } from "antd";
import { Link, Button } from "@components/ui";
import FormSocial from "@components/ui/Form/form-social";
import { TWFormComponent, TWFormTitleComponent, TWFormDescriptionComponent } from "./form-tw-styled";

const { useForm } = AntForm;

interface IProps {
  form_title: string;
  is_auth_form: boolean;
  submit_btn_title: string;
  form_fields: JSX.Element;
  has_forgot_link?: boolean;
  form_footer?: JSX.Element;
  onFinish: (values: any) => void;
  custom_form_description?: string;
}
const Form = (props: IProps) => {
  const [form] = useForm();
  return (
    <TWFormComponent>
      <AntForm layout="vertical" onFinish={(values) => props.onFinish(values)} form={form} className="auth-customized-form">
        <TWFormTitleComponent>{props.form_title}</TWFormTitleComponent>
        {props.custom_form_description && <TWFormDescriptionComponent>{props.custom_form_description}</TWFormDescriptionComponent>}
        {props.form_fields}
        {props.has_forgot_link && (
          <AntForm.Item style={{ marginBottom: 5, marginTop: -5 }}>
            <Link link="/authentication/forgot" text="Forgot password" style={{ marginLeft: 0 }} />
          </AntForm.Item>
        )}
        <AntForm.Item>
          <Button type="submit">{props.submit_btn_title}</Button>
        </AntForm.Item>
      </AntForm>
      {props.is_auth_form && <FormSocial form_title={props.form_title} />}
      {props.form_footer}
    </TWFormComponent>
  );
};

export default Form;
