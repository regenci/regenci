/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "nanoid";
import { Row, Col } from "antd";
import { Input } from "@components/ui";
import { MinusCircleIcon } from "@components/Icons";

export const referrencesForm = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any) => {
  return (
    <Row key={key} className="w-full m-0 flex justify-center relative">
      <Row gutter={24} wrap className="w-full">
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_label="Referrence title"
            field_placeholder="Referrence title"
            field_name={[name, "referrence_title"]}
            key={[fieldKey, "referrence_key"] as any}
            field_type="text"
            field_rules={{
              required: true,
            }}
          />
        </Col>
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_placeholder="Referrence link"
            field_label="Referrence link"
            key={[fieldKey, "referrence_key"] as any}
            field_name={[name, "referrence_link"]}
            field_type="text"
            field_rules={{
              type: "url",
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
