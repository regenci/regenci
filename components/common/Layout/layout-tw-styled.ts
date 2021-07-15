import tw from "tailwind-styled-components";

export const TWLayoutComponent = tw.div`
    w-full
    h-screen
    min-h-screen
    flex
    flex-row
    sm:flex-col-reverse
    sm:justify-between
    overflow-hidden
    bg-black
`;

export const TWMotionPageComponent = tw.div`
    flex
    flex-1
    h-full
    bg-black
    items-center
    justify-center 
`;

// Builder
export const TWBuilderLayoutComponent = tw.div`
    w-full
    h-screen
    min-h-screen
    flex
    flex-row
    sm:flex-col-reverse
    sm:justify-between
    overflow-hidden
    bg-gray-100
`;

export const TWBuilderComponent = tw.div`
    w-full
    h-full
    flex
    justify-center
    items-center
`;
export const TWBuilderPreviewContainerComponent = tw.div`
    w-700
    max-h-1000
    h-6/7
    bg-white
    border-[1px]
    border-white
    sm:overflow-hidden
    sm:w-full
    sm:mx-3
    xm:h-[500px]
    xm:max-h-[500px]
`;

export const TWBuilderSidebarLinkComponent = tw.div`
    my-3
    mx-0
    sm:my-0
    sm:mx-5
`;
