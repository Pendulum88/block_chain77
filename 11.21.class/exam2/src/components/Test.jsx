import styled from "styled-components";
import { useEffect, useState } from "react";

export default function TestFunc() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [numC, setNumC] = useState(0);

  const [num, setNum] = useState([0, 0, 0]);

  useEffect(() => {
    console.log("state 변경 감지 (A 또는 B 또는 C)");
  }, [numA, numB, numC]);

  useEffect(() => {
    console.log("state 변경 감지 (뭔지는 모름)");
  });

  useEffect(() => {
    console.log("state 변경 감지 (A)");
  }, [numA]);

  useEffect(() => {
    console.log("state 변경 감지 (B)");
  }, [numB]);

  useEffect(() => {
    console.log("state 변경 감지 (C)");
  }, [numC]);

  useEffect(() => {
    console.log("state 변경 감지 (마운트)");
  }, []);

  return (
    <TestFuncBox>
      <div
        onClick={() => {
          setNumA(numA + 1);
        }}
      >
        {numA}
      </div>
      <div
        onClick={() => {
          setNumB(numB + 1);
        }}
      >
        {numB}
      </div>
      <div
        onClick={() => {
          setNumC(numC + 1);
        }}
      >
        {numC}
      </div>
      <div
        onClick={() => {
          const temp = [...num];
          temp[0] = temp[0] + 1;
          setNum(temp);
          //   setNum(num[0] + 1);
        }}
      >
        {num[0]}
      </div>
      <div
        onClick={() => {
          const temp = [...num];
          temp[1] = temp[1] + 1;
          setNum(temp);
          //   setNum(num[1] + 1);
        }}
      >
        {num[1]}
      </div>
      <div
        onClick={() => {
          const temp = [...num];
          temp[2] = temp[2] + 1;
          setNum(temp);
          //   setNum(num[2] + 1);
        }}
      >
        {num[2]}
      </div>
    </TestFuncBox>
  );
}

const TestFuncBox = styled.div`
  margin: 50px;
  div {
    margin: 50px;
    background-color: lightgrey;
    width: 100px;
    text-align: center;
  }
`;

// const NumPad = styled.div`
//   width: 100px;
//   height: 100px;
//   font-size: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   border-radius: 10px;
//   margin: 20px;
//   cursor: pointer;
//   div {
//     width: 10px;
//     height: 10px;
//     background-color: red;
//     &:nth-child(2) {
//       background-color: blue;
//     }
//   }
//   &:nth-child(2n) {
//     background-color: lightgray;
//   }
// `;

// & : 현재 선택자를 가리킨다
