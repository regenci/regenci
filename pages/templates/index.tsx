import React from "react";
// import { motion } from "framer-motion";
import { Carousel, MotionLayoutComponent } from "@components/common";
import { motion } from "framer-motion";
import { Button } from "@components/ui";
import { useRouter } from "next/router";

const variants = {
  initial: {
    x: "100%",
    transition: {
      delay: 0,
      duration: 0.6,
    },
  },
  animate: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.6,
    },
  },
  exit: {
    y: "100%",
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};
const textVariants = {
  initial: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
  exit: {
    y: -200,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};
const countVariants = {
  initial: {
    y: 2000,
    opacity: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
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
    y: 2000,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
    },
  },
};
const Templates = () => {
  const router = useRouter();
  const [selected, setSelected] = React.useState<number | undefined>(undefined);
  return (
    <MotionLayoutComponent className="flex flex-col justify-center items-center" variants={variants} title="Choose the right template" bg="black">
      <motion.h1 className="text-white text-5xl mt-6 sm:text-3xl sm:w-full sm:text-center sm:px-2 sm:pt-2 xm:text-2xl" variants={textVariants}>
        Double tap to choose a template
      </motion.h1>
      <Carousel setSelected={setSelected} />
      <motion.div variants={countVariants} className="mb-5">
        <div className="text-3xl sm:text-2xl text-center text-white mb-2">{selected}</div>
        <Button bgType="black" className="px-10" onClick={() => (selected ? router.push(`/app/builder/${selected}`) : null)}>
          {selected ? "Proceed" : "No template selected"}
        </Button>
      </motion.div>
    </MotionLayoutComponent>
  );
};
export default Templates;
