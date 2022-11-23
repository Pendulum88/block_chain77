import { useState } from "react";

export default function ToDoList({ isOnline }) {
  const [temp, setTemp] = useState("");
  const [list, setList] = useState([]);

  const addTodoList = () => {
    if (!temp) return;
    setList((prev) => {
      return [...prev, temp];
    });
  };

  const todoInput = (e) => {
    setTemp(e.target.value);
  };

  const removeTodoList = () => {};

  return (
    <div>
      <h2>ToDoList.jsx</h2>
      <div>
        <form
          className="todoForm"
          onSubmit={(e) => {
            e.preventDefault();
            addTodoList();
            setTemp("");
          }}
        >
          <input
            type="text"
            spellCheck={false}
            autoComplete="off"
            onInput={todoInput}
            value={temp}
          />
          <button>ADD</button>
        </form>
        <div>
          {list.map((item, index) => {
            return (
              <div className="listItem" key={index}>
                {item}
                <button onClick={removeTodoList}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
