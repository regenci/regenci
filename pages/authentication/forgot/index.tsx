import React from "react";
// import { useRouter } from "next/router";
import { EmailIcon } from "@components/Icons";
import { Form, Input, Link } from "@components/ui";
import { MotionLayoutComponent } from "@components/common";

export default function Forgot() {
  // const router = useRouter();
  // const dispatch = useDispatch();

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
    // await forgotPasswordAction(value, dispatch, router);
  };
  return (
    <MotionLayoutComponent title="Authentication | Forgot Password">
      <Form
        form_title="Recover Account"
        is_auth_form={false}
        has_forgot_link={false}
        custom_form_description="Please enter your email address. You will receive a link to create a
        new password via email."
        submit_btn_title="Recover account"
        onFinish={handleFormSubmit}
        form_fields={<Input field_type="text" field_name="email" field_placeholder="Email" field_icon={EmailIcon} field_rules={{ required: true, type: "email" }} />}
        form_footer={
          <div className="w-full flex mt-4">
            Remember your password? — <Link link="/authentication/sign-in" text="Sign in" />
          </div>
        }
      />
    </MotionLayoutComponent>
  );
}
