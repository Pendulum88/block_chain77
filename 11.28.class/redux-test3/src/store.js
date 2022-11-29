import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialize as count1Init } from "./modeules/count1";
import { initialize as count2Init } from "./modeules/count2";

import { reducer as count1 } from "./modeules/count1";
import { reducer as count2 } from "./modeules/count2";

const store = createStore(
  combineReducers({ count1, count2 }),
  { ...count1Init, ...count2Init },
  composeWithDevTools()
);

export default store;
