import tw from 'tailwind-styled-components'

export const TWAuthLayout = tw.main`
    flex
    h-full
    flex-col
    md:h-screen
    overflow-hidden
    md:flex-row-reverse
`
export const TWAuthLayoutSider = tw.section`
    flex
    px-4
    mt-3
    w-full
    md:mt-0
    mx-auto
    md:px-0
    relative
    md:w-1/3
    items-center
    justify-between
`
export const TWAuthLayoutTranslateWrapper = tw.div`
    md:top-10
    md:right-20
    md:absolute
`
export const TWAuthLayoutSiderLogoWrapper = tw.a`
    flex
    bg-white
    flex-row
    items-center
    w-full
    max-w-sm
    py-4
    mx-auto
    md:mx-0
    my-auto
    min-w-min
    relative
    md:-left-5
    pt-4
    md:py-4
    transform
    origin-left
    bg-primary
    text-primary
`
export const TWAuthLayoutMain = tw.section`
    px-4
    h-full
    md:px-0
    md:flex
    md:w-2/3
    md:border-r
    justify-center
`
export const TWAuthLayoutMainInner = tw.div`
    py-4
    mt-10
    w-full
    mx-auto
    md:py-9
    max-w-sm
    min-w-min
    md:w-7/12
    md:my-auto
`
