import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import List from "./components/List";
import EffectTest from "./components/EffectTest";

function App() {
  const [num, setNum] = useState(0);

  return (
    <AppBox>
      <div
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </div>
      {/* <List /> */}
      <EffectTest />
    </AppBox>
  );
}

const AppBox = styled.div`
  text-align: center;
`;

export default App;
