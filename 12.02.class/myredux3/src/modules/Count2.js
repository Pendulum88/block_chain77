const TYPE = {
  INCREASE: "count2/increase",
  DECREASE: "count2/decrease",
  SET: "count2/set",
};
const increase = (param) => ({
  type: TYPE.INCREASE,
  payload: param,
});
const decrease = (param) => ({
  type: TYPE.DECREASE,
  payload: param,
});
const set = () => ({
  type: TYPE.SET,
});
export const action = { increase, decrease, set };
export const initlize = { num: 0 };
export const reducer = (state = initlize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.INCREASE:
      return { ...state, num: state.num + payload };
    case TYPE.DECREASE:
      return { ...state, num: state.num - payload };
    case TYPE.SET:
      return initlize;
    default:
      return state;
  }
};
