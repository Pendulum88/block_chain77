import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { action as firstAct } from "./modules/firstCount";
import { action as secondAct } from "./modules/secondCount";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [input, setInput] = useState(0);
  const plusCount = (step, isFirst) => {
    if (isFirst) {
      dispatch(firstAct.plus(step));
    } else {
      dispatch(secondAct.plus(step));
    }
  };
  const minusCount = (step, isFirst) => {
    if (isFirst) {
      dispatch(firstAct.minus(step));
    } else {
      dispatch(secondAct.minus(step));
    }
  };
  const setCount = (isFirst) => {
    if (isFirst) {
      dispatch(firstAct.set());
    } else {
      dispatch(secondAct.set());
    }
  };

  return (
    <>
      <div className="App">
        firstCount [ {state.firstCount.num} ]{" "}
        <button
          onClick={() => {
            plusCount(input, true);
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            minusCount(input, true);
          }}
        >
          -
        </button>{" "}
        <button
          onClick={() => {
            setCount(true);
          }}
        >
          SET
        </button>
      </div>
      <br />
      <div className="App">
        secondCount [ {state.secondCount.num} ]{" "}
        <button
          onClick={() => {
            plusCount(input, false);
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            minusCount(input, false);
          }}
        >
          -
        </button>{" "}
        <button
          onClick={() => {
            setCount(false);
          }}
        >
          SET
        </button>
        <div>
          <br />
          <input
            type={"number"}
            onInput={(e) => {
              setInput(+e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
