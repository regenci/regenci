import tw from 'tailwind-styled-components'

export const TWHeroNav = tw.nav`
    flex
    h-12
    mt-6
    w-full
    items-center
    justify-between
`
export const TWHeroNavRight = tw.div`
    hidden
    md:flex
    items-center
`
export const TWHeroNavLinks = tw.div`
    mr-5
    hidden
    md:flex
    items-center
    justify-between
`
export const TWHeroNavLink = tw.a`
    mx-5
    text-lg
    relative
    after:w-0
    after:block
    text-black
    after:h-[2px]
    after:right-0
    after:mt-0
    after:absolute
    after:ease-in-out
    after:content-['']
    hover:after:w-full
    hover:after:left-0
    after:duration-300
    after:bg-[#ffe299]
    after:transition-all
    hover:after:bg-bg-[#ffe299]
`
export const TWHeroNavDivider = tw.div`
    w-[2px]
    h-[30px]
    mx-10
    bg-black
`
export const TWHeroNavButton = tw.a`
    flex
    ml-5
    text-lg
    h-[35px]
    w-[150px]
    items-center
    text-black
    duration-200
    justify-center
    bg-[#F8E5B5]
    cursor-pointer
    hover:bg-[#ffe299]
    transition-[background-color]
`
