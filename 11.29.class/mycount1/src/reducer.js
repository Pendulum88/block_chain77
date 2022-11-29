const reducer = (state = 0, action) => {
  switch (action.type) {
    case "count1Plus": {
      const temp = { ...state };
      temp.count1 += 1;
      return temp;
    }
    case "count1Minus": {
      const temp = { ...state };
      temp.count1 -= 1;
      return temp;
    }
    case "count2Plus": {
      const temp = { ...state };
      temp.count2 += 1;
      return temp;
    }
    case "count2Minus": {
      const temp = { ...state };
      temp.count2 -= 1;
      return temp;
    }
    default:
      return state;
  }
};

export { reducer };
