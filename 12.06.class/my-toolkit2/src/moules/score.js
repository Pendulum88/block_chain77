import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "scoreName",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value += 1000;
    },
    decrease: (state) => {
      state.value -= 1000;
    },
  },
});

export const action = scoreSlice.actions;
export const reducer = scoreSlice.reducer;
