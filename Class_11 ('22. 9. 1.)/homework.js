let firstNum = 0;
let secondNum = 0;
let resultf12 = 0;

function f1() {
  ++firstNum;
  console.log(`현재 firstNum의 값은 : ${firstNum}입니다.`);
}

function f2() {
  ++secondNum;
  console.log(`현재 secondNum의 값은 : ${secondNum}입니다.`);
}

function sumf12() {
  resultf12 = firstNum + secondNum;
  console.log(`현재 firstNum과 secondNum의 합은 : ${resultf12}입니다.`);
}

function f1m() {
  --firstNum;
  console.log(`현재 firstNum의 값은 : ${firstNum}입니다.`);
}

function f2m() {
  --secondNum;
  console.log(`현재 secondNum의 값은 : ${secondNum}입니다.`);
}

// function addFN() {

// }

// const addSN = function() {

// }

// const sum = () => {

// }
//이런 형식으로도 가능하다

// function examaddFN(firstNum) {
//     매개변수는 위에 변수와 다른 변수다
//     1번줄의 퍼스트넘버와 다른놈이다
//     firstNum++;
// }
// examaddFN(); 함수 호출하면 언디파인드뜬다, 매개변수가 들어가질 않아서 그렇다
