import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducerTest";

const store = createStore(
  // store를 생성한다
  reducer, // 첫번째 인자로 reducer를 전달한다
  { test: "testing" }, // 두번째 인자로 초기 상태를 전달한다
  composeWithDevTools() // 세번째 인자로 devtool에 연결한다
);

export { store };
