import { configureStore } from "@reduxjs/toolkit";

import { reducer as multiplyReducer } from "./multiply";
import { reducer as scoreReducer } from "./score";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    multiply: multiplyReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
