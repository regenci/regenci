/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "nanoid";
import { Row, Col } from "antd";
import { Input } from "@components/ui";
import { MinusCircleIcon } from "@components/Icons";

const educationForm = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any) => {
  return (
    <Row key={key} className="flex justify-between">
      <Row gutter={24} wrap className="w-[95%]">
        <Col span={12}>
          <Input
            {...rest}
            field_placeholder="Institution name"
            field_label="Institution name"
            key={[fieldKey, "institution_name"] as any}
            field_name={[name, "institution_name"]}
            field_type="text"
            field_rules={{
              required: true,
            }}
          />
        </Col>
        <Col span={12}>
          <Input
            {...rest}
            field_placeholder="Calification"
            field_label="Calification"
            key={[fieldKey, "institution_key"] as any}
            field_name={[name, "institution_calification"]}
            field_type="text"
            field_rules={{
              type: "letter_spaces",
              required: true,
            }}
          />
        </Col>
      </Row>
      <Row gutter={24} wrap className="w-[95%]">
        <Col span={12}>
          <Input
            {...rest}
            field_placeholder="Institution start date"
            field_label="Institution start date"
            key={[fieldKey, "institution_key"] as any}
            field_name={[name, "institution_start_date"]}
            field_type="date"
            field_rules={{
              required: true,
            }}
          />
        </Col>
        <Col span={12}>
          <Input
            {...rest}
            field_placeholder="Institution end date"
            field_label="Institution end date"
            key={[fieldKey, "institution_key"] as any}
            field_name={[name, "institution_end_date"]}
            field_type="date"
            field_rules={{
              required: true,
            }}
          />
        </Col>
      </Row>
      <Row className="absolute">
        <Col>
          <Input field_type="hidden" field_default_value={nanoid()} field_name={[name, "id"] as any} key={[fieldKey, "id"] as any} {...rest} />
        </Col>
      </Row>
      <MinusCircleIcon className="cursor-pointer h-5 w-5 ml-4 hover:text-red-600" onClick={() => remove(name)} />
    </Row>
  );
};

export default educationForm;
