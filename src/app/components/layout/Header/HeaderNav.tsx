import React from "react";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <nav>
      <ul role="list" className="flex gap-4 font-semibold py-2">
        <li role="listitem">
          <Link href="/products">Products</Link>
        </li>
        <li role="listitem">
          <Link href="/products">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};
