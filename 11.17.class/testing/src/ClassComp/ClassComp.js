import React from "react";

export default class ClassComp extends React.Component {
  // 클래스형 컴포넌트
  // export default function ClassComp({}){
  // 함수형 컴포넌트
  //     return <div></div>
  // }

  constructor(props) {
    super(props);
    // props란 상위 컴포넌트에서 전달하는 데이터이다
    // <ClassComp style={{width:'10px'}}></ClassComp>
    // style은 attribute인가? props인가?
    // attribute : HTML태그에 적는것
    // ClassComp는 컴포넌트이다. 때문에 props가 맞다
    // 예제와 같이 style을 전달했다면 return <div style={this.props.style}></div>; 와 같이 써야한다

    this.state = { count: 0 };
    // const [count, setCount] = useState(0);

    // this.state = { count: 0, name: ' 경훈' };
    // const [name, setName] = useState('경훈');
    //
  }

  render() {
    return (
      <div
        onClick={function () {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        {count}
      </div>
    );
  }
}
