import React from 'react'
import { IconType } from 'rc-tree/lib/interface'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { FormItemProps, Input, Form } from 'antd'

interface IProps extends FormItemProps {
  is_password_field?: boolean
  field_icon: IconType
  placeholder?: string
  maxLength?: number
  minLength?: number
}

const Field: React.FC<IProps> = ({
  maxLength,
  minLength,
  placeholder,
  field_icon,
  is_password_field,
  ...props
}: IProps) => {
  if (is_password_field)
    return (
      <Form.Item {...props} className="w-full !mb-2.5 md:!mb-6">
        <Input.Password
          type="password"
          prefix={field_icon}
          placeholder={placeholder ?? (props.label as string)}
          iconRender={(visible) => (visible ? <HiEye /> : <HiEyeOff />)}
        />
      </Form.Item>
    )

  return (
    <Form.Item {...props} className="w-full !mb-2.5 md:!mb-6">
      <Input
        type="text"
        prefix={field_icon}
        placeholder={placeholder ?? (props.label as string)}
        maxLength={maxLength ?? undefined}
        minLength={minLength ?? undefined}
      />
    </Form.Item>
  )
}

export default Field
