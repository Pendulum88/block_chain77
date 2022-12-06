import { createSlice } from "@reduxjs/toolkit";

const multiplySlice = createSlice({
  name: "multiplySliceName",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    setDefault: (state) => {
      state.value = 0;
    },
  },
});

export const action = multiplySlice.actions;
export const reducer = multiplySlice.reducer;
