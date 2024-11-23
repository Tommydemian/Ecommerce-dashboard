import React from "react";
import { MainContainer } from "../components/ui/MainContainer";
import { ProductList } from "../components/products/ProductList";

import { ClientSearchWrapper } from "../components/products/ClientSearchWrapper";
import { SearchSlot } from "../components/ui/SearchSlot";

const products = await fetch("https://dummyjson.com/products?limit=20");
const data = await products.json();

const ProductsPage = () => {
  return (
    <MainContainer>
      <div id="layout">
        <SearchSlot>
          <ClientSearchWrapper />
        </SearchSlot>
      </div>
      <ProductList initialData={data.products} />
    </MainContainer>
  );
};

export default ProductsPage;
