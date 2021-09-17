import React from 'react'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'

const Loader = dynamic(() => import('@app/components/web/Loader'), { ssr: false })

const App = (props: AppProps): JSX.Element => {
  return (
    <>
      <Loader />
      <AnimatePresence>
        <NextNProgress
          height={2}
          color="black"
          stopDelayMs={200}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <props.Component key={props.router.route} {...props.pageProps} />
      </AnimatePresence>
    </>
  )
}

export default App
