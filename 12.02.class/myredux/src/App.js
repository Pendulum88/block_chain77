import { useSelector, useDispatch } from "react-redux";
import { action, TYPES } from "./modules/action";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increaseNum = (type1, numberIndex) => {
    dispatch(action.increase(type1, numberIndex));
  };
  const decreaseNum = (type1, numberIndex) => {
    dispatch(action.decrease(type1, numberIndex));
  };

  return (
    <>
      <div>
        <div>
          AF {state.countAlpha.firstNum}{" "}
          <button
            onClick={() => {
              increaseNum(TYPES.TYPE.ALPHA, TYPES.NUMBERINDEX[1]);
            }}
          >
            Increase
          </button>{" "}
          <button
            onClick={() => {
              decreaseNum(TYPES.TYPE.ALPHA, TYPES.NUMBERINDEX[1]);
            }}
          >
            Decrease
          </button>
        </div>
        <div>
          AS {state.countAlpha.secondNum}{" "}
          <button
            onClick={() => {
              increaseNum(TYPES.TYPE.ALPHA, TYPES.NUMBERINDEX[2]);
            }}
          >
            Increase
          </button>{" "}
          <button
            onClick={() => {
              decreaseNum(TYPES.TYPE.ALPHA, TYPES.NUMBERINDEX[2]);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
      <div>
        <div>
          BF {state.countBravo.firstNum}{" "}
          <button
            onClick={() => {
              increaseNum(TYPES.TYPE.BRAVO, TYPES.NUMBERINDEX[1]);
            }}
          >
            Increase
          </button>{" "}
          <button
            onClick={() => {
              decreaseNum(TYPES.TYPE.BRAVO, TYPES.NUMBERINDEX[1]);
            }}
          >
            Decrease
          </button>
        </div>
        <div>
          BS {state.countBravo.secondNum}{" "}
          <button
            onClick={() => {
              increaseNum(TYPES.TYPE.BRAVO, TYPES.NUMBERINDEX[2]);
            }}
          >
            Increase
          </button>{" "}
          <button
            onClick={() => {
              decreaseNum(TYPES.TYPE.BRAVO, TYPES.NUMBERINDEX[2]);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
      <div>
        <div>
          CF {state.countCharlie.firstNum}{" "}
          <button
            onClick={() => {
              increaseNum(TYPES.TYPE.CHARLIE, TYPES.NUMBERINDEX[1]);
            }}
          >
            Increase
          </button>{" "}
          <button
            onClick={() => {
              decreaseNum(TYPES.TYPE.CHARLIE, TYPES.NUMBERINDEX[1]);
            }}
          >
            Decrease
          </button>
        </div>
        <div>
          CS {state.countCharlie.secondNum}{" "}
          <button
            onClick={() => {
              increaseNum(TYPES.TYPE.CHARLIE, TYPES.NUMBERINDEX[2]);
            }}
          >
            Increase
          </button>{" "}
          <button
            onClick={() => {
              decreaseNum(TYPES.TYPE.CHARLIE, TYPES.NUMBERINDEX[2]);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
