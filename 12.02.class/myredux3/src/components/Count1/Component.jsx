const Count1Comp = ({ state, step, setStep, increase, decrease, set }) => {
  return (
    <>
      <div>
        <input
          type={"text"}
          value={step}
          onInput={(e) => {
            setStep(+e.target.value);
          }}
        />
      </div>
      <div>
        {state.count1.num}{" "}
        <button
          onClick={() => {
            increase(step, true);
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            decrease(step, true);
          }}
        >
          -
        </button>{" "}
        <button
          onClick={() => {
            set(true);
          }}
        >
          SET
        </button>
      </div>
      <div>
        {state.count2.num}{" "}
        <button
          onClick={() => {
            increase(step, false);
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            decrease(step, false);
          }}
        >
          -
        </button>{" "}
        <button
          onClick={() => {
            set(false);
          }}
        >
          SET
        </button>
      </div>
    </>
  );
};

export default Count1Comp;
