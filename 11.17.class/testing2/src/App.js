import "./App.css";
import TempTable from "./components/TempTable";

const tempArr = [
  { name: "우석", age: 17, number: "1", work: "Front" },
  { name: "선주", age: 1, number: "2", work: "Front" },
  { name: "성진", age: 45, number: "3", work: "Back" },
  { name: "영준", age: 2, number: "4", work: "Back" },
  { name: "재일", age: 10, number: "5", work: "Front" },
  { name: "정규", age: 3, number: "6", work: "Back" },
];

const headData = {
  name: "이름",
  age: "나이",
  number: "번호",
  work: "필살기",
};
const tempHead = ["name", "age", "number", "work"];

function App() {
  return (
    <div className="App">
      {/* <TempTable a={tempArr} b={headData} c={tempHead} /> */}
      <TempTable tempArr={tempArr} headData={headData} tempHead={tempHead} />
    </div>
  );
}

export default App;
