import { COUNT2 } from "../action/count2";

const count2 = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNT2.PLUS: {
      return state + 1;
    }
    case COUNT2.MINUS: {
      return state - 1;
    }
    case COUNT2.SET: {
      return payload;
    }
    default:
      return state;
  }
};

export default count2;
