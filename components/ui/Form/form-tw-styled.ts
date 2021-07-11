import tw from "tailwind-styled-components";

export const TWFormComponent = tw.div`
    w-500 
    xm:w-full 
    xm:px-5
`;

export const TWFormTitleComponent = tw.h1`
    text-black
    text-3xl
    mb-2
`;

export const TWFormDescriptionComponent = tw.p`
    text-gray-400
`;

export const TWFormButtonComponent = tw.button`
    w-full
    py-1.5
    hover:shadow-2xl
    bg-black
    text-white
    rounded-none
    transition-all
    duration-300
    flex
    justify-center
    items-center
    text-sm
    border-0
    tracking-widest
    font-normal
    capitalize
    outline-none
`;
export const TWFormSocialHeadingComponent = tw.h2`
    text-xl
    text-center
    -mt-2
    mb-5
`;
export const TWFormSocialButtonWrapperComponent = tw.div`
    my-1
    flex
    items-center
    w-full
    justify-between
    social-signs
    xm:mt-1
    xm:mx-0
`;
