console.log("이것은 개발자 도구 콘솔창에 로그를 남기는것이다");
console.log("favicon 경고 나오는건 무시해라 (지금은)");

console.log('1 === "1" :' + (1 === "1"));

/*
조건문
if && else if && else
*/

if (1 < 2) {
  // 만약에 ()괄호 안이 참이면 {}괄호안의 코드를 실행한다
  console.log("1 < 2는 true다");
} // 만약에 ()괄호 안이 거짓이면 {}괄호안의 코드를 실행한다
else {
  console.log("1 > 2는 flase다");
}

// if에서 조건이 참이여서 해당 코드가 실행되면 else if, else등 아래의 코드를 건너뛴다
// 위의 if, else if의 조건이 모두 충족되지 않았을때 실행되는 코드가 else이다

if (1 < 2) console.log("1 < 2는 true다"); // 위와 같은코드
else console.log("1 > 2는 false다"); // 한줄의 코드면 {}괄호가 없어도 된다

// if (1<2) console.log("1<2는 true다");
// console.log("asdf");
// else console.log("1>2는 false다");
// if와 else if, else는 함께 붙어다녀야 한다

// else if : else와 if가 합쳐진것
// if 참 else if 참일때에도 if만 실행
if (1 > 2) {
  console.log("여기 조건이 거짓이면서");
} else if (2 < 3) {
  console.log("여기 조건이 참이면 else if의 코드가 실행된다");
} else {
  console.log("위의 if, else if의 모든 조건이 거짓일때 else의 코드가 실행된다");
}

console.log(1 < 2 ? "이건 참이야" : "이건 거짓이야");
// 조건 ? 참일때 : 거짓일때
// 쉽게말해 if문을 한줄에 넣은것이다 (if : else)
// 이것을 삼항연산자

let test1 = 10;
let test2 = 7;

if (test1 < test2) {
  console.log("꼴은 좀 보자");
} else {
  console.log("꼴도 보기 싫다");
}

const inputData = prompt("넣고 싶은 값을 입력해 보세요");
// const inputData = +prompt("넣고 싶은 값을 입력해 보세요");
// const inputData = (prompt("넣고 싶은 값을 입력해 보세요"));
// const inputData = (parseInt("넣고 싶은 값을 입력해 보세요"));
// const inputData = (parseFloat("넣고 싶은 값을 입력해 보세요")); // 숫자로의 형 변환
// prompt 사실상 거의 안씀
// switch는 여러 조건을 한번에 확인한다
switch (inputData) {
  // 스위치의 ()괄호 안에 있는 변수의 값을 확인한다
  case "1": // "1"이 아니라 1이면 코드가 실행이 안된다 프롬포트로 받은값은 전부 스트링으로 들어온다
    // 케이스는 ()괄호 안에 있는 변수의 값이 같은지 확인한다
    console.log("1을 넣었어");
    break; // <<< 해당 브레이크를 지우면 1 입력시 케이스 1과 2가 같이 실행된다
  // 이걸 이용해서 조건문을 좀더 세밀하게 컨트롤할수 있다
  // 브레이크는 해당 명령어가 있는 지점에서 코드를 정지한다
  // 반복문에서 다시하고, 더 확실하게 알수있다
  case "2":
    console.log("2을 넣었어");
    break;
  case "3":
    console.log("3을 넣었어");
    break;
  case "4":
    console.log("4을 넣었어");
    break;
  default:
    //if else에서 else와 같은놈이다
    //즉 케이스에서 걸리지 않을때 실행되는 코드이다
    console.log("1~4까지만 넣어라");
  //마지막이라서 브레이크 없어도 됨
}
