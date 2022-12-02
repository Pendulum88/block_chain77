import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as count1Reducer, initlize as count1Init } from "./Count1";
import { reducer as count2Reducer, initlize as count2Init } from "./Count2";

const enhancer = composeWithDevTools();

const store = createStore(
  combineReducers({ count1: count1Reducer, count2: count2Reducer }),
  { count1: count1Init, count2: count2Init },
  enhancer
);

export default store;
