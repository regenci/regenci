import React from "react";
import { motion } from "framer-motion";
import { MotionLayoutComponent } from "@components/common";

const variants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
  },
  exit: {
    y: "100%",
  },
};
export default function Home() {
  return (
    <MotionLayoutComponent title="Create The Best Version Of Your Resume" bg="black" className="flex justify-center items-center" variants={variants}>
      <motion.h1 initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="text-white text-8xl">
        Regenci
      </motion.h1>
    </MotionLayoutComponent>
  );
}
