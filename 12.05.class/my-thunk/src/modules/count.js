const TYPE = {
  INCREASE: "count/increase",
  DECREASE: "count/decrease",
};

const increase = () => ({
  type: TYPE.INCREASE,
});

const decrease = () => {
  return { type: TYPE.DECREASE };
};

const asyncInc = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch({ type: TYPE.INCREASE });
  }, 1000);
};

const asyncDec = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch({ type: TYPE.DECREASE });
  }, 1000);
};

export const action = { increase, decrease, asyncInc, asyncDec };
export const initialize = { num: 0 };
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.INCREASE:
      return { ...state, num: state.num + 1 };
    case TYPE.DECREASE:
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};
