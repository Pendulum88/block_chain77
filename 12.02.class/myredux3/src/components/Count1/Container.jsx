import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import Count1Comp from "./Component";
import { action as count1Act } from "../../modules/Count1";
import { action as count2Act } from "../../modules/Count2";

function Count1Container() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [step, setStep] = useState(0);
  const increase = (param, selector) => {
    if (selector) {
      dispatch(count1Act.increase(param));
    } else {
      dispatch(count2Act.increase(param));
    }
  };
  const decrease = (param, selector) => {
    if (selector) {
      dispatch(count1Act.decrease(param));
    } else {
      dispatch(count2Act.decrease(param));
    }
  };
  const set = (selector) => {
    if (selector) {
      dispatch(count1Act.set());
    } else {
      dispatch(count2Act.set());
    }
  };

  return (
    <Count1Comp
      state={state}
      step={step}
      setStep={setStep}
      increase={increase}
      decrease={decrease}
      set={set}
    />
  );
}

export default Count1Container;
