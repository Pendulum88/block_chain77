import { useState } from "react";

import store from "../store";
import { actions } from "../modules/count2";
import Count2Component from "../components/Count2";

import { Connect } from "react-redux";

export default function Count2() {
  const [_, forceUpdate] = useState(false);
  const [secondInput, setSecondInput] = useState("");

  const count2Up = () => {
    store.dispatch(actions.plus());
    forceUpdate((prev) => !prev);
  };
  const count2Down = () => {
    store.dispatch(actions.minus());
    forceUpdate((prev) => !prev);
  };
  const changeSecondInput = (e) => {
    setSecondInput(+e.target.value);
  };
  const jump2Count = () => {
    store.dispatch(actions.set(secondInput));
    forceUpdate((prev) => !prev);
  };

  return (
    <Count2Component
      store={store}
      changeSecondInput={changeSecondInput}
      secondInput={secondInput}
      jump2Count={jump2Count}
      count2Up={count2Up}
      count2Down={count2Down}
    />
  );
}
