import tw from 'tailwind-styled-components'

export const TWLoader = tw.div`
    z-50
    flex
    top-0
    w-full
    h-full
    left-0
    absolute
   bg-white
   items-center
   justify-center
   overflow-hidden
`
export const TWLoaderSvgWrapper = tw.svg`
    z-50
    flex
`
export const TWLoaderSvgTextRect = tw.rect`
    w-full
    h-full
    fill-current
    text-gray-600
`
export const TWLoaderSvgText = tw.text`
    text-4xl
    font-bold
`
export const TWLoaderSvgRect = tw.rect`
    w-full
    h-full
    fill-current
`
export const TWLoaderSvgPattern = tw.pattern`
    text-black
`
