import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
import Additional from "./components/Additional";

function App() {
  return (
    <div className="App">
      <ClassComp
        text={"testing Classcomp"}
        func={() => {
          console.log("testing ClassCom");
        }}
      />
      <FuncComp
        text={"testing Funccomp"}
        func={() => {
          console.log("testing FuncCom");
        }}
      />
      <Additional />
    </div>
  );
}

export default App;
