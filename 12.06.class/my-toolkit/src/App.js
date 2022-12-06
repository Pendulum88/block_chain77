import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { action } from "./modules/count";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="App">
      <div>{state.count.value}</div>
      <div>
        <button
          onClick={() => {
            dispatch(action.increase());
          }}
        >
          up
        </button>
        <button
          onClick={() => {
            dispatch(action.decrease());
          }}
        >
          down
        </button>
      </div>
    </div>
  );
}

export default App;
