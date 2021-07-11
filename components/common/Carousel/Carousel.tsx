import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { slides } from "./carousel-data";
import { TWCarouselContainerComponent, TWCarouselImageComponent, TWCarouselSlidesContainerComponent } from "./carousel-tw-styled";

const Carousel = () => {
  const router = useRouter();
  const [active, setActive] = React.useState(0);
  const [coordX, setCoordX] = React.useState(0);

  const diameter = 1000;
  const degrees = 22;

  const slideWidth = diameter / slides.length;

  const onUpdate = (latest: { x: number }) => {
    setCoordX(latest.x);
  };

  const handleModifyTarget = (target: number) => {
    const snapTarget = Math.round(target / slideWidth) * slideWidth;

    const clampedActive = Math.min(Math.max(Number(-snapTarget / slideWidth)), slides.length - 1);

    setActive(clampedActive);

    return snapTarget;
  };

  const handleDoubleClick = (id: number) => {
    router.push("/app/builder/" + id);
  };
  return (
    <TWCarouselContainerComponent>
      <style jsx>{`
        .custom-carousel-slide {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          user-select: none;
        }

        .custom-carousel-slide img {
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          will-change: transform;
        }

        .custom-carousel-slide.active img {
          transform: scale(1.2);
        }
      `}</style>
      <motion.div
        drag="x"
        onUpdate={onUpdate}
        dragElastic={0}
        dragConstraints={{
          right: 0,
          left: -(slideWidth * (slides.length - 1)),
        }}
        dragTransition={{
          power: 0.1,
          timeConstant: 200,
          modifyTarget: handleModifyTarget,
        }}
      >
        <TWCarouselSlidesContainerComponent>
          {slides.map((slide, index) => {
            const rotate = index * degrees;
            const denominator = (slideWidth / degrees) * 1;

            return (
              <motion.div
                onDoubleClick={() => handleDoubleClick(index)}
                key={index}
                className={`custom-carousel-slide ${active === index ? "active" : ""}`}
                animate={{
                  rotate: coordX / denominator + rotate,
                  transformOrigin: `100% ${diameter}px`,
                }}
                transition={{
                  ease: "easeOut",
                  duration: 0.2,
                }}
              >
                <TWCarouselImageComponent src={slide} alt="carousel-slide" />
              </motion.div>
            );
          })}
        </TWCarouselSlidesContainerComponent>
      </motion.div>
    </TWCarouselContainerComponent>
  );
};

export default Carousel;
