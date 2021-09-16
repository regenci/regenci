import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'

const App = (props: AppProps): JSX.Element => {
  return (
    <AnimatePresence>
      <NextNProgress height={2} color="black" stopDelayMs={200} showOnShallow={true} options={{ showSpinner: false }} />
      <props.Component key={props.router.route} {...props.pageProps} />
    </AnimatePresence>
  )
}

export default App
