import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/app/types";

type ProductsState = {
  products: Product[];
  selectedProduct: string | null;
};

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  selectedProduct: null as string | null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<string | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
