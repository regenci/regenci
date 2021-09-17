import type { NextPage } from 'next'
import { Banner, HeroLayout } from '@app/components/common'

const Home: NextPage = () => {
  return (
    <HeroLayout title="Homepage">
      <Banner />
    </HeroLayout>
  )
}

export default Home
