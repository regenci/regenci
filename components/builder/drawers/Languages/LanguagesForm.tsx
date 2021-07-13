/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "nanoid";
import { Input } from "@components/ui";
import { Row, Col, Select, Form } from "antd";
import { MinusCircleIcon } from "@components/Icons";

const { Option } = Select;

export const languagesForm = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any) => {
  function handleChange(value: any) {}

  return (
    <Row key={key} className="w-full m-0 flex justify-center relative">
      <Row gutter={24} wrap className="w-full">
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_label="Language name"
            field_placeholder="Language name"
            field_name={[name, "language_name"]}
            key={[fieldKey, "language_key"] as any}
            field_type="text"
            field_rules={{
              type: "letter_spaces",
              required: true,
            }}
          />
        </Col>
        <Col md={24} className="w-full" lg={12}>
          <Form.Item
            {...rest}
            label="Language level"
            rules={[
              {
                required: true,
                message: "This field is required, please complete it.",
              },
            ]}
            name={[name, "language_level"]}
            key={[fieldKey, "language_key"]}
          >
            <Select placeholder="Language level" className="w-full" onChange={handleChange}>
              <Option value={16}>
                <div className="flex w-full justify-between">
                  <div>A1 - Beginner</div> <div>(16%)</div>
                </div>
              </Option>
              <Option value={32}>
                <div className="flex w-full justify-between">
                  <div>A2 - Elementary</div> <div>(32%)</div>
                </div>
              </Option>
              <Option value={49}>
                <div className="flex w-full justify-between">
                  <div>B1 - Intermediate</div> <div>(49%)</div>
                </div>
              </Option>
              <Option value={66}>
                <div className="flex w-full justify-between">
                  <div>B2 - Upper Intermediate</div> <div>(66%)</div>
                </div>
              </Option>
              <Option value={82}>
                <div className="flex w-full justify-between">
                  <div>C1 - Advanced</div> <div>(82%)</div>
                </div>
              </Option>
              <Option value={100}>
                <div className="flex w-full justify-between">
                  <div>C2 - Native</div> <div>(100%)</div>
                </div>
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Input className="absolute" field_type="hidden" field_default_value={nanoid()} field_name={[name, "id"] as any} key={[fieldKey, "id"] as any} {...rest} />
      <MinusCircleIcon className="cursor-pointer h-5 w-5 ml-4 hover:text-red-600 absolute -right-4 top-1/2 transform -translate-y-1/2" onClick={() => remove(name)} />
    </Row>
  );
};
