import { useState } from "react";

const Count2Comp = ({ count2 = 0, plus, minus, input }) => {
  const [inputNum, setInputNum] = useState(0);

  return (
    <div>
      <div>{count2}</div>
      <div>
        <button
          onClick={() => {
            plus();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            minus();
          }}
        >
          -
        </button>
        <div>
          <input
            type={"number"}
            placeholder={"count2 input"}
            value={inputNum}
            onInput={(e) => {
              setInputNum(+e.target.value);
            }}
          />
          <button
            onClick={() => {
              input(inputNum);
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default Count2Comp;
