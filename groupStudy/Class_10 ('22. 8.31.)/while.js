let i = 0;
// 반복할때 i j k 이런식으로 변수를 선언한다
// i : index 약자, (참고 : git은 아얘 다르게 index라는 용어를 사용하고있다)
// array[5] = 배열의 6번째 아이템을 가져온다 << 여기서 5가 index이다

while (i < 10) {
  // while은 반복문의 명령어중 하나다
  // () 괄호 안의 조건이 충족되면 실행한다
  // {} 괄호 안의 코드를 실행한후 ()괄호 안의 조건을 다시 확인한다
  console.log("i = " + ++i); // ++i , 1 ~ 10
}

// while (true) console.log(new Date());
// 브라우저 멈추고 싶으면 위 코드를 실행하시오

let j = 0;
while (j < 10) {
  console.log("j = " + j++); // j++ , 0 ~ 9
  break; // 이게 있으면 그냥 0 뜨고 종료
}

while (true) {
  console.log(new Date());
  if (--i < 1) break;
}
// 브레이크는 코드를 멈춘다, 즉 반복을 멈추고 다음코드를 실행한다

let k = 0;

do {
  // do는 while 조건을 확인하기 전에 실행한다
  console.log("k = " + ++k);
  // k를 출력하고 조건을 확인한다
} while (k < 10);

// do를 적는것과 안적는것의 차이는 무엇인가 ?
console.log(i);
while (i !== 0) {
  // i !== 0  -> i는 0이 아닐떄가 참
  console.log("asdf");
}
do {
  console.log("asdf2");
} while (i !== 0);
// do는 먼저 실행하고 와일로 간다
