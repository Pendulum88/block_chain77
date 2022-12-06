import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "scoreSliceName",
  initialState: { value: 0 },
  reducers: {
    increase: (state, { payload }) => {
      state.value = state.value * payload;
      if (state.value === 0 && payload) state.value = 1;
    },
    decrease: (state, { payload }) => {
      if (payload === 0) {
        alert("0으로 나눌수 없습니다");
        return;
      }
      state.value = state.value / payload;
      if (state.value === 0 && payload) state.value = 1;
    },
    setDefault: (state) => {
      state.value = 0;
    },
  },
});

export const action = scoreSlice.actions;
export const reducer = scoreSlice.reducer;
