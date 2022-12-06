// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { reducer, initialize } from "./counter";
// const enhancer = composeWithDevTools();
// const store = createStore(
//   combineReducers({ count: reducer }),
//   { count: initialize },
//   enhancer
// );
// export default store;
// toolkit : 얘네 필요없음

import { configureStore } from "@reduxjs/toolkit";
// toolkit 사용시 createStore가 아닌 configureStore를 사용한다
// createStore와 마찬가지로 store를 반환한다

import { reducer } from "./counter";

export const store = configureStore({
  // configureStore는 객체를 매개변수로 받으며 객체 내에서
  // reducer, middleware 등 store에 필요한 작업을 할수있다
  reducer: { count: reducer },
  // reducer는 이전의 combineReducers와 같이 객체로 받으며
  // state명을 키로, 해당 reducer를 값으로 받는다
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  // getDefaultMiddleware : 기본 미들웨어를 가져오는 함수, 미들웨어 사용할때 쓰자
  // - redux toolkit은 기본적으로 'redux-devtools-extension' 라이브러이와
  // 'redux-thunk' 라이브러리를 지원한다 (따로 안깔아도됨)
});
