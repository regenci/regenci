import React from 'react'
import { FormProps } from 'antd'
import { TWForm, TWFormButton, TWFormExtra, TWFormTitle } from './tw-styled'

interface IProps extends FormProps {
  form_title: string
  form_button_title: string
  form_description?: string
  form_extra_stuff?: JSX.Element
}

const Form: React.FC<IProps> = ({
  children,
  form_title,
  form_extra_stuff,
  form_description,
  form_button_title,
  ...props
}: IProps) => {
  return (
    <TWForm {...props}>
      <TWFormTitle>{form_title}</TWFormTitle>
      {children}
      <TWFormButton
        htmlType="submit"
        type="primary"
        style={{ backgroundColor: '#F8E5B5', borderColor: '#F8E5B5', color: 'black' }}
      >
        {form_button_title}
      </TWFormButton>
      {form_extra_stuff && <TWFormExtra>{form_extra_stuff}</TWFormExtra>}
    </TWForm>
  )
}

export default Form
