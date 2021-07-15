import Image from "next/image";
import { slides } from "./carousel-data";
import PietileCarousel from "pietile-carousel";
import { TWCarouselContainerComponent, TWCarouselImageWrapper } from "./carousel-tw-styled";
import { useMediaQuery } from "react-responsive";
import React from "react";
import { motion } from "framer-motion";

interface IProps {
  setSelected: (value?: number) => void;
}

const Carousel = (props: IProps) => {
  // const lg = useMediaQuery({ minWidth: 1000 });
  const md = useMediaQuery({ maxWidth: 1000 });
  const sm = useMediaQuery({ maxWidth: 780 });
  const xm = useMediaQuery({ maxWidth: 600 });

  const MotionContainer = motion(TWCarouselContainerComponent);
  const MotionSlide = motion(TWCarouselImageWrapper);
  const variants = {
    initial: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        delay: 0.7,
      },
    },
  };

  return (
    <MotionContainer variants={variants}>
      <PietileCarousel count={xm ? 1 : sm ? 2 : md ? 3 : 5} className="flex-1 cursor-grab active:cursor-grabbing py-10">
        {slides.map((slide, i) => (
          <MotionSlide key={i} whileTap={{ scale: 1.2 }} onDoubleClick={() => props.setSelected(i + 1)}>
            <Image width={250} height={350} src={slide} alt={slide} quality={100} objectFit="fill" draggable={false} />
          </MotionSlide>
        ))}
      </PietileCarousel>
    </MotionContainer>
  );
};

export default Carousel;
