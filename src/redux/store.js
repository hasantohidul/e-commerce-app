// import { configureStore } from "@reduxjs/toolkit";
// import cardReducer from "./cartSlice";
// import productReducer from "./productSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cardReducer,
//     products: productReducer,
//   },
// });

import { configureStore, createReducer } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
