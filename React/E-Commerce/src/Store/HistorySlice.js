import { createSlice } from "@reduxjs/toolkit";

const getInitialHistory = () => {
  const saved = localStorage.getItem("User_History");

  try {
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error parsing history from localStorage:", error);
    return [];
  }
};

const initialState = {
  history: getInitialHistory(),
};

const HistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      const { product, type } = action.payload;

      const newEntry = {
        ...product, // the full product object
        type, // "view", "cart", "purchase"
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };

      state.history.push(newEntry);
      localStorage.setItem("User_History", JSON.stringify(state.history));
    },

    clearHistory: (state) => {
      state.history = [];
      localStorage.setItem("User_History", JSON.stringify([]));
    },
  },
});

export const { addHistory, clearHistory } = HistorySlice.actions;
export default HistorySlice.reducer;
