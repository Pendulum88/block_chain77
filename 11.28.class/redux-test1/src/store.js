import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

// const store = createStore(
//   reducer,
//   { count1: 0, count2: 0 },
//   composeWithDevTools()
// );

const store = createStore(
  reducer,
  { count1: 0, count2: 0, arr: [] },
  composeWithDevTools()
);

export default store;
// 컴포넌트가 아니기때문에 store.js << 소문자로 시작 (카멜케이스)
// HTML 문법이 없으므로 jsx 가 아닌 js
// jsx가 아니므로 컴포넌트가 아님
