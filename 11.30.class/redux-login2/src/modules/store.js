import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    userInfo: "",
    userDB: "",
    List: "",
  }),
  { userInfo: "", userDB: "", List: "" },
  composeWithDevTools()
);

export default store;
