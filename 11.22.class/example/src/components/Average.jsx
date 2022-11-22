import React, { useState, useMemo } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const getAverage = useMemo(() => {
    console.log("평균값 계산 중...");
    if (list.length === 0) return 0;
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
  }, [list]); //list값이 업데이트 될때만 실행

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage}
        {/* useMemo는 값을 반환 */}
      </div>
    </div>
  );
};

export default Average;
