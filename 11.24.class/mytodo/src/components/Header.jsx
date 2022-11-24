import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBox>
      <h1>ToDo List</h1>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  border-bottom: 2px solid lightgrey;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  & h1 {
    font-size: 42px;
  }
`;
