import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countName",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const reducer = countSlice.reducer;
export const action = countSlice.actions;
