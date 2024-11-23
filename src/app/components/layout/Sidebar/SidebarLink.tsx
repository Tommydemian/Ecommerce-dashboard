import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarLinkProps = {
  text: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
};

const linkStyles = {
  base: "flex gap-4 items-center transition-colors duration-200",
  active: "text-white",
  inactive: "text-white/60 hover:text-white/80",
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  icon: Icon,
  isActive,
  text,
}) => {
  return (
    <Link
      className={classNames(
        linkStyles.base,
        isActive ? linkStyles.active : linkStyles.inactive,
      )}
      href={href}
    >
      {
        <div className="flex gap-4 mb-2">
          <p>{text}</p>
          <Icon />
        </div>
      }
    </Link>
  );
};
