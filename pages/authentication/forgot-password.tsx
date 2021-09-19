import React from 'react'
import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi'
import { Field, Form } from '@app/components/web'
import { AuthLayout } from '@app/components/common'
import { email_rule, max_characters_rule, required_rule } from '@app/lib'

const Index = () => {
  return (
    <AuthLayout title="Forgot password">
      <Form
        layout="vertical"
        form_title="Forgot password"
        form_description="Please enter your e-mail address, you will receive a verification code
          to confirm that you own the specified e-mail address."
        form_button_title="Send"
        onFinish={(values: { email_address: string }) => console.log(values)}
        form_extra_stuff={
          <>
            Remember password? -{' '}
            <Link href="/authentication/sign-in">
              <a className="hover:underline">Sign in</a>
            </Link>
          </>
        }
      >
        <Field
          label="E-mail"
          name="email_address"
          field_icon={<HiOutlineMail />}
          rules={[required_rule(true), max_characters_rule(40), email_rule()]}
        />
      </Form>
    </AuthLayout>
  )
}

export default Index
