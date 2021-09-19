import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { HiTranslate } from 'react-icons/hi'
import { Children } from '@app/typings/other'
import { LogoWithTextIcon } from '@app/components/Icons'
import {
  TWAuthLayout,
  TWAuthLayoutMain,
  TWAuthLayoutMainInner,
  TWAuthLayoutSider,
  TWAuthLayoutSiderLogoWrapper,
  TWAuthLayoutTranslateWrapper,
} from './tw-styled'
import { Translate } from '../..'

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
              <LogoWithTextIcon className="w-28 h-8 md:w-36 md:h-10" />
            </TWAuthLayoutSiderLogoWrapper>
          </Link>
          <TWAuthLayoutTranslateWrapper>
            <Translate title={<HiTranslate />} />
          </TWAuthLayoutTranslateWrapper>
        </TWAuthLayoutSider>
        <TWAuthLayoutMain>
          <TWAuthLayoutMainInner>{children}</TWAuthLayoutMainInner>
        </TWAuthLayoutMain>
      </TWAuthLayout>
    </>
  )
}

export default Layout
