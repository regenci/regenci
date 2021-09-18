import tw from 'tailwind-styled-components'

export const TWDefaultLayout = tw.div`
    pt-5
    w-full
    h-full
    relative
    px-[20px]
    min-w-full
    bg-white
    min-h-full
    sm:px-[60px]
    md:px-[80px]
    duration-300
    xl:px-[120px]
    2xl:px-[162px]
    overflow-hidden
    transition-[padding]
`
export const TWDefaultLayoutInner = tw.div`
    flex
    mb-12
    pb-12
    w-full
    h-full
    items-center
`
