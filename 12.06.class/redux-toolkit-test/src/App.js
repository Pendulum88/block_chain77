// import { useSelector, useDispatch } from "react-redux";

// import { action } from "./modules/counter";

// function App() {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.count);

//   return (
//     <div>
//       <div>{count}</div>
//       <div>
//         <button
//           onClick={() => {
//             dispatch(action.increment());
//           }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             dispatch(action.decrement());
//           }}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
// toolkit : 유즈셀렉터 state.count.value로 수정

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { action, counterThunk } from "./modules/counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  const isLoading = useSelector((state) => state.count.isLoading);
  const [inputCount, setCount] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <div>
      <div>{count}</div>
      {!isLoading || <div>Now Loading</div>}
      <div>
        <input
          type={"number"}
          value={input}
          onInput={({ target: { value } }) => {
            setInput(+value);
          }}
          placeholder={"inputCount"}
        />
        <button
          onClick={() => {
            dispatch(action.input({ count: input }));
          }}
        >
          set Count
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(action.increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(action.decrement());
          }}
        >
          -
        </button>
        <div>
          <input
            type={"number"}
            value={inputCount}
            onInput={(e) => {
              setCount(+e.target.value);
            }}
            placeholder={"count"}
          />
          <button
            onClick={() => {
              dispatch(counterThunk(inputCount));
              // counter에서 createAsyncThunk로 정의한 변수는
              // action 함수처럼 사용할수 있다
            }}
          >
            set Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
