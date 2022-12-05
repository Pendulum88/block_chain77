import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import { reducer, initialize } from "./count";

const enhancer = composeWithDevTools(applyMiddleware(reduxThunk));

const store = createStore(
  combineReducers({ count: reducer }),
  { count: initialize },
  enhancer
);

export default store;

// redux-thunk 적용시키기
// 1. 설치
// 2. import
// 3. 미들웨어 추가 -> composeWithDevTools(applyMiddleware(reduxThunk))
// 4. 모듈에서 사용
