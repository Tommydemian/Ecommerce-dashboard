"use client";
import React from "react";

// Components
import { FilterInput } from "../ui/FilterInput";

type ClientSearchWrapperProps = {
  selectedProduct: string | null;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const ClientSearchWrapper: React.FC<ClientSearchWrapperProps> = ({
  handleFilterChange,
  selectedProduct,
}) => {
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
