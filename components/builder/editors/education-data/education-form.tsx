import React from "react";
import { Row, Col } from "antd";
import { Input } from "@components/ui";

const EditorEducationDataForm = () => {
  return (
    <Row gutter={24} wrap>
      <Col span={12}>
        <Input
          field_placeholder="John Doe"
          field_label="Full name"
          field_name="full_name"
          field_max_length={50}
          field_type="text"
          field_rules={{
            type: "letter_spaces",
          }}
        />
      </Col>
      <Col span={12}>
        <Input
          field_placeholder="Software Engineer"
          field_label="Job title"
          field_name="job_title"
          field_max_length={40}
          field_type="text"
          field_rules={{
            type: "letter_spaces",
          }}
        />
      </Col>
    </Row>
  );
};

export default EditorEducationDataForm;
