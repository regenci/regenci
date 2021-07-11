import React from "react";
// import { motion } from "framer-motion";
import { Carousel, MotionLayoutComponent } from "@components/common";

const variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    y: "100%",
  },
};
export default function Templates() {
  return (
    <MotionLayoutComponent className="flex justify-center items-center" variants={variants} title="Choose the right template" bg="black">
      {/* <motion.h1 className="text-white text-8xl" initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
        Templates
      </motion.h1> */}
      <Carousel />
    </MotionLayoutComponent>
  );
}
