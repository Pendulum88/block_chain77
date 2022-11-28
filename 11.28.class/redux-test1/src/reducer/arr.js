const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "arr/add":
      return [...state, payload.input];
    case "arr/remove": {
      const temp = [...state];
      temp.shift();
      return temp;
    }
    default:
      return state;
  }
};

export default reducer;
