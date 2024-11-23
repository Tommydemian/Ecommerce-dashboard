import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

export const selectProducts = (state: RootState) => state.products.products;

export const selectFilteredProducts = createSelector(
  [selectProducts, (state: RootState) => state.products.selectedProduct],
  (products, selectedProduct) => {
    if (!selectedProduct || selectedProduct.length === 0) {
      return products;
    }
    return products.filter((p) =>
      p.title.toLowerCase().includes(selectedProduct.toLowerCase()),
    );
  },
);
