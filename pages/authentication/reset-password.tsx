import React from 'react'
import Link from 'next/link'
import { Col, Row } from 'antd'
import { Form, Field } from '@app/components/web'
import { AuthLayout } from '@app/components/common'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { ResetPassword } from '@app/typings/authentication'
import { required_rule, dependent_rule, max_characters_rule, min_characters_rule } from '@app/lib'

const Index = () => {
  return (
    <AuthLayout title="Reset password">
      <Form
        layout="vertical"
        form_title="Reset password"
        form_button_title="Reset"
        form_description="Please write down below your new password, the new password must differ from the previous one."
        onFinish={(values: ResetPassword) => console.log(values)}
      >
        <Field
          name="password"
          label="Password"
          is_password_field
          field_icon={<HiOutlineLockClosed />}
          rules={[required_rule(true), max_characters_rule(30), min_characters_rule(4)]}
        />
        <Field
          name="confirm_password"
          label="Confirm password"
          is_password_field
          field_icon={<HiOutlineLockClosed />}
          dependencies={['password']}
          rules={[required_rule(true), dependent_rule({ dependency: 'password' })]}
        />
      </Form>
    </AuthLayout>
  )
}

export default Index
