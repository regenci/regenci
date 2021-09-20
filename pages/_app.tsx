import '@app/assets/main.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Loader } from '@app/components/web'
import { App, Head } from '@app/components/common'
import { persistor, store } from '@app/store/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <App Component={Component} {...pageProps} router={router} />
        </PersistGate>
      </Provider>
    </>
  )
}
