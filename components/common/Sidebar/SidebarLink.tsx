import React from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { TWSidebarLinkComponent, TWSidebarLinkIconComponent } from "./sidebar-tw-styled";
import { useDispatch } from "react-redux";

interface ISidebarLinkProps {
  link: {
    link?: string;
    tooltip: string;
    icon: any;
    action?: any;
  };
}

const SidebarLink = ({ link }: ISidebarLinkProps) => {
  const dispatch = useDispatch();
  const isPortable = useMediaQuery({ query: "(max-width: 770px)" });
  const router = useRouter();
  return link.link === undefined ? (
    <TWSidebarLinkComponent onClick={() => link.action(true, dispatch)}>
      <Tooltip title={link.tooltip} placement={isPortable ? undefined : "right"}>
        <TWSidebarLinkIconComponent className={`${router.pathname === link.link ? "opacity-100" : "opacity-60"}`}>
          <link.icon className="w-5 h-5" />
        </TWSidebarLinkIconComponent>
      </Tooltip>
    </TWSidebarLinkComponent>
  ) : (
    <TWSidebarLinkComponent>
      <Link href={link.link}>
        <Tooltip title={link.tooltip} placement={isPortable ? undefined : "right"}>
          <TWSidebarLinkIconComponent className={`${router.pathname === link.link ? "opacity-100" : "opacity-60"}`}>
            <link.icon className="w-5 h-5" />
          </TWSidebarLinkIconComponent>
        </Tooltip>
      </Link>
    </TWSidebarLinkComponent>
  );
};

export default SidebarLink;
