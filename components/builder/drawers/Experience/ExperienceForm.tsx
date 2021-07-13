/* eslint-disable react/prop-types */
import React from "react";
import { nanoid } from "nanoid";
import { Row, Col } from "antd";
import { Input } from "@components/ui";
import { MinusCircleIcon } from "@components/Icons";

export const experienceForm = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any) => {
  return (
    <Row key={key} className="w-full m-0 flex justify-center relative">
      <Row gutter={24} wrap className="w-full">
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_placeholder="Company name"
            field_label="Employment company name"
            key={[fieldKey, "employment_key"] as any}
            field_name={[name, "employment_company"]}
            field_type="text"
            field_rules={{
              required: true,
            }}
          />
        </Col>
        <Col md={24} className="w-full" lg={12}>
          <Input
            {...rest}
            field_placeholder="Job title"
            field_label="Junior graphic designer"
            key={[fieldKey, "employment_key"] as any}
            field_name={[name, "employment_job_title"]}
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
            field_placeholder="Institution start date"
            field_label="Institution start date"
            key={[fieldKey, "employment_key"] as any}
            field_name={[name, "employment_start_date"]}
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
            field_placeholder="Institution end date"
            field_label="Institution end date"
            key={[fieldKey, "employment_key"] as any}
            field_name={[name, "employment_end_date"]}
            field_max_length={4}
            field_type="text"
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
