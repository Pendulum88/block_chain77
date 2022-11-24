import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { TodoBtn } from "../setting";
import List from "./List";
import TodoModal from "./TodoModal";

export default function Todo() {
  const [list, setList] = useState([
    { taskName: "asdasd", status: 0 },
    { taskName: "한글?", status: 1 },
    { taskName: "한123", status: 2 },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
      <AddBtnBox>
        <Link to={"add"}>
          <TodoBtn className="sky">Add Task</TodoBtn>
        </Link>
      </AddBtnBox>
      <List list={list} setList={setList} />
      <Routes>
        <Route
          path={"add"}
          element={<TodoModal setList={setList} func={"Add"} />}
        />
        <Route
          path={"edit"}
          element={<TodoModal setList={setList} func={"Edit"} />}
        />
      </Routes>
    </div>
  );
}

const AddBtnBox = styled.div`
  text-align: right;
`;
