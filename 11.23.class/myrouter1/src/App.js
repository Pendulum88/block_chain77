import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
import Footer from "./components/Footer";
import Body from "./components/Body";
import In from "./components/Log/In";
import Out from "./components/Log/Out";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [isOnline, setOnline] = useState(false);

  return (
    <div className="App">
      <Header isOnline={isOnline} />
      <Body />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="menu1" element={<ToDoList isOnline={isOnline} />} />
        <Route path="menu2" element={<Menu2 />} />
        <Route path="menu3" element={<Menu3 />} />
        <Route
          path="log/*"
          element={<Log setOnline={setOnline} isOnline={isOnline} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
