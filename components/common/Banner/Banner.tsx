import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  TWBanner,
  TWBannerInner,
  TWBannerSmallTextWrapper,
  TWBannerCircleArrow,
  TWBannerElementButton,
  TWBannerBigTextElement,
  TWBannerSmallTextHeading,
  TWBannerSmallTextDescription,
} from './tw-styled'
import { useMediaQuery } from 'react-responsive'

const BannerTextIcon = dynamic(() => import('@app/components/Icons/BannerTextIcon'), { ssr: false })
const BannerTextResponsiveIcon = dynamic(() => import('@app/components/Icons/BannerTextResponsiveIcon'), { ssr: false })

const Banner: React.FC = () => {
  const [hovered, setHovered] = React.useState<boolean>(false)

  const md = useMediaQuery({ maxWidth: 768 })
  React.useEffect(() => {
    if (md) setHovered(true)
    return () => setHovered(false)
  }, [md])
  return (
    <TWBanner>
      <TWBannerBigTextElement>{md ? <BannerTextResponsiveIcon /> : <BannerTextIcon />}</TWBannerBigTextElement>
      <Link href="/authentication/sign-in?getStarted=true" passHref>
        <TWBannerElementButton
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Get your resume <TWBannerCircleArrow hovered={hovered} />
        </TWBannerElementButton>
      </Link>
      <TWBannerInner
        initial={{ opacity: 0, skewX: 7, x: 300 }}
        animate={{ opacity: 1, skewX: 0, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <TWBannerSmallTextWrapper>
          <TWBannerSmallTextHeading>We believe in simplicity.</TWBannerSmallTextHeading>
          <TWBannerSmallTextDescription>
            The more concise your resume is, the higher are your chances to get hired. Don’t worry we’re taking care of
            that!
          </TWBannerSmallTextDescription>
        </TWBannerSmallTextWrapper>
      </TWBannerInner>
    </TWBanner>
  )
}

export default Banner
