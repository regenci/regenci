import React from 'react'
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
  return (
    <TWBanner>
      <TWBannerBigTextElement>{md ? <BannerTextResponsiveIcon /> : <BannerTextIcon />}</TWBannerBigTextElement>
      <TWBannerElementButton onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        Get your resume <TWBannerCircleArrow hovered={hovered} />
      </TWBannerElementButton>
      <TWBannerInner>
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
