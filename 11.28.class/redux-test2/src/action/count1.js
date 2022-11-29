export const COUNT1 = {
  PLUS: "count1/plus123",
  MINUS: "count1/minus",
};
// COUNT1 : 대문자 -> 수정하지 않고 가져다 쓰기만 할 변수(상수)
// 파일 이렇게 빼놓으면 장점 : 경로 여기서 한번만 바꾸면 전체적으로 다 바뀜(개꿀)
// 함수 수정할때(예를들어 plus쪽에다 기능 추가할때 여기서만 수정하면됨)
// 유지보수가 편해진다

const plus = (input) => ({
  type: COUNT1.PLUS,
  payload: { input },
});

const minus = (input) => ({
  type: COUNT1.MINUS,
  payload: { input },
});

export const actions = { plus, minus };
