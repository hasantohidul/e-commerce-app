import { createSlice } from "@reduxjs/toolkit";
import { products } from "../mockData";

const initialState = {
  products: products,
  filteredProducts: products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.filteredProducts =
        category === "all"
          ? products
          : products.filter((product) => product.category === category);
    },
    sortBy: (state, action) => {
      const sortKey = action.payload;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (sortKey === "price") {
          return a.price - b.price;
        } else if (sortKey === "rating") {
          return b.rating - a.rating;
        }
        return 0;
      });
    },
  },
});

export const { filterByCategory, sortBy } = productSlice.actions;
export default productSlice.reducer;
