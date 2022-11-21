import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.func();
    this.state = { test: "state test" };
    // state 선언 및 정의(초기화)
    // state : 상태값, React에서의 리랜더링(다시그리기)의 기준
    // state가 변경(재정의)되면 render 메서드를 다시 실행하여 웹페이지에 출력한다
  }

  componentDidMount() {
    console.log("componentDidMount");
    // 컴포넌트가 Virtual DOM에 추가될때(생성될때/마운트될때) 실행되는 메서드
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    // state값이 변화했을때 실행되는 메서드
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // 컴포넌트가 DOM에서 삭제될때 실행되는 메서드
  }

  render() {
    return (
      <div
        onClick={function () {
          this.setState({ test: this.state.test + "1" });
          // state 재정의
        }.bind(this)}
      >
        ClassComp {this.props.text} {this.state.test}
      </div>
    );
  }
}
