const today = new Date();
// new는 많이쓰면 많이 무거워진다, 자세한 내용은 자료구조에서
//

console.log(today);

console.log(today.toLocaleString());
console.log(today.toUTCString());
console.log(today.getDate());
console.log(today.getDay()); // 요일을 0~6(일~토)로 출력합니다

console.log(today.getMonth());
// 날짜 관련이다 => Date를 기억하자

console.log(Date.now()); // 밀리세컨드(ms)로 따진다..ㄷㄷ
console.log(new Date(Date.now()));

// 데이트 메서드는 현재 pc 기준으로 시간을 가져온다
