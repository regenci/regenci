import React from "react";
import { Form, Input, Link } from "@components/ui";
import { MotionLayoutComponent } from "@components/common";
import { PasswordIcon } from "@components/Icons";

export default function Reset() {
  // const variants = {
  //   initial: {
  //     y: "-100%",
  //   },
  //   animate: {
  //     y: 0,
  //   },
  //   exit: {
  //     y: "100%",
  //   },
  // };

  const handleFormSubmit = async (values: any) => {
    // try {
    //   const res = await resetPassword(values, token);
    //   message.success(res.data.message);
    //   history.push("/auth/sign-in");
    // } catch (err) {
    //   message.error(err?.response?.data?.message);
    // }
  };

  return (
    <MotionLayoutComponent title="Authentication | Reset Password">
      <Form
        is_auth_form={false}
        has_forgot_link={false}
        submit_btn_title="Reset"
        form_title="Reset Password"
        onFinish={handleFormSubmit}
        form_fields={
          <>
            <Input
              field_type="password"
              field_name="newPassword"
              is_password_field={true}
              field_placeholder="New password"
              field_icon={PasswordIcon}
              field_rules={{
                required: true,
                min: 5,
              }}
            />
            <Input
              field_type="password"
              is_password_field={true}
              field_name="repeatPassword"
              field_dependency={["password"]}
              field_placeholder="Repeat password"
              field_icon={PasswordIcon}
              field_rules={{
                required: true,
                type: "confirm_password",
              }}
            />
          </>
        }
        form_footer={
          <div className="w-full flex mt-4">
            Remember your password? — <Link link="/authentication/sign-in" text="Sign in" />
          </div>
        }
      />
    </MotionLayoutComponent>
  );
}
