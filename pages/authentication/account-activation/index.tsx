import React from "react";
import { Button } from "antd";
import { Form, Input } from "@components/ui";
import { HashtagIcon } from "@components/Icons";
import { MotionLayoutComponent } from "@components/common";

export default function AccountActivation() {
  //     const router = useRouter();
  //   const [decoded, setDecoded] = useState<iDecoded>();
  //   const token = useSelector((state: iRootState) => state.token.customToken);

  //   useEffect(() => {
  //     if (token) setDecoded(jwt_decode(token));
  //   }, [token]);

  //   const handleOnSubmit = async (value) => {
  //     await activateAccountAction(
  //       {
  //         email: decoded?.email
  //           ? decoded?.email
  //           : JSON.parse(getLocalStorage("temp_email")),
  //         code: value.code,
  //       },
  //       router
  //     );
  //   };

  //   const handleResend = async () => {
  //     try {
  //       const res: iApiCallRes = await resendActivationCodeApi(
  //         decoded?.email
  //           ? decoded?.email
  //           : JSON.parse(getLocalStorage("temp_email"))
  //       );
  //       notification.success({
  //         message: "Resending activation code",
  //         description: res?.data.message,
  //         placement: "bottomRight",
  //       });
  //     } catch (error) {
  //       message.error(error?.response?.data?.message);
  //     }
  //   };

  //   useEffect(() => {
  //     if (!token && !getLocalStorage("temp_email")) {
  //       router.back();
  //       message.error(
  //         "You can't access the activation page without registering an account!"
  //       );
  //     }
  //   }, [token]);

  //   // let { t } = useTranslation("form");
  //   useEffect(() => {
  //     notification.info({
  //       message: "Account deletion in 15 min",
  //       description:
  //         "Your account will be automatically deleted with-in 15 minutes after registering if you won't provide the verification code",
  //       placement: "topRight",
  //       duration: 0,
  //     });
  //   }, []);

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
    <MotionLayoutComponent title="Authentication | Account Activation">
      <Form
        is_auth_form={false}
        submit_btn_title="Activate"
        onFinish={handleFormSubmit}
        form_title="Account activation"
        custom_form_description="Please enter down below the activation code that your received at the specified email address."
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
              // onClick={() => handleResend()}
              className="w-full shadow-none"
            >
              <span className="text-black">Resend activation code</span>
            </Button>
          </div>
        }
      />
    </MotionLayoutComponent>
  );
}
