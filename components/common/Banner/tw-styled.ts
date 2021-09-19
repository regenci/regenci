import { CircleArrowIcon } from '@app/components/Icons'
import { motion } from 'framer-motion'
import tw from 'tailwind-styled-components'

export const TWBanner = tw.div`
    flex
    w-full
    flex-col
    items-center
    mt-[-50px]
    md:mt-0
    md:items-start
`
export const TWBannerInner = tw.div`
    flex
    mt-5
    w-full
    flex-col
    items-center
    md:items-end
`
export const TWBannerBigTextElement = tw(motion.div)`
    flex
    w-full
    items-center
    xl:w-[1000px]
`
export const TWBannerElementButton = tw.a`
    flex
    mt-8
    h-10
    w-full
    sm:h-16
    md:h-20
    text-base
    sm:text-2xl
    md:w-[480px]
    md:text-4xl
    items-center
    text-black
    duration-200
    cursor-pointer
    justify-center
    bg-[#F8E5B5]
    transition-all
    hover:bg-[#ffe299]
`
export const TWBannerCircleArrow = tw(CircleArrowIcon)`
    w-6
    h-6
    sm:w-7
    sm:h-7
    md:w-10
    md:h-10
    ml-5
`
export const TWBannerSmallTextWrapper = tw.div`
    flex
    mt-8
    w-full
    md:mt-5
    flex-col
    text-right
    md:w-[500px]
`
export const TWBannerSmallTextHeading = tw.div`
    text-lg
    font-semibold
    sm:text-2xl
    md:text-4xl
`
export const TWBannerSmallTextDescription = tw.div`
    w-full
    md:mt-2
    text-sm
    leading-4
    md:text-2xl
    sm:text-base
    md:leading-7
`
