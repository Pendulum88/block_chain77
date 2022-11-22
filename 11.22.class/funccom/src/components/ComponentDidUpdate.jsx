import { useEffect } from "react";

function ComponentDidUpdate() {
  useEffect(() => {
    // DidUpdate
    console.log("이거랑");
  });

  console.log("저거랑");

  // 이거랑 저거랑 차이가 없다

  return <div></div>;
}

export default ComponentDidUpdate;
