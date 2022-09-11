// 기존의 odd, even 클릭과 달리 oddeven에서 호출받으며
// 전달받은 매개변수를 사용하기 위해 count를 매개변수로 선언한다
// 괄호안의 count << 얘는 스트링 '123'이 들어가게 된다
function odd(count) {
  // odd클릭시 count는 입력된 값이 없기때문에 undefined가 된다
  // oddeven 함수에서 호출받았을 시에는 count에 oddeven함수에서
  // 전달한 매개변수가 count에 정의된다 : '123' >>> true
  if (!count) count = prompt("몇까지 찍을까?");
  // undefined는 boolean값으로 따졌을때 false가 되기 때문에
  // 매개변수가 없는지 확인하여 입력받을수 있도록 처리한다
  count = parseInt(count);
  // oddeven 함수에서 전달받은 count는 문자열(string)이기 때문에
  // parseInt 함수를 호출하여 정수로 변환해준다
  for (let i = 0; i < count; i++) {
    console.log("i :", i);
    if (i % 2) console.log(i);
    // i % 2 : 홀수일때 1, 짝수일때 0 => 홀수를 판단할수 있다 1true 0false
    // 첫번째 방법 : 이 코드는 아래 코드들보다 안좋다
    // 이 코드는 예를들어 10을 넣었을시 10번을 반복한다
    // 아래의 코드들은 마찬가지의 예로 10을 넣으면 5번을 반복한다
    // 반복의 횟수 차이가 입력된 수에 따라 기하급수적으로 늘어날 수 있다
  }
  console.log("끝");

  for (let i = 0; i < count / 2; i++) {
    console.log("i :", i);
    console.log(i * 2 + 1);
  }
  console.log("끝");

  // 두번째 방법

  for (let i = 1; i < count + 1; i += 2) {
    console.log("i :", i);
    console.log(i);
  }
  console.log("끝");

  // 세번째 방법
}

const even = function () {
  if (!count) count = prompt("몇까지 찍을까?");
  count = parseInt(count);
  for (let i = 0; i < count; i++) {
    if (!(i % 2)) console.log(i);
  }

  for (i = 0; i < (count + 1) / 2; i++) {
    console.log(i * 2);
  }

  for (let i = 0; i < count + 1; i += 2) {
    console.log(i);
  }
};

const oddeven = () => {
  const count = prompt(
    "몇까지 찍을까? 그리고 홀이야? 짝이야?\n형식은 n&홀짝 << 이렇게하면돼"
    // 123&홀 형식의 문자열을 받는다
    // split 메서드를 호출해서 &를 기준으로 분리한다
    // 문자열 아이템을 가진 배열을 반환받는다
    // count.split("&")
    // -> ['123', '홀']
  );

  const number = count.split("&")[0]; // '123'
  const isOdd = count.split("&")[1]; // '홀'
  // 숫자와 홀짝이 나누어졌다

  if (isOdd == "홀") {
    // isOdd가 홀인지 확인하여 홀이면 odd함수를 호출한다
    // 함수를 호출하면서 받았던 숫자(number)를 매개변수로 전달한다
    odd(number);
    // 매개변수로 입력된 숫자를 전달한다
  } else {
    even(number);
  }
};
