import Article from "./Article";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TodoModal from "../TodoModal";
import SignModal from "../SignModal";

export default function Section() {
  const [list, setList] = useState([
    { taskName: "asdasd", status: 0 },
    { taskName: "한글?", status: 1 },
    { taskName: "한123", status: 2 },
    { taskName: "sdfgdfsgdgsdfgsg", status: 1 },
    { taskName: "ㅎㅇ?", status: 0 },
  ]);

  const [userList, setUserList] = useState([{ id: "admin", pw: "1234" }]);

  return (
    <SectionBox>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <Article
            key={`Item-${index}`}
            item={item}
            index={index}
            setList={setList}
          />
        ))}
      </tbody>
      <Footer></Footer>
      <Routes>
        <Route
          path={"add"}
          element={<TodoModal setList={setList} func={"Add"} />}
        />
        <Route
          path={"edit"}
          element={<TodoModal setList={setList} func={"Edit"} />}
        />
        <Route
          path={"sign"}
          element={<SignModal userList={userList} setUserList={setUserList} />}
        />
      </Routes>
    </SectionBox>
  );
}

const SectionBox = styled.table`
  margin: 20px;
  // border-left: 1px solid lightgrey;
  // border-right: 1px solid lightgrey;
  border: 1px solid lightgrey;
  width: 100%;
  font-size: 26px;
  border-collapse: collapse;
  th {
    font-size: 30px;
    height: 70px;
    border-bottom: 2px solid black;
  }

  th:nth-child(2) {
    width: 70%;
  }
`;
