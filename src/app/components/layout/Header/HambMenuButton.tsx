import React from "react";
import classNames from "classnames";
import { MenuIcon } from "lucide-react";

type HambMenuButtonProps = {
  isSideBarOpen: boolean;
  openSideBar: () => void;
};

export const HambMenuButton: React.FC<HambMenuButtonProps> = ({
  isSideBarOpen,
  openSideBar,
}) => {
  return (
    <button
      className={classNames("hamb-menu__transition md:hidden", {
        "z-[4] opacity-100": !isSideBarOpen,
        "z-[0] opacity-0": isSideBarOpen,
      })}
      onClick={openSideBar}
    >
      <MenuIcon />
    </button>
  );
};
