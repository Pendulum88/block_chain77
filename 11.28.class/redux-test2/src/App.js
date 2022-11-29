import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useState } from "react";
import { COUNT1, actions as count1Actions } from "./action/count1";
import { COUNT2, actions as count2Actions } from "./action/count2";
import { ARR } from "./action/arr";

function App() {
  const [inputCount, setCount] = useState(0);
  const [inputText, setText] = useState({
    msg1: "",
    msg2: "",
  });
  const [_, setRender] = useState(false);
  // _ : 사용하지 않는 변수
  // _ 라는 라이브러리도 있다 (주의)

  console.log(store.getState().arr);
  // 배열안에 객체라서

  return (
    <div className="App">
      <div>
        {store.getState().count1}
        {/* 
        store.getState()는 store를 가져온다 
        store.getState()로 받아온 store의 객체는 React의 랜더링에 관여하지 않는다 
        그래서 Class 컴포넌트에서는 forceupdate()를 사용해서 강제로 랜더링을 해준다
        Function 컴포넌트에서는 state를 하나 만들어서 setState를 통해 랜더링을 강제한다
         */}
      </div>
      <div>{store.getState().count2}</div>
      <input
        value={inputCount}
        type={"number"}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          store.dispatch(count1Actions.plus(inputCount));
          setRender((state) => !state);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch(count1Actions.minus(inputCount));
          setRender((state) => !state);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch(count2Actions.plus);
          setRender((state) => !state);
        }}
      >
        IDX +
      </button>
      <button
        onClick={() => {
          store.dispatch(count2Actions.minus);
          setRender((state) => !state);
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
              type: ARR.ADD, //
              payload: { input: inputText },
            });
          }}
        >
          ++++++
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: ARR.REMOVE, //
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
