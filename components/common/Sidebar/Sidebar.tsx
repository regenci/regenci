import React from "react";
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import { useRouter } from "next/router";
import SidebarBottom from "./sidebarBottom";
import { TWSidebarComponent, TWSidebarLogoComponent } from "./sidebar-tw-styled";
import { sidebarBuilderLinks, sidebarLinks } from "@components/common/Sidebar/sidebar-links-data";

const Sidebar = () => {
  const router = useRouter();
  return (
    <TWSidebarComponent>
      <div className="flex flex-col sm:flex-row items-center">
        <Link href="/">
          <TWSidebarLogoComponent>R</TWSidebarLogoComponent>
        </Link>
        {router.pathname.startsWith("/app/builder") ? (
          <>
            {sidebarBuilderLinks.map((link, i: number) => (
              <SidebarLink key={i} link={link} />
            ))}
          </>
        ) : (
          <>
            {sidebarLinks.map((link, i: number) => (
              <SidebarLink key={i} link={link} />
            ))}
          </>
        )}
      </div>
      <SidebarBottom />
    </TWSidebarComponent>
  );
};

export default Sidebar;
