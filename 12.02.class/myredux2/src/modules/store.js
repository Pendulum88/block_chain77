import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  reducer as firstReducer, //
  initialize as firstInit,
} from "./firstCount";
import {
  reducer as secondReducer,
  initialize as secondInit,
} from "./secondCount";
const enhancer = composeWithDevTools();

const store = createStore(
  combineReducers({ firstCount: firstReducer, secondCount: secondReducer }),
  { firstCount: firstInit, secondCount: secondInit },
  enhancer
);

export default store;
