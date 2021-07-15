import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import { TWMotionPageComponent } from "../Layout/layout-tw-styled";

interface IProps {
  title: string;
  children: ReactNode;
  className?: string;
}

function MotionLayoutComponent(props: IProps): ReactElement {
  return (
    <>
      <Head>
        <title>Regenci - {props.title}</title>
      </Head>
      <TWMotionPageComponent className={props.className}>{props.children}</TWMotionPageComponent>
    </>
  );
}

export default MotionLayoutComponent;
