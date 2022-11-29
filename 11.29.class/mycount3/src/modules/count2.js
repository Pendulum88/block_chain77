const COUNT2 = {
  PLUS: "count2/Plus",
  MINUS: "count2/Minus",
  SET: "count2/Set",
};

const plus = () => ({
  type: COUNT2.PLUS,
});

const minus = () => ({
  type: COUNT2.MINUS,
});

const set = (input) => ({
  type: COUNT2.SET,
  payload: input,
});

export const actions = { plus, minus, set };

export const initialize = { count2: 0 };

export const reducer = (state = 0, action) => {
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
