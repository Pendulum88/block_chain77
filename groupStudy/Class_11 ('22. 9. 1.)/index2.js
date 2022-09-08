// 함수란 기능을 실행하는 코드에 이름을 지은 것이다
// 변수가 데이터에 이름을 짓는다
// 함수는 실행하는 코드에다가 이름을 짓는다

function test() {
  // function 이름 () {}
  // () 괄호 안에 실행할 코드가 들어갑니다
  // {} 괄호 안에는 함수를 사용할 때 함수에게 줄 정보를 입력합니다 (매개변수라고 한다)
  console.log("넣고싶은걸 넣어봐");
}

function test1() {
  console.log(`함수를 초기화 합니다`);
  console.log("해당 형식으로 함수를 초기화 하는 방식을 함수 선언문이라고 한다");
  // 즉,  function 이름 () {} <<  이게 함수 선언문이다
}

let test2 = function () {
  console.log(`함수를 초기화 합니다`);
  console.log("해당 형식으로 함수를 초기화 하는 방식을 함수 표현식이라고 한다");
  // const or let 이름 = function () {} << 함수 표현식이다
};

const test3 = () => {
  console.log(`함수를 초기화 합니다`);
  console.log("해당 형식으로 함수를 초기화 하는 방식을 화살표 함수라고 한다");
  // const or let 이름 () => {} << 화살표 함수
};

// 함수도 변수처럼 선언해놓고 끌어와서 쓰는애다

test1();
//12번 줄로 이동 >> 코드 쭉쭉 2줄 읽음 >> 다했다 >> 다시 일로 옴
test2();
test3();
//함수를 호출합니다. 즉 함수에 저장된 코드를 실행합니다

// 매개변수란, 함수에게 데이터를 전달한다
// 함수가 사용해야 할 데이터를 호출할때 전해준다

function addFunc(firstNum, secondNum) {
  // 초기화만 시켜놓고 나중에 호출하겠다
  // firstNum, secondNum : 매개변수
  console.log(firstNum + secondNum);
}

addFunc(2, 3);
// addFunc를 호출한다, 매개변수는 2콤마 3이다
// 2가 firstNum 이고 3이 secondNum이다

function addFunc2(firstNum, secondNum) {
  return firstNum + secondNum;
  // return :  되돌리다, 정식명칭으로는 반환값
  // addFunc2가 끝났을때 함수가 돌려주는, 반환해주는 값이다
}
let answer = addFunc2(6, 13);
// addFunc2 함수는 리턴이 있기 때문에 answer 변수에 addFunc2의 리턴값이 정의된다
// 현재 19가 정의된다
console.log(answer);

answer = addFunc(56, 3); // 리턴값이 없어서 addFunc(56, 3)의 리턴값이 정의되지 않았다
console.log(answer);
// addFunc 함수는 리턴이 없기 때문에 answer 변수에 '정의되지 않았다'를 뜻하는 언디파인드가 정의된다

console.log(Math.random()); // 0 ~ 1 사이 무작위 소수를 정의해서 리턴함
console.log(console.log("asd"));
//제일 바깥에있는 콘솔로그를 실행했는데
//그안에 두번째 콘솔로그가 있었다
//두번째 콘솔로그로 가보니 asd를 출력하라고 하더라 >> 출력함
//그다음 제일바깥 콘솔로그가 출력을 해야하는데 리턴값이 없어서 언디파인드 뜸

function sel(num) {
  console.log("나와랏");
  switch (num) {
    case 1:
      return "검";
      console.log("검을 선택했어요"); // 출력되지 않는다 리턴에서 끝나서
      break;
    case 2:
      return "활";
      break;
    // break 회색인 이유가 있다. 함수는 리턴에서 끝난다.
    case 3:
      return "방패";
      break;
    case 4:
      return "도끼";
      break;
    default:
      2;
      return false;
  }
  console.log("검을 선택했어요"); // 디폴트로 다 잡아버려서 끝남(리턴)
}

let playerSel;
//플레이어 선택을 받는다, 처음에 선언만 했기 때문에 언디파인드 상태이다
do {
  playerSel = prompt("무기를 선택하시오");
  // 플레이어의 선택을 받는다
  playerSel = sel(parseInt(playerSel));
  // sel 함수를 호출하며 위에서 받은 플레이어의 선택을 정수로 바꾸어 전달한다
  // sel 은 받은 정수(매개변수, 플레이어가 선택한 수)를 사용해서 리턴값을 반환한다
  // sel 이 반환한 값을 playerSel에 다시 정의한다 (재정의)
} while (!playerSel);
// playerSel false(0)이면 계속 반복한다

console.log(playerSel);
