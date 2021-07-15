import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Link } from "@components/ui";
import { MotionLayoutComponent } from "@components/common";
import { EmailIcon, PasswordIcon, UserIcon } from "@components/Icons";

export default function Signup() {
  // const variants = {
  //   initial: {
  //     x: "100%",
  //   },
  //   animate: {
  //     x: 0,
  //   },
  //   exit: {
  //     x: "100%",
  //   },
  // };
  const handleFormSubmit = async (values: any) => {
    // await loginAction(values, router);
    // isLoggedAction(dispatch);
    // if (getLocalStorage("temp_email")) removeLocalStorage("temp_email");
  };

  return (
    <MotionLayoutComponent title="Authentication | Sign up">
      <Form
        form_title="Sign Up"
        has_forgot_link={false}
        is_auth_form
        submit_btn_title="Sign up"
        onFinish={handleFormSubmit}
        form_fields={
          <>
            <Row gutter={20} wrap>
              <Col span={12}>
                <Input field_type="text" field_name="firstName" field_placeholder="Firstname" field_icon={UserIcon} field_rules={{ required: true, min: 2, max: 20 }} />
              </Col>
              <Col span={12}>
                <Input field_type="text" field_name="lastName" field_placeholder="Lastname" field_icon={UserIcon} field_rules={{ required: true, min: 2, max: 20 }} />
              </Col>
            </Row>
            <Input field_type="text" field_name="email" field_placeholder="Email" field_icon={EmailIcon} field_rules={{ required: true, type: "email" }} />
            <Input field_name="password" field_type="password" is_password_field={true} field_placeholder="Password" field_icon={PasswordIcon} field_rules={{ required: true, min: 2 }} />
            <Input
              field_type="password"
              is_password_field={true}
              field_name="repeatPassword"
              field_dependency={["password"]}
              field_icon={PasswordIcon}
              field_placeholder="Repeat password"
              field_rules={{ required: true, type: "confirm_password" }}
            />
          </>
        }
        form_footer={
          <div className="w-full flex mt-4">
            One of us? — <Link link="/authentication/sign-in" text="Sign in" />
          </div>
        }
      />
    </MotionLayoutComponent>
  );
}
