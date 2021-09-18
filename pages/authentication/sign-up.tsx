import React from 'react'
import Link from 'next/link'
import { Col, Row } from 'antd'
import { Form, Field } from '@app/components/web'
import { AuthLayout } from '@app/components/common'
import { SignUp } from '@app/typings/authentication'
import { HiOutlineAtSymbol, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi'
import {
  email_rule,
  required_rule,
  dependent_rule,
  max_characters_rule,
  min_characters_rule,
  letters_and_spaces_rule,
} from '@app/lib'

const Index = () => {
  return (
    <AuthLayout title="Sign up">
      <Form
        layout="vertical"
        form_title="Sign up"
        form_button_title="Sign up"
        onFinish={(values: SignUp) => console.log(values)}
        form_extra_stuff={
          <>
            New here? - <Link href="/authentication/sign-in">Sign in</Link>
          </>
        }
      >
        <Row gutter={24}>
          <Col span={12}>
            <Field
              name="first_name"
              label="First name"
              field_icon={<HiOutlineUser />}
              rules={[letters_and_spaces_rule(), required_rule(true), max_characters_rule(35)]}
            />
          </Col>
          <Col span={12}>
            <Field
              name="last_name"
              label="Last name"
              field_icon={<HiOutlineUser />}
              rules={[letters_and_spaces_rule(), required_rule(true), max_characters_rule(35)]}
            />
          </Col>
        </Row>
        <Field
          name="email_address"
          label="Email address"
          field_icon={<HiOutlineAtSymbol />}
          rules={[email_rule(), required_rule(true), max_characters_rule(35)]}
        />
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
