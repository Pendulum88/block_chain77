import { useCallback, useEffect, useMemo, useState, useRef } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState({
    name: "asdf",
    ext: "png",
    type: "image/png",
  });

  const ref = useRef();

  useEffect(() => {
    console.log("이펙트 테스트시작");
  }, []);

  useEffect(() => {
    console.log("숫자가 " + num + "으로 변경됨");
    setName(`${num}`);
    setFile({ ...file, name: `${num}` });
  }, [num]);

  useEffect(() => {
    console.log("이름이 " + name + "으로 변경됨");
  }, [name]);

  //   const increaseNum = () => {
  //     setNum(num + 1);
  //   };
  const tempNum = num + 10;
  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);

  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  // 가입 => ID, PW, 이름, 나이, 성별, 지역
  // input에 대한 함수를 만들어서 연결하겠지 ?
  // ID, PW, 이름, 나이, 성별, 지역 << 각각은 state가 된다
  // ID가 바뀐다고 칠때 나머지 state에 대한 함수는 실행되는가?
  // 나머지 함수들도 전부 다시 선언된다
  // 그걸막기 위해 useCallBack을 사용한다
  // 최적화를 위해 사용한다

  return (
    <div>
      <button onClick={increaseCallback}>{memoNum}</button>
      <div
        ref={ref}
        onClick={() => {
          console.log(ref.current);
        }}
      >
        {name}
      </div>
      <div>{tempNum}</div>
      <div>{file.name + "." + file.ext}</div>
    </div>
  );
}

export default EffectTest;
