import React from "react";

import { MainContainer } from "../../ui/MainContainer";
import { HeaderNav } from "./HeaderNav";
import { HambMenuButton } from "./HambMenuButton";

type HeaderProps = {
  isSideBarOpen: boolean;
  openSideBar: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  openSideBar,
  isSideBarOpen,
}) => {
  return (
    <header className="bg-red-robin-400 text-gray-50 relative">
      <MainContainer>
        <div className="flex justify-between">
          <HambMenuButton
            isSideBarOpen={isSideBarOpen}
            openSideBar={openSideBar}
          />
          {/* Logo */}
          <HeaderNav />
        </div>
      </MainContainer>
    </header>
  );
};
