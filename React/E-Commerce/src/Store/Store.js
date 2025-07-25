import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice.js';
import OrderReducer from './OrderSlice.js'; // ✅ import new reducer

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
    order: OrderReducer, // ✅ add it here
  },
});

export default appStore;
