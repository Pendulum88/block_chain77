import { useState } from "react";

export default function ({ test1, children }) {
  const [count1, setCount1] = useState(0);
  // props 나중에 다시 설명
  //   props는 상위 컴포넌트에서 설정된 값이다
  // props.children은 상위 컴포넌트에서 해당 컴포넌트의 자식으로 설정된 값이다
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div style={{ fontSize: "30px", backgroundColor: "red" }}>
        {test1}
        {children}
      </div>
      <ul>
        {tempArr.map((item, index) => {
          return <li key={`test-${index}`}>{item}</li>;
        })}
      </ul>
      <button
        onClick={function () {
          console.log(count1);
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button>
    </>
    // 빈 태그가 가능하다
  );
  //   return <div>{test}</div><button></button>;
  // HTML 태그의 형제 방식으로 return 하지 못한다 << 하나로 구조를 묶어서 return해야한다
  // HTML 문법 내에 Javascript 변수 / 함수 등등을 사용할 경우 {}로 묶어준다
}

// Component : 여러개의 함수들을 모아 하나의 특정한 기능을 수행할수 있도록 구성한 작은 기능적 단위
// React는 View를 위한 라이브러리 즉 프론트엔드에 보여주기위한 라이브러리
// 그럼 리액트의 주된기능은 ? 랜더링이 주된 기능이다. div등등의 Element 구조로 많이 나뉘어진다
