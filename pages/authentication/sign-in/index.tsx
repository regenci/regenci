import React from "react";
// import { useRouter } from "next/router";
import { Input, Form, Link } from "@components/ui";
import { MotionLayoutComponent } from "@components/common";
import { EmailIcon, PasswordIcon } from "@components/Icons";

export default function Signin() {
  // const router = useRouter();
  // const dispatch = useDispatch();

  const variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
    },
    exit: {
      x: "100%",
    },
  };

  const handleFormSubmit = async (values: any) => {
    // await loginAction(values, router);
    // isLoggedAction(dispatch);
    // if (getLocalStorage("temp_email")) removeLocalStorage("temp_email");
  };
  return (
    <MotionLayoutComponent className="flex items-center justify-center" variants={variants} bg="white" title="Authentication | Sign in">
      <Form
        form_title="Sign In"
        has_forgot_link
        is_auth_form
        submit_btn_title="Sign in"
        onFinish={handleFormSubmit}
        form_fields={
          <>
            <Input field_type="text" field_name="email" field_placeholder="Email" field_icon={EmailIcon} field_rules={{ required: true, type: "email" }} />
            <Input
              field_rules={{
                required: true,
                min: 5,
              }}
              field_name="password"
              field_type="password"
              is_password_field={true}
              field_placeholder="Password"
              field_icon={PasswordIcon}
            />
          </>
        }
        form_footer={
          <div className="w-full flex mt-4">
            New here? — <Link link="/authentication/sign-up" text="Sign up" />
          </div>
        }
      />
    </MotionLayoutComponent>
  );
}
