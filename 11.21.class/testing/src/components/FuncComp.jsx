// export default function FuncComp(props) {
// const {text, func} = props
//   props.func();

//   return <div>FuncComp {props.text}</div>;
// }

// import { useEffect } from "react";
// import { useState } from "react";
import { useState, useEffect } from "react";

export default function FuncComp({ text, func }) {
  // 함수형 컴포넌트에서 클래스형 컴포넌트의 기능들을
  // 사용하기 위해 Hook을 사용한다
  // Hook은 use로 시작한다
  // useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer 등등이 있다
  // Hook은 사용자가 구현할 수도 있다 (커스텀훅)
  // Custom Hook과 Component의 차이 : HTML문법으로 return하는가 안하는가
  // useState와 useEffect는 뺄수없는 Hook이다
  // 나머지 훅들은 사용하지 않아도 크게 상관은 없다

  const [test, setTest] = useState("state test");
  // state 선언 및 정의(초기화)
  // state가 변경(재정의)되면 컴포넌트를 다시 불러온다
  // 단, 다시 불러올때 Hook으로 된 변수, 함수들은 다시 부르지 않는다 (useState 등등)
  // useState는 함수형 컴포넌트의 투톱중 하나다

  const [study1] = useState("study1");

  func();

  useEffect(() => {
    // useEffect는 랜더링 후에 실행되는 콜백함수이다
    console.log("useEffect");
    //
    //
    // 아래가 componentWillUnmount 와 같다
    return () => {
      console.log("componentWillUnmount");
    };
    // 빈배열의 useEffect 에서 함수를 return 하면
    // componentWillUnmount와 같은 작동을 한다
    //
    //
  }, []);
  // useEffect의 두번째 매개변수는 state 상태값의 배열을 넣는다
  // 빈배열의 경우 componentDidMount와 같은 역할을 한다
  // 즉, 마운트 되었을때만 실행한다
  // useEffect는 함수형 컴포넌트의 투톱중 하나다

  useEffect(() => {
    console.log("state change");
    // state값이 변화했을때 실행되는 메서드
  });

  useEffect(() => {
    console.log("test change");
    // state중 test값이 변화했을때 실행되는 메서드
  }, [test]);

  useEffect(() => {
    console.log("study1 change");
    // state중 study1값이 변화했을때 실행되는 메서드
  }, [study1]);
  // 두번째 매개변수 배열의 아이템으로 프로그래머가 감지하고 싶은
  // state(상태값)를 넣는다
  // study1이 변경(재정의) 되었을때만 실행된다

  useEffect(() => {
    console.log("test || study1 change");
    // state중 test 또는 study1값이 변화했을때 실행되는 메서드
  }, [test, study1]);

  return (
    <div
      onClick={function () {
        setTest(test + "1");
        // state 재정의
      }}
    >
      FuncComp {text} {test} {study1}
    </div>
  );
}
