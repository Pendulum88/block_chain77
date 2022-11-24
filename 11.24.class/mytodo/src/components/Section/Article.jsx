import styled from "styled-components";
import { TodoBtn, STATUSLIST } from "./setting";
import { Link } from "react-router-dom";
import penImg from "./pen-solid.svg";
import trashImg from "./trash-solid.svg";

export default function Article({ item, index, setList }) {
  return (
    <ItemTr>
      <td>{index + 1}</td>
      <td>{item.taskName}</td>
      <td>
        <TodoBtn
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
          style={{ cursor: "default" }}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </td>
      <td>
        <Link to={"/edit"} state={{ index, item }}>
          <TodoBtn className="sky">
            <img
              src={penImg}
              alt="pen"
              style={{
                filter:
                  "invert(80%) sepia(65%) saturate(3664%) hue-rotate(147deg) brightness(93%) contrast(102%)",
              }}
            />
          </TodoBtn>
        </Link>
      </td>
      <td>
        <TodoBtn
          className="todo"
          onClick={() => {
            setList((prev) => {
              const before = prev.slice(0, index);
              const after = prev.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img
            src={trashImg}
            alt="trash"
            style={{
              filter:
                "invert(53%) sepia(5%) saturate(17%) hue-rotate(358deg) brightness(94%) contrast(88%)",
            }}
          />
        </TodoBtn>
      </td>
    </ItemTr>
  );
}

const ItemTr = styled.tr`
  text-align: center;
  height: 60px;
  td {
    border-bottom: 1px solid gray;
  }

  img {
    width: 25px;
  }
`;
