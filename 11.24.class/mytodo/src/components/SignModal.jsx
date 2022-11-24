import styled from "styled-components";
import { TodoBtn } from "./Section/setting";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignModal({ setUserList, userList }) {
  const [inputId, setInputId] = useState();
  const [inputPw, setInputPw] = useState();

  const getLogin = () => {};

  return (
    <SignModalBox>
      <SignModalInnerBox>
        <div>로 그 인</div>
        <Link to={"/"}>
          <span className="x-btn">X</span>
        </Link>
        <form>
          <div>
            <div className="container">
              <span>ID</span>
              <input
                type="text"
                value={inputId}
                onInput={(e) => {
                  setInputId(e.target.value);
                }}
              />
            </div>
            <div className="container">
              <span>PW</span>
              <input
                type="password"
                value={inputPw}
                onInput={(e) => {
                  setInputPw(e.target.value);
                }}
              />
            </div>
            <div className="btn-cont">
              <TodoBtn onClick={getLogin}>Log In</TodoBtn>
              <TodoBtn>Sign In</TodoBtn>
            </div>
          </div>
        </form>
      </SignModalInnerBox>
    </SignModalBox>
  );
}

const SignModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignModalInnerBox = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  width: 30%;
  position: relative;
  input {
    width: 300px;
    padding: 5px 10px;
    margin: 5px;
    font-size: 20px;
  }

  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;

    &:last-child {
      justify-content: space-between;
    }
  }

  & .container {
    display: flex;
    justify-content: center;
  }
  & .container span {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  & .btn-cont {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  & .x-btn {
    position: absolute;
    top: 0px;
    right: 20px;
    cursor: pointer;
    font-size: 40px;
  }
`;
