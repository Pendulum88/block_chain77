const COUNT1 = {
  PLUS: "count1/Plus",
  MINUS: "count1/Minus",
  SET: "count1/Set",
};

const plus = () => ({
  type: COUNT1.PLUS,
});

const minus = () => ({
  type: COUNT1.MINUS,
});

const set = (input) => ({
  type: COUNT1.SET,
  payload: input,
});

export const actions = { plus, minus, set };

export const initialize = { count1: 0 };

export const reducer = (state = 0, action) => {
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
