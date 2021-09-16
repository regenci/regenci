import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { HeroNavbar } from '../../Navbars'
import { Children } from '@app/typings/other'
import { useMediaQuery } from 'react-responsive'
import { TWHeroLayout, TWHeroLayoutInner } from './tw-styled'

const ResponsiveHeroNavbar = dynamic(() => import('../../Navbars/Hero/responsive/Navbar'), { ssr: false })
interface IProps {
  title: string
  children: Children
}

const Layout: React.FC<IProps> = ({ title, children }: IProps) => {
  const md = useMediaQuery({ maxWidth: 768 })

  return (
    <>
      <Head>
        <title>{title} | Resume Agenci</title>
      </Head>
      <TWHeroLayout>
        <HeroNavbar />
        <TWHeroLayoutInner>{children}</TWHeroLayoutInner>
        {md && <ResponsiveHeroNavbar />}
      </TWHeroLayout>
    </>
  )
}

export default Layout
