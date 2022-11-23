import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="login">Log in</Link> |{" "}
      <Link to="log/in">Log in 2</Link> | <Link to="log/out">Log out 2</Link>
      {/* Link : a태그 대신 사용한다 */}
      {/* a 태그를 사용하는 경우 : 외부로 나갈때 */}
    </div>
  );
}
