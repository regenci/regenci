import React from 'react'
import NextHead from 'next/head'
import { SEO } from '@app/config'
import { DefaultSeo } from 'next-seo'

const Head: React.FC = () => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextHead>
        <meta charSet="utf-8" />
      </NextHead>
    </>
  )
}

export default Head
