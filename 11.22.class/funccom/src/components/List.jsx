import { useState } from "react";
import styled from "styled-components";

export default function List() {
  const [listArr, setListArr] = useState([
    { text: "text1", user: "user1" },
    { text: "text2", user: "user2" },
    { text: "text3", user: "user3" },
    { text: "text4", user: "user4" },
    { text: "text5", user: "user5" },
    { text: "text6", user: "user6" },
  ]);

  return (
    <ListBox>
      {listArr.map((elem, idx) => {
        return (
          <p key={idx}>
            <div key={`${idx}-1`}> {elem.text}</div>
            <div key={`${idx}-2`}> {elem.user} </div>
          </p>
        );
      })}
    </ListBox>
  );
}

const ListBox = styled.div``;
