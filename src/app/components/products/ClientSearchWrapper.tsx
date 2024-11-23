"use client";
import React from "react";

import { setSelectedProduct } from "@/app/store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";

// Components
import { FilterInput } from "../ui/FilterInput";
export const ClientSearchWrapper = () => {
  const selectedProduct = useAppSelector(
    (state) => state.products.selectedProduct,
  );
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedProduct(e.target.value));
  };

  return (
    <>
      <FilterInput
        handleChange={handleFilterChange}
        id="selected-product"
        labelText="Filter by title"
        name="selected-product"
        placeholder="Givenchy Essence"
        type="text"
        value={selectedProduct || ""}
      />
    </>
  );
};
