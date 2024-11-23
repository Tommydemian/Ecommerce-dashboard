"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

import { useGetProductsQuery } from "@/app/store/api/endpoints/products";
import { useAppSelector, useAppDispatch } from "@/app/store/hook";
import { setProducts } from "@/app/store/features/productsSlice";

import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Product } from "@/app/types";

type ProductListProps = {
  initialData: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ initialData }) => {
  const {
    data = initialData,
    isFetching,
    isLoading,
    refetch,
  } = useGetProductsQuery();

  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    setIsHydrating(false);
  }, []); // Este effect se ejecuta después de la hidratación

  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(setProducts(data));
  }, [data]);

  const prodList = useAppSelector((state) => state.products.products);
  const selectedProduct = useAppSelector(
    (state) => state.products.selectedProduct,
  );

  const filteredProductList = React.useMemo(() => {
    return selectedProduct && selectedProduct.length > 0
      ? prodList.filter((p) => {
          return p.title.toLowerCase().includes(selectedProduct.toLowerCase());
        })
      : prodList;
  }, [prodList, selectedProduct]);

  if (isHydrating) {
    return (
      <div className="grid gap-10 my-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

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
