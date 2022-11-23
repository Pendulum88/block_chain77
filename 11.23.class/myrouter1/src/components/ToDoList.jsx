export default function ToDoList({ isOnline }) {
  const addTodoList = () => {
    console.log();
  };

  const todoInput = () => {
    console.log();
  };

  return (
    <div>
      <h2>ToDoList.jsx</h2>
      <div>
        <form
          className="todoForm"
          onSubmit={(e) => {
            e.preventDefault();
            addTodoList();
          }}
        >
          <input
            type="text"
            spellCheck={false}
            autoComplete="off"
            onInput={todoInput}
          />
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
}
