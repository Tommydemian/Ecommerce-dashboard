import React from "react";

type ProductCardSkeletonProps = {
  children?: React.ReactNode;
};
export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
  children,
}) => {
  return (
    <div
      role="status"
      aria-label="Loading Product"
      aria-busy="true"
      className="rounded-md bg-skeleton h-[75vh] animate-pulse"
    >
      {children}
    </div>
  );
};
