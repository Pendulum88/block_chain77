const reducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "count2/plus":
      return state + 1;
    // ...state : 기존의 state를 넣는다
    // count1 ~ input : count1 프로퍼티에 payload로 받은 input 프로퍼티를 더한다
    case "count2/minus":
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
