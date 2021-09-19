import React from 'react'
import { HiHashtag } from 'react-icons/hi'
import { Field, Form } from '@app/components/web'
import { AuthLayout } from '@app/components/common'
import { max_characters_rule, min_characters_rule, numbers_only_rule, required_rule } from '@app/lib'

const Index = () => {
  return (
    <AuthLayout title="Activation">
      <Form
        layout="vertical"
        form_title="Account activation"
        form_button_title="Activate"
        form_description="Please enter the verification code received at e-mail address
          to verify your account."
        onFinish={(values: { verification_code: number }) => console.log(values)}
      >
        <Field
          maxLength={6}
          minLength={6}
          placeholder="000000"
          label="Verification code"
          name="verification_code"
          field_icon={<HiHashtag />}
          rules={[numbers_only_rule(), required_rule(true), max_characters_rule(6), min_characters_rule(6)]}
        />
      </Form>
    </AuthLayout>
  )
}

export default Index
