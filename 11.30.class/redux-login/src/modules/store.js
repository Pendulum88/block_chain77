import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  initialize as userInfoInit,
  reducer as userInfoReducer,
} from "./userInfo";
import {
  initialize as userDBInit, //
  reducer as userDBReducer, //
} from "./userDB";
const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
    userDB: userDBReducer,
  }),
  { userInfo: userInfoInit, userDB: userDBInit },
  composeWithDevTools()
);

export default store;
