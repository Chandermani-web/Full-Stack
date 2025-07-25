import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: savedCart,
  },
  reducers: {
    addItems: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemById: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    incrementItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    clearItems: (state) => {
      state.cartItems.length = [];
    },
  },
});

export const { addItems, removeItemById, incrementItem, decrementItem, clearItems } = CartSlice.actions;
export default CartSlice.reducer;
