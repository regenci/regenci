import tw from 'tailwind-styled-components'

export const TWDropdown = 'relative ml-5'
export const TWDropdownButton = `
    flex
    text-xl
    relative
    after:w-0
    after:mt-8
    text-black
    after:block
    items-center
    after:h-[2px]
    after:right-0
    justify-center
    after:absolute
    after:ease-in-out
    hover:after:left-0
    after:content-['']
    hover:after:w-full
    after:duration-300
    after:bg-[#ffe299] 
    after:transition-all`
export const TWDropdownPanel = 'mt-10 absolute top-0 left-1/2 transform bg-white shadow-md -translate-x-1/2'
export const TWDropdownPanelInner = tw.div`
    py-1
    flex
    px-2.5
    flex-col
    `
export const TWDropdownItem = tw.a`
    py-1
    flex
    w-full
    duration-200
    text-black
    cursor-pointer
    transition-all
`
export const TWHeroDropdownButtonActive = `
    after:left-0
    after:w-full
`
