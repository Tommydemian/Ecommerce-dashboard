import {
  LucideIcon,
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Users,
  BarChart2,
  Settings,
} from "lucide-react";

type Link = {
  text: string;
  href: string;
  icon: LucideIcon;
};

export const sidebarLinks: Link[] = [
  { text: "Dashboard", href: "/", icon: LayoutDashboard },
  { text: "Products", href: "/products", icon: ShoppingCart },
  { text: "Orders", href: "/orders", icon: ClipboardList },
  { text: "Customers", href: "/customers", icon: Users },
  { text: "Analytics", href: "/analytics", icon: BarChart2 },
  { text: "Settings", href: "/settings", icon: Settings },
];
