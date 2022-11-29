export const COUNT2 = {
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
