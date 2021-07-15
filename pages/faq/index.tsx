import React from "react";
import { motion } from "framer-motion";
import { MotionLayoutComponent } from "@components/common";

// const variants = {
//   initial: {
//     y: "-100%",
//   },
//   animate: {
//     y: 0,
//   },
//   exit: {
//     x: "100%",
//   },
// };
export default function Faq() {
  return (
    <MotionLayoutComponent title="Frequently Asked Questions">
      <motion.h1 className="text-white text-8xl" initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
        FAQ
      </motion.h1>
    </MotionLayoutComponent>
  );
}
