import { useState, useEffect, useMemo, useCallback } from "react";
import styled from "styled-components";

export default function AddTestFunc() {
  const [num, setNum] = useState(0);

  //   const memo = useMemo(() => {
  //     return num + 10;
  //   });

  //   const testFunc = useCallback(() => {
  //     console.log(num + 100);
  //   });

  return (
    <AddTestBox>
      <div
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </div>
      <div></div>
    </AddTestBox>
  );
}

const AddTestBox = styled.div`
  margin: 50px;
  div {
    margin: 50px;
    background-color: lightgrey;
    width: 100px;
    text-align: center;
  }
`;
