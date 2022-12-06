import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./modules/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// react에서 로딩창을 구현할때?
// 스피너 라고 하는 형태로 많이 구현된다
// 해당 형태는 원이 빙글빙글 도는 애니메이션 정도 되고,
// 보통 쓸때 suspense / lazy 정도를 사용한다
