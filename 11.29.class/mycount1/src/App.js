import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App({ store }) {
  const [_, forceUpdate] = useState(false);

  const count1Up = () => {
    store.dispatch({
      type: "count1Plus",
    });
    forceUpdate((prev) => {
      return !prev;
    });
  };
  const count1Down = () => {
    store.dispatch({
      type: "count1Minus",
    });
    forceUpdate((prev) => {
      return !prev;
    });
  };
  const count2Up = () => {
    store.dispatch({
      type: "count2Plus",
    });
    forceUpdate((prev) => {
      return !prev;
    });
  };
  const count2Down = () => {
    store.dispatch({
      type: "count2Minus",
    });
    forceUpdate((prev) => {
      return !prev;
    });
  };

  return (
    <div className="App">
      <div>{store.getState().count1}</div>
      <div>
        <button onClick={count1Up}>count1 : + 1</button>
        <button onClick={count1Down}>count1 : - 1</button>
      </div>
      <br />
      <div>{store.getState().count2}</div>
      <div>
        <button onClick={count2Up}>count2 : + 1</button>
        <button onClick={count2Down}>count2 : - 1</button>
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
