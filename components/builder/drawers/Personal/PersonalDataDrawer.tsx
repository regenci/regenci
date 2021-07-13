import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/root";
import { UploadIcon } from "@components/Icons";
import { Drawer, Input } from "@components/ui";
import { togglePersonalAction } from "@store/actions/sidebar";
import { Row, Upload, Col, Input as AntInput, Form, Button } from "antd";

const { TextArea } = AntInput;

const PersonalDataDrawer = () => {
  const toggled = useSelector((state: IRootState) => state.sidebar.personal);
  const [loading, setLoading] = React.useState(false);
  const [formChanged, setFormChanged] = React.useState(true);

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    values &&
      setTimeout(() => {
        setLoading(false);
        setFormChanged(true);
      }, 1000);
  };
  return (
    <Drawer
      title="Your personal details here"
      width="700px"
      placement="right"
      visible={toggled}
      close={togglePersonalAction}
      content={
        <Form layout="vertical" fields={[]} onFinish={onFinish}>
          <Row gutter={24} wrap>
            <Col md={24} className="sm:w-full" lg={12}>
              <Input
                field_placeholder="John Doe"
                field_label="Full name"
                field_name="full_name"
                field_max_length={50}
                field_type="text"
                field_rules={{
                  type: "letter_spaces",
                  required: true,
                }}
              />
            </Col>
            <Col md={24} className="sm:w-full" lg={12}>
              <Input
                field_placeholder="Software Engineer"
                field_label="Job title"
                field_name="job_title"
                field_max_length={40}
                field_type="text"
                field_rules={{
                  type: "letter_spaces",
                  required: true,
                }}
              />
            </Col>
          </Row>
          <Row gutter={24} wrap>
            <Col md={24} className="sm:w-full" lg={12}>
              <Input
                field_placeholder="example@example.com"
                field_label="E-mail"
                field_name="email"
                field_max_length={30}
                field_type="text"
                field_rules={{
                  type: "email",
                  required: true,
                }}
              />
            </Col>
            <Col md={24} className="sm:w-full" lg={12}>
              <Input field_placeholder="+(code) number-combination" field_label="Phone number" field_name="phone_number" field_max_length={15} field_type="text" field_rules={{ required: true }} />
            </Col>
          </Row>
          <Row gutter={24} wrap>
            <Col md={24} className="sm:w-full" lg={12}>
              <Input field_placeholder="123 Main St Anytown, USA" field_label="Full address" field_name="full_address" field_max_length={49} field_type="text" />
            </Col>
            <Col md={24} className="sm:w-full" lg={12}>
              <Input field_label="Date of birth" field_name="date_of_birth" field_max_length={10} field_type="date" field_rules={{ required: true }} />
            </Col>
          </Row>
          <Row gutter={24} wrap>
            <Col span={24}>
              <Form.Item label="Professional summary" name="professional_summary" rules={[{ required: true, message: "This field is required, please complete it." }]}>
                <TextArea
                  showCount
                  maxLength={250}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab eligendi quam quisquam non nostrum quis aspernatur natus iure. Nostrum sed, fugit in mollitia impedit recusandae optio voluptate commodi deserunt."
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} wrap>
            <Col span={24}>
              <Form.Item label="Avatar">
                <Form.Item name="avatar" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                  <Upload.Dragger multiple={false} accept="image/png, image/gif, image/jpeg" name="files" maxCount={1} action="/upload.do">
                    <p className="w-full flex items-center justify-center py-3">
                      <UploadIcon className="text-blue-400 h-5 w-5" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Button type="primary" htmlType="submit" loading={loading} disabled={formChanged} className="w-full">
                Save progress
              </Button>
            </Col>
          </Row>
        </Form>
      }
    />
  );
};

export default PersonalDataDrawer;
