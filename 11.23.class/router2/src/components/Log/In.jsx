import { Component } from "react";
import { useParams } from "react-router-dom";

function In() {
  const params = useParams();
  // 라우터에 정해진 라우터가 아니라
  // 변할수 있는 값이 들어왔을때 받는 훅이다
  // Route에서는 ':이름' 이라고 적는다
  // /src/components/Log/index.jsx에서 userId라고 이름을 선언했으면
  // params.userId로 가져올수 있다
  console.log(params);

  return <div>In!</div>;
}

export default In;
