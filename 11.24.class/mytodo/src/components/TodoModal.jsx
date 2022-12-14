import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { STATUSLIST, STATUS, TodoBtn } from "./Section/setting";

export default function TodoModal({ setList, func }) {
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const [taskName, setTaskName] = useState(item ? item.taskName : "");
  const [status, setStatus] = useState(item ? item.status : STATUS.ToDo);

  return (
    <TodoModalBox>
      <TodoModalInnerBox>
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            spellCheck={false}
            onInput={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div>
          {STATUSLIST.map((item, index) => (
            <TodoBtn
              className={
                STATUSLIST[index].toLowerCase().replace(" ", "-") +
                (status === index ? " on" : "")
              }
              onClick={() => {
                setStatus(index);
              }}
              key={`TodoBtn-${index}`}
            >
              {item}
            </TodoBtn>
          ))}
        </div>
        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (func === "Add") {
                  setList((prev) => [...prev, { taskName, status }]);
                } else if (func === "Edit") {
                  setList((prev) => {
                    const before = prev.slice(0, index);
                    const after = prev.slice(index + 1);
                    return [...before, { taskName, status }, ...after];
                  });
                }
              }}
            >
              {func}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Cancel</TodoBtn>
          </Link>
        </div>
      </TodoModalInnerBox>
    </TodoModalBox>
  );
}

const TodoModalBox = styled.div`
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

const TodoModalInnerBox = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  width: 50%;

  input {
    width: 100%;
    padding: 5px 10px;
  }

  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;

    &:last-child {
      justify-content: space-between;
    }
  }
`;
