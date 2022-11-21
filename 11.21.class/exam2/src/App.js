import TestFunc from "./components/Test";
import styled from "styled-components";
import AddTestFunc from "./components/AddTest";

function App() {
  return (
    <AppBox>
      <TestFunc />
      <AddTestFunc />
    </AppBox>
  );
}

const AppBox = styled.div``;

export default App;
