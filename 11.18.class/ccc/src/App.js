// import logo from "./logo.svg";
// import ClassComp from "./components/ClassComp";

// function App() {
//   const [isMount, setMount] = useState(false);
//   function changeMount() {
//     setMount(!isMount);
//   }

//   const [count, setCount] = useState(0);

//   return (
//     <div className="App" onClick={changeMount}>
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//       {/* <ClassComp /> */}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./App.css";
import BtnComp from "./components/BtnComp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: undefined,
      secondNum: undefined,
      result: undefined,
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  selNum(num) {
    if (this.state.firstNum === undefined) {
      // this.setState({ ...this.state, firstNum: num });
      this.setState({ firstNum: num });
    } else if (this.state.secondNum === undefined) {
      // this.setState({ ...this.state, secondNum: num });
      this.setState({ secondNum: num });
    }
  }

  render() {
    // 클래스 컴포넌트의 필수요소다 Virtual DOM에 그려지는 HTML 문법
    // 클래스 컴포넌트에서만 render()메서드 사용
    // 함수형 컴포넌트에서는 return으로 바로 사용한다
    return (
      <div className="calculator">
        <div className="row">
          <BtnComp
            item="7"
            // onClick={function (e) {
            //   if (this.state.firstNum == undefined) {
            //     this.setState({ ...this.state, firstNum: 7 });
            //   } else if (this.state.secondNum == undefined) {
            //     this.setState({ ...this.state, secondNum: 7 });
            //   }
            // }.bind(this)}
            // .bind(this) : 이 함수에서의 this가 뭐냐?를 정의해준다
            // 바인드의 디스가 App을 가르키는 이유는 class의 객체 자기자신을 뜻하기 때문
            a={this.selNum.bind(this)}
          />
          <BtnComp item="8" a={this.selNum.bind(this)} />
          <BtnComp item="9" a={this.selNum.bind(this)} />
          <BtnComp
            item="+"
            a={function (e) {
              if (
                this.state.firstNum !== undefined &&
                this.state.secondNum !== undefined
              )
                this.setState({
                  // console.log(count++)
                  // 이것과 마찬가지로 먼저 띄우고 언디파인드로 초기화해준다
                  firstNum: undefined,
                  secondNum: undefined,
                  result: this.state.firstNum + this.state.secondNum,
                });
            }.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp item="4" a={this.selNum.bind(this)} />
          <BtnComp item="5" a={this.selNum.bind(this)} />
          <BtnComp item="6" a={this.selNum.bind(this)} />
          <BtnComp item="/" />
        </div>
        <div className="row">
          <BtnComp item="1" a={this.selNum.bind(this)} />
          <BtnComp item="2" a={this.selNum.bind(this)} />
          <BtnComp item="3" a={this.selNum.bind(this)} />
          <BtnComp item="*" />
        </div>
        <div className="row">
          <BtnComp item={this.state.result} />
          <BtnComp item="0" />
          <BtnComp item="=" />
          <BtnComp item="-" />
        </div>
      </div>
    );
  }
}

export default App;
