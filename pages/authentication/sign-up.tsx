import React from 'react'
import Link from 'next/link'
import { Col, Row } from 'antd'
import { AuthLayout } from '@app/components/common'
import { SignUpForm } from '@app/typings/authentication'
import { Form, Field, Notification } from '@app/components/web'
import { HiOutlineAtSymbol, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi'
import {
  email_rule,
  required_rule,
  dependent_rule,
  max_characters_rule,
  min_characters_rule,
  letters_and_spaces_rule,
} from '@app/lib'
import { signUpReq } from '@app/requests'
import { setRegisterSlice } from '@app/store/features'
import { useAppDispatch } from '@app/store/hooks'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = React.useState<boolean>(false)

  const onFormSubmit = async (values: SignUpForm) => {
    setLoading(true)
    const { confirm_password, ...rest } = values
    try {
      const response = await signUpReq({ ...rest })
      if (response.data) {
        setLoading(false)
        Notification({ type: 'success', description: response.data.message })
        dispatch(setRegisterSlice(response.data.decription_key))
        router.push('/authentication/account-activation')
      }
    } catch (error: any) {
      Notification({ type: 'error', description: error.response.data.message })
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Sign up">
      <Form
        is_submitting={loading}
        layout="vertical"
        form_title="Sign up"
        form_button_title="Sign up"
        onFinish={(values: SignUpForm) => onFormSubmit(values)}
        form_extra_stuff={
          <>
            New here? -{' '}
            <Link href="/authentication/sign-in">
              <a className="hover:underline">Sign in</a>
            </Link>
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
