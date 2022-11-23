import { Routes, Route } from "react-router-dom";
import In from "./In";
import Out from "./Out";
import { Link } from "react-router-dom";

export default function Log({ setOnline, isOnline }) {
  const connecting = () => {
    setOnline(true);
  };

  const disConnecting = () => {
    setOnline(false);
  };

  return (
    <div>
      <h2>Set your connection</h2>

      <Link onClick={connecting} className="menu" to="in">
        Log-In
      </Link>
      <Link onClick={disConnecting} className="menu" to="out">
        Log-Out
      </Link>

      <Routes>
        <Route path="in" element={<In />} />
        <Route path="out" element={<Out />} />
      </Routes>
    </div>
  );
}
