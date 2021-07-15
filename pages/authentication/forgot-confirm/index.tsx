import React from "react";
import { Button } from "antd";
import { Form, Input } from "@components/ui";
import { MotionLayoutComponent } from "@components/common";
import { HashtagIcon } from "@components/Icons";

export default function ForgotConfirm() {
  // const [decoded, setDecoded] = useState<iDecoded>();
  // const token = useSelector((state: iRootState) => state?.token?.customToken);

  // useEffect(() => {
  //   if (token && getLocalStorage("temp_reset"))
  //     setDecoded(
  //       jwt_decode(token || JSON.parse(getLocalStorage("temp_reset").split(0,1)))
  //     );
  // }, [token]);

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
    // await resetConfirmAction({ code: value, _id: decoded?._id }, router);
  };

  return (
    <MotionLayoutComponent title="Authentication | Confirm Code">
      <Form
        is_auth_form={false}
        has_forgot_link={false}
        submit_btn_title="Confirm"
        form_title="Code confirmation"
        custom_form_description="Please enter down below the reset code that your received at the
        specified email address."
        onFinish={handleFormSubmit}
        form_fields={
          <Input
            field_name="code"
            field_type="text"
            field_label="Code"
            field_max_length={6}
            field_placeholder="000000"
            field_icon={HashtagIcon}
            field_rules={{
              required: true,
              type: "numeric",
              max: 6,
            }}
          />
        }
        form_footer={
          <div className="w-full flex mt-4">
            <Button
              // onClick={() => resendResetCodeApi(decoded?._id)}
              className="w-full shadow-none"
            >
              <span className="text-black">Resend code</span>
            </Button>
          </div>
        }
      />
    </MotionLayoutComponent>
  );
}
