import store from "../../../modules/store";
import RegistComponent from "./Components";
import { action } from "../../../modules/userDB";

const RegistContainer = () => {
  // 1. onClick을 선언한다
  const onClick = (userId, userPw, userName) => {
    // 5. 자식(RegistComponent)이 onClick을 호출했다.
    // 매개변수로 (userId, userPw, userName)을 전달받았다
    console.log("RegistContainer onClick => dispatch");
    store.dispatch(action.regist(userId, userPw, userName));
    // 6. store의 dispatch를 호출했다.
    // 매개변수로 action의 regist를 호출해 return값을 전달했다
    // 즉 dispatch 호출보다 action의 regist 호출이 먼저 실행된다
    // 7. action의 regist를 호출했다. 매개변수로 (userId, userPw, userName)를 전달했다
    // 10. dispatch를 호출했다. 매개변수로 action.regist(userId, userPw, userName)의 return값을 전달했다
    // 11. dispatch는 reducer를 호출하며 action(action.regist의 반환값)을 전달한다
  };

  console.log("RegistContainer", onClick);

  // 2. onClick을 RegistComponent에 props로 전달한다
  return <RegistComponent onClick={onClick} />;
};

export default RegistContainer;

// 화살표함수
// () => ({})
// -> 왼쪽 ()안에 있는것이 오른쪽 () 안에 있는것과 같다. 즉 왼쪽 ()안의 것이 매개변수이다

// =>
// -> 오른쪽은 함수의 return 값이다 (현재는 {}, 객체를 반환한다)

// () => []
// -> 왼쪽 ()는 받는 매개변수이다. 오른쪽은 함수가 return하는 [] 배열이다

// () => {}
// -> 왼쪽 ()는 받는 매개변수이다. 오른쪽 {} 중괄호는 함수의 내용이다

// () => { return {} }
// -> 왼쪽()는 받는 매개변수이다. 오른쪽 {}는 함수의 내용이며 return 다음의 {}, 객체를 반환한다

// () => ({a:1}) == () => { return {a:1} } == function() { return {a:1} }
// () => [] == () => { return [] }
// (a) => { return a + 1 } == function(a) { return a + 1 }
