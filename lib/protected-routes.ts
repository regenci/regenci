// check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }: any) => {
  // Identify authenticated user

  const isAuthenticated = true;

  const unprotectedRoutes = [
    "/authentication/sign-in",
    "/authentication/sign-up",
    "/authentication/account-activation",
    "/authentication/forgot",
    "/authentication/forgot-confirm",
    "/authentication/reset",
  ];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push("/authentication/sign-in");
  }

  return children;
};

export default ProtectedRoute;
