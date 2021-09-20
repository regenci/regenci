import React from 'react'
import { useRouter } from 'next/router'
import { HiHashtag } from 'react-icons/hi'
import { activateAccountReq } from '@app/requests'
import { AuthLayout } from '@app/components/common'
import { setRegisterSlice } from '@app/store/features'
import { Field, Form, Notification } from '@app/components/web'
import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { max_characters_rule, min_characters_rule, numbers_only_rule, required_rule } from '@app/lib'

const Index = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [loading, setLoading] = React.useState<boolean>(false)
  const state = useAppSelector((state) => state.auth.register_decription_key)

  // if the decription key is not present redirect to previous page
  React.useEffect(() => {
    let invalid_key = !state || state === null
    if (invalid_key) router.back()
  }, [state, router])

  const onFormSubmit = async (verification_code: string) => {
    setLoading(true)
    try {
      const response = await activateAccountReq({
        verification_code: parseInt(verification_code),
        decription_key: state!,
      })
      if (response.data.match) {
        setLoading(false)
        Notification({
          type: 'success',
        })
        router.push('/authentication/sign-in')
        setTimeout(() => {
          dispatch(setRegisterSlice(null))
        }, 2000)
      }
    } catch (error: any) {
      Notification({ type: 'error', description: error.response.data.message })
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Activation">
      <Form
        is_submitting={loading}
        layout="vertical"
        form_title="Account activation"
        form_button_title="Activate"
        form_description="Please enter the verification code received at e-mail address
          to verify your account."
        onFinish={(values: { verification_code: string }) => onFormSubmit(values.verification_code)}
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
