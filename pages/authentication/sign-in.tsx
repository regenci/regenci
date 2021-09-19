import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthLayout } from '@app/components/common'
import { SignIn } from '@app/typings/authentication'
import { Field, Form, Notification } from '@app/components/web'
import { HiOutlineAtSymbol, HiOutlineLockClosed } from 'react-icons/hi'
import { email_rule, max_characters_rule, min_characters_rule, required_rule } from '@app/lib'

const Index = () => {
  const router = useRouter()
  const { getStarted } = router.query
  console.log(getStarted)

  React.useEffect(() => {
    if (getStarted)
      return Notification({
        type: 'info',
        description: 'It might be annoying, but we really need you to create an account so we can save your data.',
        infinite: true,
      })
  }, [getStarted])

  return (
    <AuthLayout title="Sign in">
      <Form
        layout="vertical"
        form_title="Sign in"
        form_button_title="Sign in"
        onFinish={(values: SignIn) => console.log(values)}
        form_extra_stuff={
          <>
            New here? -{' '}
            <Link href="/authentication/sign-up">
              <a className="hover:underline">Sign up</a>
            </Link>
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
        <div className="mb-3 -mt-3">
          <Link href="/authentication/forgot-password">
            <a className="hover:underline">Forgot password</a>
          </Link>
        </div>
      </Form>
    </AuthLayout>
  )
}

export default Index
