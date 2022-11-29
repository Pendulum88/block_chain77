import { COUNT1 } from "../action/count1";

const count1 = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNT1.PLUS: {
      return state + 1;
    }
    case COUNT1.MINUS: {
      return state - 1;
    }
    case COUNT1.SET: {
      return payload;
    }
    default:
      return state;
  }
};

export default count1;
