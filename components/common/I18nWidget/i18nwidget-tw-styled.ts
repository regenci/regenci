import tw from "tailwind-styled-components";

export const TWI18nWidgetRoot = tw.nav`
    relative
`;
export const TWI18nWidgetButton = tw.button`
    h-10
    px-2
    rounded-md
    border
    border-accent-2
    flex
    items-center
    justify-center
    transition-colors
    ease-linear
    hover:border-accent-3
    hover:shadow-sm
    focus:outline-none
`;

export const TWI18nWidgetDropDown = tw.div`
    fixed
    right-0
    top-12
    mt-2
    origin-top-right
    outline-none
    bg-primary
    z-40
    w-full
    h-full
    lg:absolute
    lg:border
    lg:border-accent-1
    lg:shadow-lg
    lg:w-56
    lg:h-auto
`;

export const TWI18nWidgetCloseButton = tw.button`
    md:hidden
`;
export const TWI18nWidgetItem = tw.a`
    flex
    cursor-pointer
    px-6
    py-3
    transition
    ease-in-out
    duration-150
    text-primary
    leading-6
    font-medium
    items-center
    capitalize
    hover:bg-accent-1
`;
