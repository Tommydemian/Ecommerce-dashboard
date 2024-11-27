// components/products/ProductsClientWrapper.tsx
"use client";
import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { ClientSearchWrapper } from "./ClientSearchWrapper";
import { SearchSlot } from "../ui/SearchSlot";
import { Product } from "@/app/types";

type ProductsClientWrapperProps = {
  products: Product[];
};

export const ProductsClientWrapper = ({
  products,
}: ProductsClientWrapperProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <>
      <SearchSlot>
        <ClientSearchWrapper
          selectedProduct={selectedProduct}
          handleFilterChange={handleFilterChange}
        />
      </SearchSlot>
      <ProductList products={products} selectedProduct={selectedProduct} />
    </>
  );
};
