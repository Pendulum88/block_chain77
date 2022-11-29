import { COUNT2 } from "../action/count2";

const reducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case COUNT2.PLUS:
      return state + 1;
    // ...state : 기존의 state를 넣는다
    // count1 ~ input : count1 프로퍼티에 payload로 받은 input 프로퍼티를 더한다
    case COUNT2.MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
