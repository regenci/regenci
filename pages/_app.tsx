import "@assets/main.css";
import "antd/dist/antd.css";
import React from "react";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import type { AppProps } from "next/app";
import { Head } from "@components/common";

const Loader = dynamic(() => import("@components/ui/Loader"), { ssr: false });
const Layout = dynamic(() => import("@components/common/Layout"), { ssr: false });

export default function MyApp({ pageProps, Component, router }: AppProps) {
  return (
    <>
      <Head />
      <Provider store={store}>
        <Loader />
        <Layout {...pageProps} Component={Component} router={router} />
      </Provider>
    </>
  );
}
