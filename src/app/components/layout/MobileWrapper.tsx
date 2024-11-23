"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Overlay } from "./Overlay";

export const MobileWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  return (
    <>
      <Overlay isActive={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSideBar={closeSidebar} />
      <div>
        <Header openSideBar={openSidebar} isSideBarOpen={isSidebarOpen} />
      </div>
    </>
  );
};
