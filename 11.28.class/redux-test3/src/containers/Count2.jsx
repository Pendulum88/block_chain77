import Count2Comp from "../components/Count2";

import { connect } from "react-redux";
import { action } from "../modeules/count2";

const Count2Container = ({ count2, plus, minus, input }) => {
  return <Count2Comp count2={count2} plus={plus} minus={minus} input={input} />;
};

const mapStateToProps = (state, props) => {
  return { count2: state.count2, ...props };
  // 객체 내의 값이 그대로 props로 전달된다
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(action.plus);
    },
    minus: () => {
      dispatch(action.minus);
    },
    input: (input) => {
      dispatch(action.input(input));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);
// connect : 매개변수로 mapStateToProps 콜백함수 또는 mapStateToProps와 mapDispatchToProps 콜백함수를 받는다
// mapStateToProps와 mapDispatchToProps 콜백함수의 return 값은 객체로 내보낸다
// mapStateToProps 콜백함수의 매개변수로는 state와 props를 받는다
// - state는 store(redux)의 state이다
// - props는 상위 컴포넌트에(여기선 App.js)서 전달한 props이다

// mapDispatchToProps 콜백함수의 매개변수로는 dispatch를 받는다
// - diispatch는 store의 dispatch 메서드이다
// mapStateToProps 콜백함수와 mapDispatchToProps 콜백함수의 return값 객체는 합쳐져서 다음 컴포넌트(Count2Cont)에 props로 전달한다
