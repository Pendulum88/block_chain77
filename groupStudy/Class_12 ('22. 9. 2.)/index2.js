// 객체가 뭐냐 ? {}로 묶인 키와 값으로 이루어진 데이터
//

const obj = {
  // obj : 객체
  a: 1,
  // a가 키고 1이 값이다
  // 키의 정식 명칭은 프로퍼티 이다

  b: function () {
    console.log("b");
    // b와 c는 객체 안의 함수 => 메서드라고 한다
  },

  c: () => {
    return "c";
  },
};

const arr = ["정재훈", "염예나", "김성진", "최원겸", "김선주"];
// 배열도 객체다
arr.push();
// push 메서드를 호출
console.log(arr.length);
// arr.length : 배열안의 아이템 개수
// 배열의 길이를 나타내는 프로퍼티
// arr.
// 컨트롤 스페이스 -> 보라색 메서드(함수) 하늘색 프로퍼티(키)

let tempreturn = arr.indexOf("최원겸");
// 배열에 있는 아이템을 찾아서 그 위치를 알려준다. 즉 위치를 리턴해준다
// 없으면 -1, 첫번째에 있으면 0
console.log(tempreturn);

tempreturn = arr.find(function (item) {
  console.log(item);
  return item == "김성진";
});

console.log(tempreturn);

// find는 검색할때 사용할 코드를 넣어준다
// 코드의 반환값이 true가 나오는 함수를 넣어준다
// find의 반환값은 item의 순서가 아닌 아이템 그자체다
// find 메서드는 매개변수로 함수를 전달한다
// 매개변수에 해당하는 함수의 매개변수(item) 은 배열의 각 아이템을 적용한다
// find함수는 배열의 각 아이템을 순서대로 매개변수함수에 전달하여 리턴값을 확인한다
// 매개변수함수에게서 받은 리턴값이 true면 해당 아이템을 리턴하고 find 함수를 종료한다

tempreturn = arr.find((item) => {
  //find는 매개변수함수가 true인 첫번째 아이템을 리턴해준다
  return item[0] === "김";
});

console.log(tempreturn);

tempreturn = arr.findIndex((item) => {
  //findindex는 매개변수함수가 true인 첫번째 아이템이 배열내에서 몇번째 아이템인지 리턴해준다
  return item[0] === "김";
});

console.log(tempreturn);

tempreturn = arr.filter((item) => {
  //filter는 매개변수함수가 true인 아이템들을 배열로 리턴해준다
  return item[0] === "김";
});

console.log(tempreturn);

tempreturn = arr.map((item) => {
  // map은 매개변수함수의 return 값들을 배열로 리턴해준다
  return item + "오늘 출석함";
  return item[0] === "김";
});

console.log(tempreturn);

const tempArr = [
  { name: "정재훈", age: 30, area: "대치동" },
  { name: "염예나", age: 22, area: "하남" },
  { name: "김성진", age: 27, area: "성남" },
];
console.log(tempArr.find((item) => item.area === "하남"));
console.log(tempArr.findIndex((item) => item.area === "하남"));
console.log(tempArr.filter((item) => item.area === "하남"));
console.log(tempArr.map((item) => item.area === "하남"));
// 내용 바꿔보기

arr.forEach((item) => console.log("forEach : " + item));
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 화살표함수, 위아래 동일하다
arr.forEach(function (item) {
  console.log("forEach : " + item);
});
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// forEach 메서드는 아이템을 하나씩 함수에게 매개변수로 전달해 함수를 호출한다
// 위의 for문과 같다

arr.reverse();
// 순서 거꾸로 (배열 자체를 거꾸로)

console.log(arr);

console.log(arr.join(" / "));
// 배열을 문자열로 바꿔줍니다
// 매개변수로 아이템 사이에 넣을 문자를 입력합니다
console.log(arr.toString());
// 문자열로 바꿈(거의 모든 객체에 포함되어있음)
console.log((16).toString(10));
//16을 10진수로 표현

console.log(arr.slice(1, 3));
// 순서거꾸로 된상태에서 1부터 3까지
// (0)김선주(1)최원겸(2)김성진(3)염예나(4)정재훈(5)
console.log(arr.slice(1, -1));
// -1은 뒤에서부터 읽는다, -1 : 맨끝(4)
// 즉 5가 (0)이다
console.log(arr.slice(-1, 1));
// 순서가 꼬이면 안된다

// console.log(arr.splice(1, 3));
// 1콤마 4가 짤림
// 1부터 3개를 짜른다, 단 arr을 수정해버린다

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return 1;
    else if (curr > next) return -1;
    else return 0;
  })
);

// sort메서드는 정렬을 해주는 메서드입니다
// 1, 0, -1로 정렬방식을 선택합니다
// 현재가 큰 것을 1로 주고 다음것이 큰것을 -1로 주면 오름차순 정렬

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return -1;
    else if (curr > next) return 1;
    else return 0;
  }) // 위와 반대 조건시 내림차순이다
);

console.log(
  [1, 6, 2, 3, 5, 4].sort(function (curr, next) {
    return curr - next;
    // 오름차순
    return next - curr;
    // 내림차순
  })
);

console.log(arr.sort());
// sort 메서드는 정렬을 해준다 (오름차순)
