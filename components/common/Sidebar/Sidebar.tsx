import React from "react";
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SidebarBottom from "./sidebarBottom";
import { IRootState } from "interfaces/root";
import { TWSidebarComponent, TWSidebarLogoComponent } from "./sidebar-tw-styled";
import { sidebarBuilderLinks, sidebarLinks } from "@components/common/Sidebar/sidebar-links-data";

const Sidebar = () => {
  const router = useRouter();
  const sidebarState = useSelector((state: IRootState) => state.sidebar);

  return (
    <TWSidebarComponent>
      <div className="flex flex-col sm:flex-row items-center">
        <Link href="/">
          <TWSidebarLogoComponent>R</TWSidebarLogoComponent>
        </Link>
        {router.pathname.startsWith("/app/builder") ? (
          <>
            {sidebarBuilderLinks(sidebarState).map((link, i: number) => (
              <SidebarLink key={i} {...link} />
            ))}
          </>
        ) : (
          <>
            {sidebarLinks.map((link, i: number) => (
              <SidebarLink key={i} {...link} />
            ))}
          </>
        )}
      </div>
      <SidebarBottom />
    </TWSidebarComponent>
  );
};

export default Sidebar;
