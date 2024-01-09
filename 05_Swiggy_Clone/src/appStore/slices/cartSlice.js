import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // RTK uses immer library behind the seen to avoid mutating state directly.
      // but, now while using RTK, we as dev either have to mutate the state directly or return a new State altogether.
      state.items.push(action.payload); // this is also a kind of mutating state directly...
    },
    removeItem: (state, action) => {
      state.items.pop(); // this is also a kind of mutating state directly...
    },
    clearCart: (state, action) => {
      // state.items.length = 0; // this is also a kind of mutating state directly...
      return { items: [] }; // here we returned empty array as new state without mutating existing one(state.items).
    },
  },
});

// console.log(cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
