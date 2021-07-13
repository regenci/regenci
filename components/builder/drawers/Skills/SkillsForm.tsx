/* eslint-disable react/prop-types */
import React from "react";
import { Select, Form, Button } from "antd";
import { CloseIcon } from "@components/Icons";

interface IProps {
  onFinish: (values: any) => void;
}

const SkillsForm = (props: IProps) => {
  const [loading, setLoading] = React.useState(false);
  const [formChanged, setFormChanged] = React.useState(true);

  const onFinish = async (values: any) => {
    setLoading(true);
    props.onFinish(await values);
    values &&
      setTimeout(() => {
        setLoading(false);
        setFormChanged(true);
      }, 1000);
  };
  return (
    <Form layout="vertical" onFinish={onFinish} onValuesChange={() => setFormChanged(false)}>
      <Form.Item
        label="Type down your skills"
        rules={[
          {
            required: true,
            message: "This field is required, please complete it.",
          },
        ]}
        name="skills"
      >
        <Select mode="tags" placeholder="Type here your skills" className="w-full" tokenSeparators={[","]} removeIcon={<CloseIcon />} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading} disabled={formChanged} className="w-full">
        Save progress
      </Button>
    </Form>
  );
};

export default SkillsForm;
