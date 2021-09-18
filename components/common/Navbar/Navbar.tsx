import React from 'react'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { Translate } from '../index'
import { HiTranslate } from 'react-icons/hi'
import { LogoIcon } from '@app/components/Icons'
import {
  TWHeroNav,
  TWHeroNavRight,
  TWHeroNavLinks,
  TWHeroNavLink,
  TWHeroNavButton,
  TWHeroNavLogoWrapper,
} from './tw-styled'

const Navbar: React.FC = () => {
  const router = useRouter()

  const links = [
    { url: '/', text: 'Home', component: TWHeroNavLink },
    { url: '/templates', text: 'Templates', component: TWHeroNavLink },
    { url: '/faq', text: 'Faq', component: TWHeroNavLink },
    { url: '/authentication/sign-in', text: 'Sign in', component: TWHeroNavButton },
  ]

  return (
    <TWHeroNav>
      <Link href="/" passHref>
        <TWHeroNavLogoWrapper>
          <LogoIcon />
        </TWHeroNavLogoWrapper>
      </Link>
      <TWHeroNavRight>
        <TWHeroNavLinks>
          {links.map((link) => (
            <Link href={link.url} passHref key={nanoid()}>
              <link.component className={router.pathname === link.url ? 'after:w-full after:left-0' : ''}>
                {link.text}
              </link.component>
            </Link>
          ))}
        </TWHeroNavLinks>
        <Translate title={<HiTranslate />} />
      </TWHeroNavRight>
    </TWHeroNav>
  )
}

export default Navbar
