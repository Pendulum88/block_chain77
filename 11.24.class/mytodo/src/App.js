import styled from "styled-components";
import Header from "./components/Header";
import Section from "./components/Section";
import { TodoBtn } from "./components/Section/setting";
import { Link } from "react-router-dom";

function App() {
  return (
    <AppBox>
      <Header />
      <Section />
      <BtnBox className="btn-container">
        <Link to={"sign"}>
          <TodoBtn>Log In</TodoBtn>
        </Link>
        <TodoBtn>Log Out</TodoBtn>
        <Link to={"add"}>
          <TodoBtn>Add List</TodoBtn>
        </Link>
      </BtnBox>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  margin: 30px;
  padding: 50px;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  max-width: 1300px;
  margin: auto;
  &.test {
    background-color: lightgray;
    height: 100px;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;

const BtnBox = styled.div`
  position: absolute;
  top: 60px;
  right: 40px;

  & * {
    cursor: pointer;
    margin: 10px;
  }
`;

// const Asd = ({ children }) => {
//   return (
//     <div className="asd">
//       <div className="qwe">{children}</div>
//     </div>
//   );
// };
