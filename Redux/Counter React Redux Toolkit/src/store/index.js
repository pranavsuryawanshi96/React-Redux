import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

//  STEP 3: Create store (main container)
const counterStore = configureStore({
  //  combine all reducers/slices here
  reducer: {
    counter: counterSlice.reducer, // counter slice added
    privacy: privacySlice.reducer,
  },
});

//  STEP 5: Export store (used in Provider)
export default counterStore;
