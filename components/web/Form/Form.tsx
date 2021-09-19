import React from 'react'
import { FormProps } from 'antd'
import { TWForm, TWFormButton, TWFormExtra, TWFormTitle } from './tw-styled'

interface IProps extends FormProps {
  form_title: string
  form_button_title: string
  form_extra_stuff?: JSX.Element
}

const Form: React.FC<IProps> = ({ children, form_title, form_extra_stuff, form_button_title, ...props }: IProps) => {
  return (
    <TWForm {...props}>
      <TWFormTitle>{form_title}</TWFormTitle>
      {children}
      <TWFormButton htmlType="submit" type="primary">
        {form_button_title}
      </TWFormButton>
      {form_extra_stuff && <TWFormExtra>{form_extra_stuff}</TWFormExtra>}
    </TWForm>
  )
}

export default Form
