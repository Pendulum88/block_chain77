/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [textA, methodA] = useState("남자 코트 추천");
  // const [textB, methodB] = useState("강남 우동 맛집");
  // const [textC, methodC] = useState("역삼 파스타 맛집");
  const [text, method] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "역삼 파스타 맛집",
  ]);

  const [likeNum, likeAdd] = useState(0);

  // function likeAdd() {
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="header">ReactBlog</div>
      <div className="item">
        {text[0]}
        <span
          className="like"
          onClick={() => {
            likeAdd(likeNum + 1);
          }}
        >
          👍
        </span>
        {likeNum}
        <div className="itemTime">2월 17일 발행</div>
        <button
          onClick={() => {
            const temp = [...text];
            temp[0] = "여자 코트 추천";
            method(temp);
          }}
        >
          바꾸기
        </button>
      </div>
      <div className="item">
        {text[1]}
        <span
          className="like"
          onClick={() => {
            likeAdd(likeNum + 1);
          }}
        >
          👍
        </span>
        {likeNum}
        <div className="itemTime">3월 14일 발행</div>
      </div>
      <div className="item">
        {text[2]}{" "}
        <span
          className="like"
          onClick={() => {
            likeAdd(likeNum + 1);
          }}
        >
          👍
        </span>{" "}
        {likeNum}
        <div className="itemTime">4월 1일 발행</div>
      </div>
    </div>
  );
}

export default App;
