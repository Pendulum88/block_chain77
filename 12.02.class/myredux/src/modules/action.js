const TYPE = {
  ALPHA: "alpha",
  BRAVO: "bravo",
  CHARLIE: "charlie",
};

const TYPE2 = {
  INCREASE: "in",
  DECREASE: "de",
};

const NUMBERINDEX = {
  1: "firstNum",
  2: "secondNum",
};

export const type = (type, type2) => {
  return `count${type}/${type2}crease`;
};
export const TYPES = { TYPE, TYPE2, NUMBERINDEX };

const increase = (type1, numberIndex) => ({
  type: type(type1, TYPE2.INCREASE),
  payload: numberIndex,
});
const decrease = (type1, numberIndex) => ({
  type: type(type1, TYPE2.DECREASE),
  payload: numberIndex,
});
export const action = { increase, decrease };
