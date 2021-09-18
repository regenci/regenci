import type { NextPage } from 'next'
import { Banner, DefaultLayout } from '@app/components/common'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Homepage">
      <Banner />
    </DefaultLayout>
  )
}

export default Home
