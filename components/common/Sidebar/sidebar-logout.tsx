import React from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { TWSidebarLinkComponent, TWSidebarLinkIconComponent } from "./sidebar-tw-styled";
import { LoginIcon, LogoutIcon } from "@components/Icons";

const SidebarLogout = () => {
  const isPortable = useMediaQuery({ query: "(max-width: 770px)" });
  const isLogged = false;
  const router = useRouter();
  return (
    <TWSidebarLinkComponent>
      <Link href="/authentication/sign-in">
        <Tooltip title={isLogged ? "Logout" : "Sign in"} placement={isPortable ? undefined : "right"}>
          <TWSidebarLinkIconComponent className={`${router.pathname.startsWith("/authentication") ? "opacity-100" : "opacity-60"}`}>
            {isLogged ? <LogoutIcon className="h-5 w-5" /> : <LoginIcon className="h-5 w-5" />}
          </TWSidebarLinkIconComponent>
        </Tooltip>
      </Link>
    </TWSidebarLinkComponent>
  );
};

export default SidebarLogout;
