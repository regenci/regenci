import React from 'react'
import { FormItemProps, Input, Form } from 'antd'
import { IconType } from 'rc-tree/lib/interface'
import { HiEye, HiEyeOff } from 'react-icons/hi'

interface IProps extends FormItemProps {
  is_password_field?: boolean
  field_icon: IconType
}

const Field: React.FC<IProps> = ({ field_icon, is_password_field, ...props }: IProps) => {
  if (is_password_field)
    return (
      <Form.Item {...props} className="w-full !mb-2.5 md:!mb-6">
        <Input.Password
          type="password"
          prefix={field_icon}
          placeholder={props.label as string}
          iconRender={(visible) => (visible ? <HiEye /> : <HiEyeOff />)}
        />
      </Form.Item>
    )

  return (
    <Form.Item {...props} className="w-full !mb-2.5 md:!mb-6">
      <Input type="text" prefix={field_icon} placeholder={props.label as string} />
    </Form.Item>
  )
}

export default Field
