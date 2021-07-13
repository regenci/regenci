/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "nanoid";
import { Row, Col } from "antd";
import { Input } from "@components/ui";
import { MinusCircleIcon } from "@components/Icons";

export const educationForm = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any) => {
  return (
    <Row key={key} className="w-full m-0 flex justify-center relative">
      <Row gutter={24} wrap className="w-full">
        <Col md={24} className="w-full" lg={12}>
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
        <Col md={24} className="w-full" lg={12}>
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
      <Row gutter={24} wrap className="w-full">
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_placeholder="Institution start year"
            field_label="Institution start year"
            key={[fieldKey, "institution_key"] as any}
            field_name={[name, "institution_start_date"]}
            field_max_length={4}
            field_type="text"
            field_rules={{
              type: "numeric",
              required: true,
            }}
          />
        </Col>
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_placeholder="Institution end year"
            field_label="Institution end year"
            key={[fieldKey, "institution_key"] as any}
            field_name={[name, "institution_end_date"]}
            field_type="text"
            field_max_length={4}
            field_rules={{
              type: "numeric",
              required: true,
            }}
          />
        </Col>
      </Row>
      <Input className="absolute" field_type="hidden" field_default_value={nanoid()} field_name={[name, "id"] as any} key={[fieldKey, "id"] as any} {...rest} />
      <MinusCircleIcon className="cursor-pointer h-5 w-5 ml-4 hover:text-red-600 absolute -right-4 top-1/2 transform -translate-y-1/2" onClick={() => remove(name)} />
    </Row>
  );
};
