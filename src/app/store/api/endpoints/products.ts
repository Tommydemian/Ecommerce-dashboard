// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/app/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    // Each endpoint definition
    getProducts: builder.query<Product[], void>({
      // <ResponseType, QueryArg>
      query: () => ``, // Appends to baseUrl
      // Transform the response if needed
      transformResponse: (response: { products: Product[] }) =>
        response.products,
    }),

    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`, // Would hit /products/123
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductByIdQuery } = productsApi;
