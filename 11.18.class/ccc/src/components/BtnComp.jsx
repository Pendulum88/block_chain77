import React from "react";
import styled from "styled-components";

export default class BtnComp extends React.Component {
  // 컴포넌트는 대문자로 시작해야한다 (파스칼 케이스)
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NumPad
        className="num-pad"
        onClick={() => {
          this.props.a(+this.props.item);
        }}
      >
        {this.props.item}
        <div></div>
        <div></div>
      </NumPad>
    );
  }
}

const NumPad = styled.div`
  width: 100px;
  height: 100px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  div {
    width: 10px;
    height: 10px;
    background-color: red;
    &:nth-child(2) {
      background-color: blue;
    }
  }
  &:nth-child(2n) {
    background-color: lightgray;
  }
`;

// & : 현재 선택자를 가리킨다
