/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import { Form, Input as AntInput } from "antd";
import { NamePath } from "antd/lib/form/interface";
import { EyeOffIcon, EyeOnIcon } from "@components/Icons";

interface IRuleGetterProps {
  required?: boolean;
  min?: number;
  max?: number;
  type?: string;
}

interface IInputProps {
  field_label?: string;
  field_name: NamePath;
  field_icon?: any;
  field_max_length?: number;
  field_placeholder?: string;
  is_password_field?: boolean;
  field_dependency?: NamePath[];
  field_rules?: IRuleGetterProps;
  field_type: "number" | "text" | "password" | "date";
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  const [rules, setRules] = React.useState([]);
  const ruleGetter = (data: IRuleGetterProps | undefined) => [
    data?.min ? { min: data.min, message: `This field must be at least ${data.min} characters long.` } : null,
    data?.required ? { required: data.required, message: "This field is required, please complete it." } : null,
    data?.max ? { max: data.max, message: `This field should not be longer than ${data.max} characters.` } : null,
    data?.type === "numeric" ? { pattern: /^(?:\d*)$/, message: "Please verify your input, the field is numeric only." } : null,
    data?.type === "email" ? { type: "email", message: "Please enter your email address in format: yourname@example.com" } : null,
    data?.type === "letter_spaces" ? { pattern: /^[a-zA-Z ]*$/, message: "Your input should contain only letters and spaces." } : null,
    data?.type === "confirm_password"
      ? [
          ({ getFieldValue }: any) => ({
            validator(_: any, value: any) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("The two passwords that you entered do not match!"));
            },
          }),
        ]
      : null,
  ];

  React.useEffect(() => {
    setRules(ruleGetter(props?.field_rules).filter((i: any) => i !== null) as []);
  }, [props?.field_rules]);

  return (
    <Form.Item name={props.field_name} rules={rules && rules.map((r) => r)} style={{ marginBottom: 10 }} dependencies={props.field_dependency} label={props.field_label}>
      {props.is_password_field ? (
        <AntInput.Password
          prefix={props.field_icon && <props.field_icon className="opacity-80" />}
          type={props.field_type}
          iconRender={(visible) => (visible ? <EyeOnIcon className="opacity-80" /> : <EyeOffIcon className="opacity-80" />)}
          placeholder={props.field_placeholder}
        />
      ) : (
        <AntInput maxLength={props.field_max_length} prefix={props.field_icon && <props.field_icon className="opacity-80" />} type={props.field_type} placeholder={props.field_placeholder} />
      )}
    </Form.Item>
  );
};

export default Input;
