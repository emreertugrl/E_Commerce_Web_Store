import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    carts: cartReducer,
  },
});
