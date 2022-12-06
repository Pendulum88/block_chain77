import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { reducer } from "./count";

export const store = configureStore({
  reducer: { count: reducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
