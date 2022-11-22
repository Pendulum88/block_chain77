import "./App.css";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [numList, setNumList] = useState([]);
  const [num, setNum] = useState("");

  const inputValue = (e) => {
    setNum(parseInt(e.target.value));
  };

  const buttonValue = () => {
    setNumList((prev) => {
      return [...prev, num];
    });
  };

  const getAverage = () => {
    if (numList.length === 0) return 0;
    const sum = numList.reduce((a, b) => a + b);
    return sum / numList.length;
  };

  return (
    <AppBox className="App">
      <h2>Average</h2>
      <p className="controller">
        <input type={"number"} value={num} onInput={inputValue} />
        <button onClick={buttonValue}>입 력</button>
      </p>
      <div>
        {numList.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <h3>
        평균값 : <span>{getAverage()}</span>
      </h3>
    </AppBox>
  );
}

const AppBox = styled.div`
  width: 400px;
  background-color: lightgrey;
  margin: 0 auto;
  margin-top: 50px;
  padding: 50px;
  .controller {
    display: flex;
    justify-content: space-evenly;
  }
  .controller button {
    width: 100px;
  }
  .controller input {
    width: 200px;
  }
`;

export default App;
