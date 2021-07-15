/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@components/ui";
import type { AppProps } from "next/app";
import { Sidebar } from "@components/common";
import { AnimatePresence } from "framer-motion";
import { FeatureBar } from "@components/common";
import { TWLayoutComponent } from "./layout-tw-styled";
import { useAcceptCookies } from "@lib/hooks/useAcceptCookies";

const Layout = (props: AppProps) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  return (
    <TWLayoutComponent className={window.location.pathname.startsWith("/authentication") ? "bg-black" : "bg-white"}>
      <Sidebar />
      <AnimatePresence exitBeforeEnter>
        <props.Component {...props.pageProps} key={props.router.route} />
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
