import React from "react";

type ProductCardSkeletonProps = {
  children?: React.ReactNode;
};
export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
  children,
}) => {
  return (
    <article
      className="bg-skeleton-bg w-full rounded-md overflow-clip shadow-md"
      role="status"
      aria-label="Loading Product Card"
      aria-busy="true"
    >
      {/* Image placeholder */}
      <div className="bg-skeleton-content aspect-square w-full animate-pulse" />

      <div className="p-4 space-y-2 bg-red-robin-90 ">
        <div
          id="h2"
          className="animate-pulse rounded h-6 bg-skeleton-content"
        />
        <div
          id="description"
          className="animate-pulse rounded h-10 bg-skeleton-content"
        />
        <div className="animate-pulse rounded h-4 bg-skeleton-content w-1/2" />

        <div className="flex justify-between h-full">
          <div className="animate-pulse rounded h-4 bg-skeleton-content w-1/3" />
          <div className="animate-pulse rounded h-4 bg-skeleton-content w-1/3" />
        </div>
      </div>
    </article>
  );
};
