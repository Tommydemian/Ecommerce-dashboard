"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

import { useGetProductsQuery } from "@/app/store/api/endpoints/products";
import { useAppSelector, useAppDispatch } from "@/app/store/hook";
import { setProducts } from "@/app/store/features/productsSlice";

import { Product } from "@/app/types";
import { Slash } from "lucide-react";

type ProductListProps = {
  initialData: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ initialData }) => {
  const { data = initialData, isFetching, refetch } = useGetProductsQuery();

  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(setProducts(data));
  }, [data]);

  const prodList = useAppSelector((state) => state.products.products);

  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProductList = React.useMemo(() => {
    return selectedProduct && selectedProduct.length > 0
      ? prodList.filter((p) => {
          return p.title.toLowerCase().includes(selectedProduct.toLowerCase());
        })
      : prodList;
  }, [prodList, selectedProduct]);

  return (
    <section>
      {/* {isFetching && <p>Refreshing...</p>} */}

      <input
        type="text"
        value={selectedProduct || ""}
        onChange={(e) => setSelectedProduct(e.target.value)}
        className="w-full text-gray-800 p-2 rounded-md mt-10"
      />

      <div className="grid gap-10 my-4">
        {filteredProductList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
