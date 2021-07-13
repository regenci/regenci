/* eslint-disable camelcase */
/* eslint-disable new-cap */
import React from "react";
import { nanoid } from "nanoid";
import { PlusIcon } from "@components/Icons";
import { Row, Col, Form, Button } from "antd";
import { formNameType, getDynamicFormFields } from "./dynamic-fields-getter";

interface IProps {
  action?: any;
  form_name: formNameType;
}

const DynamicForm = (props: IProps) => {
  const [loading, setLoading] = React.useState(false);
  const [formChanged, setFormChanged] = React.useState(true);
  const onFinish = async (values: any) => {
    setLoading(true);
    (await values) &&
      setTimeout(() => {
        setLoading(false);
        setFormChanged(true);
      }, 1000);
    console.log(await values.education);
  };

  return (
    <Form name={nanoid()} onFinish={onFinish} autoComplete="off" className="w-full flex items-center flex-col" layout="vertical" onValuesChange={() => setFormChanged(false)}>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => getDynamicFormFields(key, fieldKey, name, restField, remove, props.form_name))}
            <Row gutter={24} className="w-full mt-2 mb-4">
              <Col span={24} className="w-full">
                <Button type="dashed" onClick={() => add()} className="w-full">
                  <div className="flex w-full justify-center items-center">
                    <PlusIcon className="w-4 h-4 mr-1" /> <span>Add more</span>
                  </div>
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
      <Row gutter={24} className="w-full mt-2 mb-4">
        <Col span={24}>
          <Button type="primary" htmlType="submit" loading={loading} disabled={formChanged} className="w-full">
            Save progress
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DynamicForm;
