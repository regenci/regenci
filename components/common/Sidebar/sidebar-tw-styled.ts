import tw from "tailwind-styled-components";

// sm = max-width: 767px
export const TWSidebarComponent = tw.div`
    flex
    w-20
    flex-col
    relative
    bg-black
    text-white
    items-center
    min-h-screen
    justify-between
    pt-8
    pb-8
    sm:min-h-0
    sm:p-5
    xm:p-3
    sm:z-20
    sm:w-full
    sm:flex-row
    sm:overflow-x-scroll
    z-20
`;
export const TWSidebarLogoComponent = tw.h1`
    text-white
    cursor-pointer
    text-4xl
    font-bold
    mb-5
    sm:mb-0
    sm:mr-5
    sm:text-3xl
`;
export const TWSidebarLinkIconComponent = tw.div`
    text-xl
    text-white
    cursor-pointer
    hover:opacity-100
`;
export const TWSidebarLinkComponent = tw.div`
    my-5 
    mx-0
    sm:my-0
    sm:mx-5
`;
