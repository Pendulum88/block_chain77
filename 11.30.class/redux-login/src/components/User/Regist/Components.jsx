import { useState } from "react";
import styled from "styled-components";

// 3. onClick을 부모 컴포넌트로(RegistContainer)부터 props로 받아온다
const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

  console.log("RegistComponent", onClick);

  return (
    <RegistBox>
      <input
        type={"text"}
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"ID"}
      />
      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"PW"}
      />
      <input
        type={"text"}
        value={userName}
        onInput={(e) => {
          setName(e.target.value);
        }}
        placeholder={"NAME"}
      />
      <button
        onClick={() => {
          console.log("button onClick");
          // 4. 사용자가 Regist 버튼을 클릭 했을때 onClick 함수를 호출한다
          // 매개변수로 (userId, userPw, userName)를 전달한다
          // (userId, userPw, userName) -> 입력하면서 setState됨
          onClick(userId, userPw, userName);
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  input {
    padding: 5px;
  }
`;
