import { NextRouter } from "next/router";

export const handleOnRouteChange = (router: NextRouter, setLoading: (value: boolean) => void) => {
  router?.events?.on("routeChangeStart", (_url) => setLoading(true));
  router?.events?.on("routeChangeComplete", (_url) => setLoading(false));
  router?.events?.on("routeChangeError", (_url) => setLoading(false));
};
export const handleOffRouteChange = (router: NextRouter, setLoading: (value: boolean) => void) => {
  router?.events?.off("routeChangeStart", (_url) => setLoading(true));
  router?.events?.off("routeChangeComplete", (_url) => setLoading(false));
  router?.events?.off("routeChangeError", (_url) => setLoading(false));
};
