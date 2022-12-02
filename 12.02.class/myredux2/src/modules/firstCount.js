const TYPE = {
  PLUS: "firstcount/plus",
  MINUS: "firstcount/minus",
  SET: "firstcount/set",
};

const plus = (step) => ({
  type: TYPE.PLUS,
  payload: step,
});

const minus = (step) => ({
  type: TYPE.MINUS,
  payload: step,
});

const set = () => ({
  type: TYPE.SET,
});

export const action = { plus, minus, set };

export const initialize = { num: 0 };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.PLUS:
      return { ...state, num: state.num + payload };
    case TYPE.MINUS:
      return { ...state, num: state.num - payload };
    case TYPE.SET:
      return initialize;
    default:
      return state;
  }
};
