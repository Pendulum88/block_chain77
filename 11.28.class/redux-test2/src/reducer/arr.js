import { ARR } from "../action/arr";

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ARR.ADD:
      return [...state, payload.input];
    case ARR.REMOVE: {
      const temp = [...state];
      temp.shift();
      return temp;
    }
    default:
      return state;
  }
};

export default reducer;
