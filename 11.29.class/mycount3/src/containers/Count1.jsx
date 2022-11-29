import { useState } from "react";

import store from "../store";
import { actions } from "../modules/count1";
import Count1Component from "../components/Count1";

export default function Count1() {
  const [_, forceUpdate] = useState(false);
  const [firstInput, setFirstInput] = useState("");

  const count1Up = () => {
    store.dispatch(actions.plus());
    forceUpdate((prev) => !prev);
  };
  const count1Down = () => {
    store.dispatch(actions.minus());
    forceUpdate((prev) => !prev);
  };
  const changeFirstInput = (e) => {
    setFirstInput(+e.target.value);
  };
  const jump1Count = () => {
    store.dispatch(actions.set(firstInput));
    forceUpdate((prev) => !prev);
  };

  return (
    <Count1Component
      store={store}
      changeFirstInput={changeFirstInput}
      firstInput={firstInput}
      jump1Count={jump1Count}
      count1Up={count1Up}
      count1Down={count1Down}
    />
  );
}
