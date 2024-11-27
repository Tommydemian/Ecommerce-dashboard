"use client";

import React from "react";
import { ProductCard } from "./ProductCard";

// import { ProductCardSkeleton } from "./ProductCardSkeleton";
// import { ProductCardSkeletonList } from "./ProductCardSkeletonList";

// types
import { Product } from "@/app/types";

type ProductListProps = {
  products: Product[];
  selectedProduct: string | null;
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProduct,
}) => {
  const filteredProductList = React.useMemo(() => {
    return selectedProduct && selectedProduct.length > 0
      ? products.filter((p) => {
          return p.title.toLowerCase().includes(selectedProduct.toLowerCase());
        })
      : products;
  }, [products, selectedProduct]);

  return (
    <section>
      <div className="grid gap-10 my-10">
        {filteredProductList.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};
