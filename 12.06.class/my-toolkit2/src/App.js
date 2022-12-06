import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { action } from "./moules/score";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App">
      <div>{state.score.value}</div>
      <div>
        <button
          onClick={() => {
            dispatch(action.increase());
          }}
        >
          UP
        </button>
        <button
          onClick={() => {
            dispatch(action.decrease());
          }}
        >
          DOWN
        </button>
      </div>
    </div>
  );
}

export default App;
