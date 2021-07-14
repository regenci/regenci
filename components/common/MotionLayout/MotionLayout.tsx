import Head from "next/head";
import { motion } from "framer-motion";
import React, { ReactElement, ReactNode } from "react";
import { TWMotionBlackPageComponent, TWMotionWhitePageComponent } from "../Layout/layout-tw-styled";

interface IProps {
  title: string;
  bg: string;
  variants: {
    initial: {};
    animate: {};
    exit: {};
  };
  children: ReactNode;
  className?: string;
  animate?: string;
}

function MotionLayoutComponent(props: IProps): ReactElement {
  const Custom = motion(props.bg === "black" ? TWMotionBlackPageComponent : TWMotionWhitePageComponent);
  return (
    <>
      <Head>
        <title>Regenci - {props.title}</title>
      </Head>
      <Custom initial="initial" animate={props?.animate || "animate"} exit="exit" variants={props.variants} className={props.className}>
        {props.children}
      </Custom>
    </>
  );
}

export default MotionLayoutComponent;
