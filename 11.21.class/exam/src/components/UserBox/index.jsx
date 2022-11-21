import styled from "styled-components";
import Regist from "./Regist";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { useEffect, useState } from "react";

export default function UserBox() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserStyled>
      <Regist users={users} setUsers={setUsers} />
      <LogIn users={users} setUser={setUser} />
      <LogOut user={user} setUser={setUser} />
    </UserStyled>
  );
}

const UserStyled = styled.div``;

// const NumPad = styled.div`
//   width: 100px;
//   height: 100px;
//   font-size: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   border-radius: 10px;
//   margin: 20px;
//   cursor: pointer;
//   div {
//     width: 10px;
//     height: 10px;
//     background-color: red;
//     &:nth-child(2) {
//       background-color: blue;
//     }
//   }
//   &:nth-child(2n) {
//     background-color: lightgray;
//   }
// `;

// & : 현재 선택자를 가리킨다
