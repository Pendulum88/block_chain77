import { configureStore } from "@reduxjs/toolkit";

import { reducer as idReducer } from "./userInfo";

export const store = configureStore({
  reducer: {
    id: idReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
