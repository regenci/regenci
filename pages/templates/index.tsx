import React from "react";
// import { motion } from "framer-motion";
import { Carousel, MotionLayoutComponent } from "@components/common";
import { motion } from "framer-motion";
import { getLocalStorage } from "@lib/localStorage";

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
  const [selected, setSelected] = React.useState<string>("");
  React.useEffect(() => {
    const curr = getLocalStorage("_curr_selected_template");
    if (curr) setSelected(curr);
  }, []);
  return (
    <MotionLayoutComponent className="flex flex-col justify-center items-center" variants={variants} title="Choose the right template" bg="black">
      <motion.h1 className="text-white text-5xl mt-6" variants={textVariants}>
        Double tap to choose a template
      </motion.h1>
      <Carousel />
      {selected !== "" ? (
        <motion.h1 variants={countVariants} className="text-8xl text-white">
          {selected}
        </motion.h1>
      ) : (
        <motion.h1 variants={countVariants} className="text-4xl text-white">
          No template selected
        </motion.h1>
      )}
    </MotionLayoutComponent>
  );
};
export default Templates;
