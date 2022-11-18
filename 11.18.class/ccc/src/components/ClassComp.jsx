import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Virtual DOM에 추가될때 실행되는 함수
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // Virtual DOM에서 삭제될때 실행되는 함수
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.setState({ count: this.state.count + 1 });
          }.bind(this)}
        >
          {this.state.count}
        </div>
        {/*  */}
        {/*  */}
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.props.setCount(this.props.count + 1);
          }.bind(this)}
        >
          {this.props.count}
          {/* count : app.js에서 가져온 count */}
          {/* count는 app.js에 저장되어있기때문에 없앴다가 다시나와도 보존됨 */}
        </div>
      </>
    );
  }

  //  이거 실행되면 디드마운트 -> 윌언마운트 -> 디드마운트가 되는데,
  // 그 이유는 인덱스js에서 <React.StrictMode> << 얘가 이렇게 실행한다
  // 주석처리하면 안뜨는걸 확인했음, 일단 지금은 테스트 모드라서 그런것이라고 생각하자
}

// yarn : React가 Facebook에서 만든거라고 했지?
// yarn은 React에 최적화하기 위해서 Facebook에서 만든 패키지매니저이다
// npm이랑 약간은 다르다 근데, node 18버전 들어오면서 아얘 달라졌다

// 루트경로로 이동 -> npm i -g corepack
// 11.18.class로 이동 -> yarn create react-app yarntest
