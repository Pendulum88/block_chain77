const divs = document.getElementsByTagName("div");
// const, let, var 명령어로 이름짓는것이 변수이다
// 변수의 이름을 정하는것을 선언이라고 한다
// 변수의 데이터 값을 저장하는것을 정의라고 한다
// 선언과 정의를 한번에 하는것을 초기화라고 한다
// const는 재정의가 불가능하기땜누에 선언과 동시에 정의를 해야한다
// 재정의 불가능한 변수 div라는 TagName(Tag)를 HTML 구조(DOM, document) 내에서 검색하여 가져와서 정의한다
// 즉,상수 divs에 div 엘리먼트들을 초기화한다

[...divs].forEach((elem) => {
  // ...(스프레드, 전개연산자)는 배열 등 데이터의 모음을 풀어서 반환
  // 보통 [...***]을 사용하여 유사 배열 ***을 배열로 변환한다 <<해당방법 사용시 직전 코드 마지막에 ;(세미콜론) 없으면 한줄로 인식된다
  // forEach는 배열의 각 아이템을 매개변수함수에 매개변수함수로 전달하여 함수를 실행한다
  // elem은 내가 자주 사용하는 element의 약어
  elem.onclick = (e) => {
    // onclick은 클릭시 실행되는 이벤트 함수이다
    console.log(elem.classList.toString());
    // classList는 엘리먼트의 class(클래스)를 관리하는 프로퍼티 객체이다
    console.log("버블링");
    // coonsole은 개발자도구에 출ㄹ력하기위한 객체이다
    // console.log는 개발자 도구에 전달된 매개변수를 다순 출력한다
  };
});
// 이상 위의 코드는 버블링을 볼수있다

const tempArr = [1, 2, 3, 4, 5];
const [aa, bb, ...cc] = tempArr;
console.log(aa);
console.log(bb);
console.log(cc);

const tempObj = {
  aaa: 11,
  bbb: 22,
  ccc: 33,
};

const { aaa, bbb, ccc } = tempObj;
console.log(aaa);
console.log(bbb);
console.log(ccc);
