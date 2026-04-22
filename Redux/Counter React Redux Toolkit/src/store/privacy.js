import { createSlice } from "@reduxjs/toolkit";

// STEP 1: Create another slice (privacy)
const privacySlice = createSlice({
  name: "privacy",

  // initial state is boolean
  initialState: false,

  reducers: {
    toggle: (state) => {
      //  here you are trying to toggle true/false
      // but state is not changing properly (just assigning local variable)
      return (state = !state);
    },
  },
});
export const privacyActions = privacySlice.actions;
export default privacySlice;
