import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as count1Init } from "./modules/count1";
import { initialize as count2Init } from "./modules/count2";

import { reducer as count1 } from "./modules/count1";
import { reducer as count2 } from "./modules/count2";

const store = createStore(
  combineReducers({ count1, count2 }),
  { ...count1Init, ...count2Init },
  composeWithDevTools()
);

export default store;
