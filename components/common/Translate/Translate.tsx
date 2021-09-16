import cn from 'classnames'
import { nanoid } from 'nanoid'
import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import DropdownItem from './DropdownItem'
import { Children } from '@app/typings/other'
import { Popover, Transition } from '@headlessui/react'
import {
  TWDropdown,
  TWDropdownButton,
  TWDropdownPanel,
  TWDropdownPanelInner,
  TWHeroDropdownButtonActive,
} from './tw-styled'

interface IProps {
  title?: Children | string
}

const Translate: React.FC<IProps> = ({ title }: IProps) => {
  const router = useRouter()
  const locales = ['en', 'ro', 'ru']
  return (
    <Popover className={TWDropdown}>
      {({ open, close }) => (
        <>
          <Popover.Button className={cn(TWDropdownButton, open ? TWHeroDropdownButtonActive : '')}>
            {title}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className={TWDropdownPanel}>
              <TWDropdownPanelInner>
                {locales.map((locale) => (
                  <DropdownItem
                    key={nanoid()}
                    href={router.asPath}
                    locale={locale}
                    onClick={() => close()}
                    active={locale === 'en'}
                  >
                    {locale}
                  </DropdownItem>
                ))}
              </TWDropdownPanelInner>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Translate
