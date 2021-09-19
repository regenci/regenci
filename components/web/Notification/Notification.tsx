import { notification } from 'antd'

interface IProps {
  type: 'success' | 'error' | 'warning' | 'info'
  infinite?: boolean
  message?: string
  description?: string
}

const Notification = ({ type, infinite, message, description }: IProps) =>
  notification[type]({
    placement: 'bottomRight',
    duration: infinite ? 0 : 4.5,
    message: message ? message : type.charAt(0).toUpperCase() + type.slice(1),
    description,
  })

export default Notification
