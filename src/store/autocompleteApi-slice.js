import { createSlice } from "@reduxjs/toolkit";

const autocompleteApiSlice = createSlice({
  name: "autocompleteApi",
  initialState: {
    currentInput: "",
  },
  reducers: {
    setCurrentInput(state, action) {     
      const newInput = action.payload;
      state.currentInput = newInput;
    },
  },
});

export const autocompleteApiActions = autocompleteApiSlice.actions;
export default autocompleteApiSlice;
