import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useState } from "react";

function App() {
  const [inputCount, setCount] = useState(0);
  const [inputText, setText] = useState({
    msg1: "",
    msg2: "",
  });

  return (
    <div className="App">
      <div>{store.getState().count1}</div>
      <input
        value={inputCount}
        type={"number"}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/plus", //
            payload: { input: inputCount },
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/minus",
            payload: { input: inputCount },
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/plus", //
          });
        }}
      >
        IDX +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/minus",
          });
        }}
      >
        IDX -
      </button>
      <header className="App-header">
        <input
          value={inputText.msg1}
          type={"text"}
          onChange={(e) => {
            setText((prev) => {
              const temp = { ...prev };
              temp.msg1 = e.target.value;
              return temp;
            });
          }}
        />
        <input
          value={inputText.msg2}
          type={"text"}
          onChange={(e) => {
            setText((prev) => {
              const temp = { ...prev };
              temp.msg2 = e.target.value;
              return temp;
            });
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: "arr/add", //
              payload: { input: inputText },
            });
          }}
        >
          ++++++
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "arr/remove", //
              payload: { input: inputText },
            });
          }}
        >
          -----------
        </button>
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
