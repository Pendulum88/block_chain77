import { useState } from "react";
import styled from "styled-components";

export default function RegistComponent({ onClick }) {
  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  const [inputName, setName] = useState("");

  return (
    <RegistBox>
      <input
        onInput={(e) => {
          setId(e.target.value);
        }}
        type={"text"}
        placeholder={"ID"}
      />
      <input
        onInput={(e) => {
          setPw(e.target.value);
        }}
        type={"password"}
        placeholder={"PW"}
      />
      <input
        onInput={(e) => {
          setName(e.target.value);
        }}
        type={"text"}
        placeholder={"NAME"}
      />
      <button
        onClick={() => {
          onClick(inputId, inputPw, inputName);
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
}

const RegistBox = styled.div`
  input {
    padding: 5px;
  }
`;
