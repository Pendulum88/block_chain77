import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./score";

export const store = configureStore({
  reducer: { score: reducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
