import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>
        Body.jsx
        <div style={{ margin: "20px" }}>
          <Link className="menu" to="/">
            Home
          </Link>
          <Link className="menu" to="menu1">
            ToDoList
          </Link>
          <Link className="menu" to="menu2">
            Menu2
          </Link>
          <Link className="menu" to="menu3">
            Menu3
          </Link>
          <Link className="menu" to="log">
            Login Menu
          </Link>
        </div>
      </h2>
    </div>
  );
}
