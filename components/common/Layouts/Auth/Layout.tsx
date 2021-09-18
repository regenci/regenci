import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Children } from '@app/typings/other'
import {
  TWAuthLayout,
  TWAuthLayoutMain,
  TWAuthLayoutMainInner,
  TWAuthLayoutSider,
  TWAuthLayoutSiderLogoWrapper,
} from './tw-styled'
import { LogoWithTextIcon } from '@app/components/Icons'

interface IProps {
  title: string
  children: Children
}

const Layout: React.FC<IProps> = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{title} | Authentication Resume Agenci</title>
      </Head>
      <TWAuthLayout>
        <TWAuthLayoutSider>
          <Link href="/" passHref>
            <TWAuthLayoutSiderLogoWrapper>
              <LogoWithTextIcon className="w-36 h-10" />
            </TWAuthLayoutSiderLogoWrapper>
          </Link>
        </TWAuthLayoutSider>
        <TWAuthLayoutMain>
          <TWAuthLayoutMainInner>{children}</TWAuthLayoutMainInner>
        </TWAuthLayoutMain>
      </TWAuthLayout>
    </>
  )
}

export default Layout
