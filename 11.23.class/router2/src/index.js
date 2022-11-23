import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// 라우터 설정에 있어서 root를 설정한다
// 해당 컴포넌트가 없을시 router를 구현하지 못한다
// React 시작할때 무조건 넣는다고 생각하자

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
