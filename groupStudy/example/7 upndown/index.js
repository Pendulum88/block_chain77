// 원래 내주려고 했던 과제
// 컴퓨터가 1~100사이의 하나의 숫자를 골라
// 사람이 하나의 숫자를 선택해
// 숫자를 맞추면 끝
// 못맞추면 대소 비교해서 URLSearchParams(내가 선택한 숫자가 크다)
// DOWN(내가 선택한 숫자가 작다)
// 총 몇번을 입력했는지
// 맞췄을때 축하합니다, 몇번 입력하셨습니다
// console.log(Math.random()); // 0~1까지의 랜덤수
// parseInd(***) <<< 정수화 함수야

const comSel = parseInt(Math.random() * 99 + 1); // +1 : 1부터 100까지, parseint : 정수화 함수
//컴퓨터 선택 완료

let playerSel;
let count = 0; // 카운트
let max = 100;
let min = 0; // 최대 최소 설정
let updown = "";
const maxCount = parseInt(prompt("몇번만에 맞출래? 숫자로만"));
do {
  playerSel = prompt(
    `${updown}\n숫자를 선택해 주세요.\n컴퓨터가 선택한 숫자를 맞추시면 됩니다.\n최소 : ${min} / 최대 : ${max} / 남은 횟수 : ${
      maxCount - count
    }`
  );
  playerSel = parseInt(playerSel); //프롬포트는 string으로 받는다
  if (min >= playerSel || max <= playerSel) {
    // || 또는 (or)
    //최소와 최대 사이의 값만 확인하기 위해 최소 미만과 최대 초과를 먼저 처리한다
    console.log("제외된 숫자들이다.");
  } else if (playerSel === comSel) {
    console.log(`${++count}번 만에 맞추셨네요, 축하합니다.`); // parseint는 정수형으로 바꿔줌으로 number이다
    break;
  } else if (playerSel > comSel) {
    // 플레이어가 선택한 숫자가 컴퓨터가 선택한 숫자보다 크다
    max = playerSel;
    //max가 현재 플레이어가 선택한 숫자가 된다.
    console.log("DOWN !");
    updown = "DOWN";
    count++; // 플레이어가 입력하면 카운트 하나 증가시킨다
  } else if (playerSel < comSel) {
    min = playerSel;
    //min이 현재 플레이어가 선택한 숫자가 된다.
    console.log("UP !");
    updown = "UP";
    count++; // 플레이어가 입력하면 카운트 하나 증가시킨다
  } else {
    console.log("숫자만 입력해라");
    updown = "숫자만 입력해라";
  }
} while (playerSel !== comSel && count < maxCount);
// !== : 틀리다는 의미이다 자료형이나 값, 둘 중 하나라도 "다르면 참"
// &&는 '그리고'다, 즉 두 조건이 한번에 만족해야한다
// 플레이어셀이 컴셀과 같지 않아야 "하고" 맥스카운트가 카운트 보다 커야 참
//컴퓨터가 숫자 선택 후 플레이어가 선택하는 것은 계속 반복되야 한다.
// 언제까지 ? 플레이어가 컴퓨터의 숫자를 맞출때까지 또는 카운트 전부 소진될때까지
// 또는 그리고 나올때는 잘라서 본다고 생각하자

if (count >= maxCount) {
  console.log("남은 횟수를 전부 사용하셨습니다");
}
