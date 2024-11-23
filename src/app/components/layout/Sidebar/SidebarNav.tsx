"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SidebarLink } from "./SidebarLink";
// data
import { sidebarLinks } from "@/app/data/links";

type SidebarNavProps = {
  closeSidebar: () => void;
};

export const SidebarNav: React.FC<SidebarNavProps> = ({ closeSidebar }) => {
  const pathname = usePathname();

  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  return (
    <nav className="mt-32 text-lg font-semibold w-full ml-4">
      <ul role="list" className="grid gap-4 justify-start w-full">
        <li>
          {sidebarLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <SidebarLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                text={link.text}
                isActive={isActive}
              />
            );
          })}
        </li>
      </ul>
    </nav>
  );
};
