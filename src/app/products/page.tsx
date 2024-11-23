import React from "react";
import { ProductList } from "../components/products/ProductList";
import { MainContainer } from "../components/ui/MainContainer";

const products = await fetch("https://dummyjson.com/products?limit=20");
const data = await products.json();
const ProductsPage = () => {
  return (
    <MainContainer>
      <ProductList initialData={data.products} />
    </MainContainer>
  );
};

export default ProductsPage;
