import React from 'react'
import Link from 'next/link'
import { Field, Form } from '@app/components/web'
import { AuthLayout } from '@app/components/common'
import { SignIn } from '@app/typings/authentication'
import { HiOutlineAtSymbol, HiOutlineLockClosed } from 'react-icons/hi'
import { email_rule, max_characters_rule, min_characters_rule, required_rule } from '@app/lib'

const Index = () => {
  return (
    <AuthLayout title="Sign in">
      <Form
        layout="vertical"
        form_title="Sign in"
        form_button_title="Sign in"
        onFinish={(values: SignIn) => console.log(values)}
        form_extra_stuff={
          <>
            New here? - <Link href="/authentication/sign-up">Sign up</Link>
          </>
        }
      >
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
      </Form>
    </AuthLayout>
  )
}

export default Index
