import { createSlice } from "@reduxjs/toolkit";

// STEP 1: Create a slice (small part of store) for counter
const counterSlice = createSlice({
  name: "counter", // unique name for this slice

  //  initial state (starting value)
  initialState: { counterVal: 0 },

  //  reducers = functions to change state
  reducers: {
    //  increment action
    increment: (state) => {
      state.counterVal++; // increase by 1
    },

    //  decrement action
    decrement: (state) => {
      state.counterVal--; // decrease by 1
    },

    //  add custom value
    add: (state, action) => {
      // action.payload.num is coming from dispatch
      state.counterVal += Number(action.payload.num);
    },

    //  subtract custom value
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});
export default counterSlice;
export const counterActions = counterSlice.actions;
