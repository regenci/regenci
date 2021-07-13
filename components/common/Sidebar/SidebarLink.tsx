import React from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { TWSidebarLinkComponent, TWSidebarLinkIconComponent } from "./sidebar-tw-styled";

interface ISidebarLinkProps {
  icon: any;
  action?: any;
  link?: string;
  tooltip: string;
  toggled?: boolean;
}

const SidebarLink = (props: ISidebarLinkProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isPortable = useMediaQuery({ query: "(max-width: 770px)" });

  return (
    <>
      {props.link === undefined ? (
        <TWSidebarLinkComponent onClick={() => props.action(true, dispatch)}>
          <Tooltip title={props.tooltip} placement={isPortable ? undefined : "right"}>
            <TWSidebarLinkIconComponent className={`${props.toggled ? "opacity-100" : "opacity-60"}`}>
              <props.icon className="w-5 h-5" />
            </TWSidebarLinkIconComponent>
          </Tooltip>
        </TWSidebarLinkComponent>
      ) : (
        <TWSidebarLinkComponent>
          <Link href={props.link}>
            <Tooltip title={props.tooltip} placement={isPortable ? undefined : "right"}>
              <TWSidebarLinkIconComponent className={`${router.pathname === props.link ? "opacity-100" : "opacity-60"}`}>
                <props.icon className="w-5 h-5" />
              </TWSidebarLinkIconComponent>
            </Tooltip>
          </Link>
        </TWSidebarLinkComponent>
      )}
    </>
  );
};

export default SidebarLink;
