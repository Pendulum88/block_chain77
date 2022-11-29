// container : JS 로직을 다루는 부분
// components : HTML구조를 이루는 부분

import { useState } from "react";

import Count1Comp from "../components/Count1";
import store from "../store";
import { action } from "../modeules/count1";

const Count1Container = () => {
  const count1 = store.getState().count1;
  const [_, render] = useState(true);
  const plus = () => {
    store.dispatch(action.plus);
    render((state) => !state);
  };
  const minus = () => {
    store.dispatch(action.minus);
    render((state) => !state);
  };
  const input = (input) => {
    store.dispatch(action.input(input));
    render((state) => !state);
  };

  return <Count1Comp count1={count1} plus={plus} minus={minus} input={input} />;
};

export default Count1Container;
