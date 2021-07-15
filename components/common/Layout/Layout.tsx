/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@components/ui";
import type { AppProps } from "next/app";
import { Sidebar } from "@components/common";
import { FeatureBar } from "@components/common";
import { TWLayoutComponent } from "./layout-tw-styled";
import { AnimatePresence, motion } from "framer-motion";
import { useAcceptCookies } from "@lib/hooks/useAcceptCookies";

const Layout = (props: AppProps) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  return (
    <TWLayoutComponent>
      <Sidebar />
      <AnimatePresence exitBeforeEnter>
        <motion.div initial="initial" animate="animate" exit="exit" key={props.router.route} className="w-full h-full">
          <props.Component {...props.pageProps} key={props.router.route} />
        </motion.div>
      </AnimatePresence>
      <FeatureBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={
          <Button className="w-[300px]" bgType="white" onClick={() => onAcceptCookies()}>
            Accept cookies
          </Button>
        }
      />
    </TWLayoutComponent>
  );
};

export default Layout;
