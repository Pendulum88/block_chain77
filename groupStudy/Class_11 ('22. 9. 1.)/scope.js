// scope라는것이 있습니다
// 스코프는 {} 괄호로 묶인 것입니다
// {} 괄호를 스코프라고 부릅니다
// 그래서 scope가 뭡니까?
// 지역을 나타냅니다
// 지역이라는건 일종의 부분이라고 생각

let a = 0; // 모든 곳에서 사용할수 있는 변수를 전역 변수
console.log(a);
{
  a = 2;
  let b = 1; // 안에서 선언된 변수를 지역 변수라고한다
  //지역 변수는 해당 스코프 내에서만 사용 가능하다
  console.log(a + b);
  console.log(a);
}
// {} 묶인 곳을 지역 스코프
console.log(a); // 2로 출력됨, 11번줄 let a로 바꾸면 0으로 나온다, 둘이 다른걸로 침
// console.log(b);
// 바깥은 전역 스코프라고 부릅니다

function addA(a) {
  // 여기의 a는 8번에 선언된 a와는 다르다
  a++;
  console.log(a);
}

let obj = {
  // 여기의 a도 다른 a다
  a: 1,
  func1: function () {
    console.log("돼");
  },
  func: (fn, sn) => {
    return fn + sn;
  },
};

console.log(obj.a);
obj.func1();
console.log(obj.func(1, 2));
//객체 안에 포함된 함수는 메서드라고 부릅니다
//console 객체 안에 log 메서드
//Math 객체 안의 random 메서드
//obj 객체 안의 func1, func 메서드

alert("경고 !");

// 지역변수, 지역변수, 매개변수
