import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "idSliceName",
  initialState: { value: [] },
  reducers: {
    create: (state, { payload }) => {
      state.value = [...state.value, payload];
    },
    connect: (state, { payload }) => {
      console.log("ㅎㅇ");
    },
    delete: (state, { payload }) => {},
  },
});

export const action = idSlice.actions;
export const reducer = idSlice.reducer;
