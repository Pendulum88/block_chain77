setTimeout(() => {
  // 매개변수함수에 원하는 코드를 입력한다
  // 해당 코드는 아래에 두번째 매개변수(시간/ms)후에 실행된다
  console.log("setTimeout");
}, 2000);
// 즉, 일정시간 후에 한번 실행한다
// ms는 1/1000초, 즉 1000ms = 1s

// setInterval(() => {
//   // 매개변수함수에 원하는 코드를 입력한다
//   // 해당 코드는 아래에 두번째 매개변수(시간/ms)마다 실행된다
//   console.log("setInterval");
// }, 3000);
// 즉, 일정시간 마다 계속 실행한다

// 셋인터벌을 끄고싶으면 ?

const interval = setInterval(() => {
  console.log("setInterval");
}, 3000);

clearInterval(interval);
// 무한으로 반복되는 setInterval을 종료한다
