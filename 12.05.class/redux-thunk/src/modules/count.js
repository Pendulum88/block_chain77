import promiseTime from "./promiseTime";

const TYPE = {
  INCREMENT: "count/increment",
  DECREMENT: "count/decrement",
};

const increment = () => {
  return {
    type: TYPE.INCREMENT,
  };
};

const decrement = () => {
  return {
    type: TYPE.DECREMENT,
  };
};
//

// 기존의 redux 실행 순서
// 1. dispatch(action)을 호출한다. 해당 action은 reducer에 전달된다
//   ↑ action은 무조건 객체 형식만 가능하다
// 2. dispatch가 호출되면 reducer를 자동으로 호출한다
// 3. reducer는 state와 action의 매개변수를 받아 처리한다
// 4. reducer의 return값은 그대로 state에 정의된다
//   - useSelector를 사용하면 state 변화시 랜더링을 다시 해준다(reRendering)
// 순서
// action -> dispatch -> reducer -> state

//

// thunk사용시 redux 실행순서
// 1. dispatch(action)을 호출한다
// 2. action이 함수인지 확인하고, 함수라면 reducer에 전달하는것이 아닌
//  action 함수 자체를 호출한다 (확인은 thunk가 해준다) 전달하는 함수는 async await가 가능하다
// 3. action이 객체인 경우 기존의 redux 실행 순서와 마찬가지로 작동한다
// 순서
// action -> dispatch -> action -> dispatch -> reducer

//
const asyncIncrement = () => {
  // 2. 이 함수가 호출된다
  console.log("2. asyncIncrement");
  return async (dispatch, getState) => {
    // thunk 사용시 action으로 함수를 dispatch에 전달할수 있게 된다
    // 3. thunk에서 해당 함수를 호출한다
    // action이 객체인 경우엔 reducer에 전달하고,
    console.log("3. asyncIncrement return function");
    try {
      // await를 사용한 함수의 호출이 에러가 발생할수도 있기 때문에 (reject) try, catch구문을 사용한다
      // 4. promiseTime 함수를 호출하고, 끝나는걸 기다렸다가 result에 결과(resolve)를 정의한다
      console.log("4. promiseTime 호출");
      const result = await promiseTime(TYPE.INCREMENT, 1000);
      // 7. result를 받아서 dispatch를 호출해  action으로 전달한다
      console.log("7. result = ", result);
      dispatch({ type: result });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };
};

const asyncDecrement = () => {
  return async (dispatch, getState) => {
    // thunk 사용시 action으로 함수를 dispatch에 전달할수 있게 된다
    try {
      const result = await promiseTime(TYPE.DECREMENT, 1000);
      dispatch({ type: result });
      // return await promiseTime(TYPE.DECREMENT, 1000)
      // ↑ state에 적용되지 않는다
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };
};

export const action = { increment, decrement, asyncIncrement, asyncDecrement };

export const initialize = 0;

export const reducer = (state = initialize, action) => {
  // 8. 7번에서 호출한 dispatch의 action은 객체기 때문에 reducer가 호출된다
  const { type, payload } = action;
  // 9. type에 따라서 코드를 분류하여 처리한다
  console.log("9. type = ", type);
  switch (type) {
    // 9-1. 현재는 increment를 호출중이다
    case TYPE.INCREMENT:
      // 10. return된 state + 1을 state(현재는 count)에 적용한다
      console.log("10. state = ", state + 1);
      return state + 1;

    case TYPE.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};
