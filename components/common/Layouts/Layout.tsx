import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Navbar } from '../index'
import { Children } from '@app/typings/other'
import { useMediaQuery } from 'react-responsive'
import { TWDefaultLayout, TWDefaultLayoutInner } from './tw-styled'

const ResponsiveNavbar = dynamic(() => import('../Navbar/responsive/Navbar'), { ssr: false })

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
      <TWDefaultLayout>
        <Navbar />
        <TWDefaultLayoutInner>{children}</TWDefaultLayoutInner>
        {md && <ResponsiveNavbar />}
      </TWDefaultLayout>
    </>
  )
}

export default Layout
