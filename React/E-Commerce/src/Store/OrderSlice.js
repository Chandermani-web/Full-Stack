import { createSlice } from "@reduxjs/toolkit";

const savedOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orderItems: savedOrders,
  },
  reducers: {
    addOrder: (state, action) => {
      const existing = state.orderItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.orderItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOrderById: (state, action) => {
      state.orderItems = state.orderItems.filter(item => item.id !== action.payload);
    },
    incrementOrder: (state, action) => {
      const item = state.orderItems.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementOrder: (state, action) => {
      const item = state.orderItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    clearOrders: (state) => {
      state.orderItems = [];
    },
  },
});

export const { addOrder, removeOrderById, incrementOrder, decrementOrder, clearOrders } = OrderSlice.actions;
export default OrderSlice.reducer;
