import React from "react";
import classNames from "classnames";

import { MainContainer } from "../../ui/MainContainer";
import { SidebarNav } from "./SidebarNav";
import { SideBarCloseButton } from "./SideBarCloseButton";

type SidebarProps = {
  isSidebarOpen: boolean;
  closeSideBar: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  closeSideBar,
  isSidebarOpen,
}) => {
  return (
    <aside
      className={classNames(
        classNames(
          "justify-start bg-red-robin-400 pt-4 w-[var(--sidebar-width)] fixed inset-y-0 z-[1] left-0 md:grid transition-transform duration-300 ease-out md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]",
        ),
      )}
    >
      <MainContainer>
        <SideBarCloseButton closeSidebar={closeSideBar} />
        <SidebarNav closeSidebar={closeSideBar} />
      </MainContainer>
    </aside>
  );
};
