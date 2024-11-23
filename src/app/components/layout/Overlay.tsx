import React from "react";
import classNames from "classnames";

type OverlayProps = {
  isActive: boolean;
};

export const Overlay: React.FC<OverlayProps> = ({ isActive }) => {
  return (
    <div
      className={classNames(
        "fixed inset-0 transition-overlay duration-overlay ease-overlay bg-black/50 sm:hidden opacity-0 z-[1] pointer-events-none",
        { "opacity-100": isActive },
      )}
    />
  );
};
