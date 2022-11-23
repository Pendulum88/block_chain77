import "./App.css";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(0);

  let num = 0;

  const increase = () => {
    num += 1;
  };

  return (
    <div className="App" onClick={increase}>
      <h1>ㅎㅇ?</h1>
      <ChildFunc text="string" num={num} setColor={setColor} />
      <ChildComp text="string" num={num} color={color} />
    </div>
  );
}

export default App;

class ChildComp extends React.Component {
  constructor(props) {
    // props란 부모 컴포넌트가 전달한 데이터
    // 보통은 읽기 전용으로 쓴다 << 재정의를 하지 않는다
    super(props);
    // 클래스형 컴포넌트에서는 constructor(생성자)에서 매개변수로 받아
    // 상속 부모 클래스(React.Component)의 constructor(super)를 호출한다
    // 이후 this.props를 사용하여 호출할수 있다
    console.log(this.props);
    // this.props.color
  }

  render() {
    return (
      <div style={{ color: "#" + this.props.color.toString(16) }}>
        {/* toString(16) << 16 : 해당 진수로 바꿔준다 */}
        {this.props.num}
      </div>
    );
  }
}

function ChildFunc(props) {
  // 함수형 컴포넌트에서는 매개변수로 바로 받는다
  // {}를 사용하여 구조분해할당을 할수있다
  // function ChildFunc({})
  // const {} = props << 와 같다
  console.log(props);
  // props.setColor

  const changeColor = () => {
    props.setColor((state) => state + 100);
    // props의 setColor 메서드를 호출한다
  };

  return <div onClick={changeColor}>{props.num}</div>;
}
