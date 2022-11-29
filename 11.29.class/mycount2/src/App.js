import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import store from "./store";
import { actions as count1Act } from "./action/count1";
import { actions as count2Act } from "./action/count2";

function App() {
  const [_, forceUpdate] = useState(false);
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const count1Up = () => {
    store.dispatch(count1Act.plus());
    forceUpdate((prev) => !prev);
  };
  const count1Down = () => {
    store.dispatch(count1Act.minus());
    forceUpdate((prev) => !prev);
  };
  const count2Up = () => {
    store.dispatch(count2Act.plus());
    forceUpdate((prev) => !prev);
  };
  const count2Down = () => {
    store.dispatch(count2Act.minus());
    forceUpdate((prev) => !prev);
  };
  const changeFirstInput = (e) => {
    setFirstInput(+e.target.value);
  };
  const changeSecondInput = (e) => {
    setSecondInput(+e.target.value);
  };
  const jump1Count = () => {
    store.dispatch(count1Act.set(firstInput));
    forceUpdate((prev) => !prev);
  };
  const jump2Count = () => {
    store.dispatch(count2Act.set(secondInput));
    forceUpdate((prev) => !prev);
  };

  return (
    <div className="App">
      <div>{store.getState().count1}</div>
      <div>
        <input
          onInput={changeFirstInput} //
          type={"number"} //
          value={firstInput}
        />
        <button onClick={jump1Count}>Jump</button>
        <div>
          <button onClick={count1Up}>count1 : + 1</button>
          <button onClick={count1Down}>count1 : - 1</button>
        </div>
      </div>
      <br />
      <div>{store.getState().count2}</div>
      <div>
        <input
          onInput={changeSecondInput}
          type={"number"}
          value={secondInput}
        />
        <button onClick={jump2Count}>Jump</button>
        <div>
          <button onClick={count2Up}>count2 : + 1</button>
          <button onClick={count2Down}>count2 : - 1</button>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
