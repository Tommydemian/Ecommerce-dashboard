import React, { Suspense } from "react";
import { MainContainer } from "../components/ui/MainContainer";
import { ProductsClientWrapper } from "../components/products/ProductsClientWrapper";
import { ProductCardSkeletonList } from "../components/products/ProductCardSkeletonList";

async function getData() {
  const products = await fetch("https://dummyjson.com/products?limit=20", {
    next: { revalidate: 3600 },
    headers: { "Content-Type": "application/json" },
  });

  if (!products.ok) throw new Error("Failed to fetch");
  return products.json();
}

async function AsyncProducts() {
  const data = await getData();
  return <ProductsClientWrapper products={data.products} />;
}

const ProductsPage = () => {
  return (
    <MainContainer>
      <Suspense fallback={<ProductCardSkeletonList />}>
        <AsyncProducts />
      </Suspense>
    </MainContainer>
  );
};

export default ProductsPage;
