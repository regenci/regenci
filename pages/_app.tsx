import '@app/assets/main.css'
import type { AppProps } from 'next/app'
import { App, Head } from '@app/components/common'

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head />
      <App Component={Component} {...pageProps} router={router} />
    </>
  )
}
