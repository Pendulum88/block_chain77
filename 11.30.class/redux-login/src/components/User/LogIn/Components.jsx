import styled from "styled-components";
import { useState } from "react";

const LogInComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  return (
    <LogInBox>
      <input
        type={"text"}
        value={userId}
        placeholder={"ID"}
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type={"password"}
        value={userPw}
        placeholder={"PW"}
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(userId, userPw);
        }}
      >
        Log In
      </button>
    </LogInBox>
  );
};

export default LogInComponent;

const LogInBox = styled.div`
  input {
    padding: 5px;
  }
`;
