import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { action as multiplyAct } from "./modules/multiply";
import { action as scoreAct } from "./modules/score";

function App() {
  const dispatch = useDispatch();
  const multiply = useSelector((state) => state.multiply.value);
  const score = useSelector((state) => state.score.value);

  return (
    <div className="App">
      <div>multiply : {multiply}</div>
      <button onClick={() => dispatch(multiplyAct.increase())}>
        {" "}
        + 1{" "}
      </button>{" "}
      <button onClick={() => dispatch(multiplyAct.decrease())}> - 1 </button>
      <div>score : {score}</div>
      <button onClick={() => dispatch(scoreAct.increase(multiply))}>
        {" "}
        UP{" "}
      </button>{" "}
      <button onClick={() => dispatch(scoreAct.decrease(multiply))}>
        {" "}
        DN{" "}
      </button>
      <div>
        <br />
        <button
          onClick={() => {
            dispatch(multiplyAct.setDefault());
            dispatch(scoreAct.setDefault());
          }}
        >
          SET
        </button>
      </div>
    </div>
  );
}

export default App;
