export const COUNT1 = {
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
