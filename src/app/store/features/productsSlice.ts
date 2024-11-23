import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { Product } from "@/app/types";

type ProductsState = {
  products: Product[];
};

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.title === action.payload);
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
