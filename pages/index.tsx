import React from "react";
import { motion } from "framer-motion";
import { MotionLayoutComponent } from "@components/common";

// const variants = {
//   initial: {
//     y: "100%",
//     transition: {
//       delay: 0,
//       duration: 0.6,
//     },
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delay: 0,
//       duration: 0.6,
//     },
//   },
//   exit: {
//     y: "100%",
//     transition: {
//       delay: 0.6,
//       duration: 0.6,
//     },
//   },
// };
const textVariants = {
  initial: {
    y: -1000,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    x: 2000,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};
export default function Home() {
  return (
    <MotionLayoutComponent title="Create The Best Version Of Your Resume">
      <motion.h1 variants={textVariants} className="text-white text-[200px] sm:text-5xl sm:w-full sm:text-center">
        Regenci
      </motion.h1>
    </MotionLayoutComponent>
  );
}
