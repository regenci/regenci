import tw from "tailwind-styled-components";

export const TWCarouselContainerComponent = tw.div`
    mx-5
    my-0
    h-[800px]
    w-full
    flex
    justify-center
    items-center
    relative
    sm:h-500
    cursor-grab
    overflow-hidden
    active:cursor-grabbing
`;
export const TWCarouselSlidesContainerComponent = tw.div`
    flex
    justify-center
`;
export const TWCarouselImageComponent = tw.img`
    w-250
    h-350
    relative
    rounded-20
    origin-bottom
    object-contain
    overflow-hidden
    pointer-events-none
`;
