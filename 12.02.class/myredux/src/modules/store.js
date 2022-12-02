import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  reducer as alphaReducer,
  initialize as alphaInitialize,
} from "./CountAlpha";
import {
  reducer as bravoReducer,
  initialize as bravoInitialize,
} from "./CountBravo";
import {
  reducer as charlieReducer,
  initialize as charlieInitialize,
} from "./CountCharlie";

const enhancer = composeWithDevTools();
const store = createStore(
  combineReducers({
    countAlpha: alphaReducer,
    countBravo: bravoReducer,
    countCharlie: charlieReducer,
  }),
  {
    countAlpha: alphaInitialize,
    countBravo: bravoInitialize,
    countCharlie: charlieInitialize,
  },
  enhancer
);

export default store;
