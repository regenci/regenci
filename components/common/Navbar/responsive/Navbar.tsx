import React from 'react'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { TWHeroResponsiveNav, TWHeroResponsiveNavItem } from './tw-styled'
import { HiLogin, HiOutlineHome, HiOutlineQuestionMarkCircle, HiOutlineTemplate } from 'react-icons/hi'

const Navbar: React.FC = () => {
  const router = useRouter()

  const links = [
    { url: '/', icon: HiOutlineHome, text: 'Home' },
    { url: '/templates', icon: HiOutlineTemplate, text: 'Templates' },
    { url: '/faq', icon: HiOutlineQuestionMarkCircle, text: 'Faq' },
    { url: '/authentication/sign-in', icon: HiLogin, text: 'Sign in' },
  ]

  return (
    <TWHeroResponsiveNav>
      {links.map((link) => (
        <Link href={link.url} passHref key={nanoid()}>
          <TWHeroResponsiveNavItem className={router.pathname === link.url ? 'text-[#ffd877] font-black' : undefined}>
            <link.icon className="text-lg sm:text-xl" />
            <div className="text-xs sm:text-sm mt-2">{link.text}</div>
          </TWHeroResponsiveNavItem>
        </Link>
      ))}
    </TWHeroResponsiveNav>
  )
}

export default Navbar
