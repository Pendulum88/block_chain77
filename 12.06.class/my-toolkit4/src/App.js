import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { action } from "./modules/userInfo";

function App() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.id.value);
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const signUp = () => {
    dispatch(action.create({ id: idInput, pw: pwInput }));
    setIdInput("");
    setPwInput("");
  };
  const signIn = () => {
    dispatch(action.connect({ id: idInput, pw: pwInput }));
  };

  // console.log(allUser);
  return (
    <MainBox>
      <div>
        <input
          type={"text"}
          value={idInput}
          onInput={(e) => {
            setIdInput(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type={"password"}
          value={pwInput}
          onInput={(e) => {
            setPwInput(e.target.value);
          }}
        />
      </div>
      <br />
      <button onClick={signUp}>회원가입</button>
      <button onClick={signIn}>로그인</button>
    </MainBox>
  );
}

export default App;

const MainBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
