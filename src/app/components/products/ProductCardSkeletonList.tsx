import React from "react";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductCardSkeletonList = () => {
  return (
    <div className="grid gap-10 my-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
