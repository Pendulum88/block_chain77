import { TYPES, type as actionType } from "./action";

export const initialize = { firstNum: 0, secondNum: 0 };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType(TYPES.TYPE.CHARLIE, TYPES.TYPE2.INCREASE):
      return { ...state, [payload]: state[payload] + 1 };
    case actionType(TYPES.TYPE.CHARLIE, TYPES.TYPE2.DECREASE):
      return { ...state, [payload]: state[payload] - 1 };
    default:
      return state;
  }
};
