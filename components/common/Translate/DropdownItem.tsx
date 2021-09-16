import React from 'react'
import Link, { LinkProps } from 'next/link'
import { Children } from '@app/typings/other'
import { TWDropdownItem } from './tw-styled'

interface IProps extends LinkProps {
  active: boolean
  children: Children
  onClick: () => void
}

const DropdownItem: React.FC<IProps> = ({ active, onClick, children, ...props }: IProps) => {
  return (
    <Link {...props}>
      <TWDropdownItem onClick={onClick} className={active ? 'font-bold' : 'font-normal'}>
        {children}
      </TWDropdownItem>
    </Link>
  )
}

export default DropdownItem
