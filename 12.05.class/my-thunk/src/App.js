import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { action } from "./modules/count";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increaseFunc = () => {
    dispatch(action.increase());
  };
  const decreaseFunc = () => {
    dispatch(action.decrease());
  };
  const asyncIncFunc = () => {
    dispatch(action.asyncInc());
  };
  const asyncDecFunc = () => {
    dispatch(action.asyncDec());
  };

  return (
    <div className="App">
      <div>{state.count.num}</div>
      <br />
      <div>
        <button onClick={increaseFunc}>동기 INCREASE</button>{" "}
        <button onClick={decreaseFunc}>동기 DECREASE</button>
      </div>
      <br />
      <div>
        <button onClick={asyncIncFunc}>비동기 INCREASE</button>{" "}
        <button onClick={asyncDecFunc}>비동기 DECREASE</button>
      </div>
    </div>
  );
}

export default App;
