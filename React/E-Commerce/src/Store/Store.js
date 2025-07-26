import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice.js';
import OrderReducer from './OrderSlice.js'; // ✅ import new reducer
import HistoryReducer from './HistorySlice.js';

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
    order: OrderReducer, // ✅ add it here
    history: HistoryReducer
  },
});

export default appStore;
