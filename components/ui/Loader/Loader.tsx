import React from "react";
import { useRouter } from "next/router";
import { TWLoaderContainerComponent } from "./loader-tw-styled";
import { handleOffRouteChange, handleOnRouteChange } from "@lib/route-change";

const Loader = () => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleOnRouteChange(router, setLoading);

    return () => {
      handleOffRouteChange(router, setLoading);
    };
  }, []);

  return (
    <>
      {loading ? (
        <TWLoaderContainerComponent>
          <div className="loader" />
          <style>
            {`
          .loader {
            background: #ffffff;
            animation: load1 1s infinite ease-in-out;
            width: 1em;
            height: 4em;
            color: #ffffff;
            text-indent: -9999em;
            margin: 88px auto;
            position: relative;
            font-size: 11px;
            transform: translateZ(0);
            animation-delay: -0.16s;
          }
          .loader::before {
            background: #ffffff;
            animation: load1 1s infinite ease-in-out;
            width: 1em;
            height: 4em;
            position: absolute;
            top: 0;
            content: "";
            left: -1.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
          }

          .loader::after {
            background: #ffffff;
            animation: load1 1s infinite ease-in-out;
            width: 1em;
            height: 4em;
            position: absolute;
            top: 0;
            content: "";
            left: 1.5em;
          }

          @keyframes load1 {
            0%,
            80%,
            100% {
              box-shadow: 0 0;
              height: 4em;
            }
            40% {
              box-shadow: 0 -2em;
              height: 5em;
            }
          }
        `}
          </style>
        </TWLoaderContainerComponent>
      ) : null}
    </>
  );
};

export default Loader;
