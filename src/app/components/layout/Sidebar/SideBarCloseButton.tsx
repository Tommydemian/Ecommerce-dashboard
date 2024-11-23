"use client";

import React from "react";
import { PanelLeftClose } from "lucide-react";

type SideBarCloseButtonProps = {
  closeSidebar: () => void;
};

export const SideBarCloseButton: React.FC<SideBarCloseButtonProps> = ({
  closeSidebar,
}) => {
  return (
    <button
      onClick={closeSidebar}
      className="absolute right-[1rem] top-[1rem] md:hidden"
    >
      <PanelLeftClose />
    </button>
  );
};
