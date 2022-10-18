// ES6 이전 <<< 자바스크립트의 버전
// Class가 대표적인 ES6의 문법, import export 등등 있다

console.log("로그 남기기");
// console : 객체
// 내장객체 : 자바스크립트가 가지고 있는 객체

console.log(global);
// global : 전역객체, js파일에서 변수를 초기화하면 그 js 파일 내에서만 사용이 가능한데,
// 전역으로 쓰고 싶으면 global의 프로퍼티로 추가하면 된다

// 브라우저의 window : 최상위 객체
// Node.js에 DOM 있을까 ?
// HTML파일의 구조를 저장한 객체 : DOM, Document
// Node.js에 HTML의 구조가 있어 ? 없다
// window : 브라우저의 정보를 갖고있는 객체
// Node.js가 브라우저를 쓰나 ? 안쓴다
// 즉, window객체가 없다 => 대신하는 객체가 global
// Node.js의 최상위 객체 => global

console.warn("경고"); // 경고출력
console.dir({ data: "구조출력" });
console.log({ data: "구조출력" });
// 구조에 대해서 출력, 브라우저 쪽에서도 사용한다
// <div>블라블라</div> <<< console.log()
// Element에 대한 정보, console.dir()
// 콘솔로그보다 구조를 좀더 정확하게 찍는다
console.time("시간측정");
// 시간확인에 대한 시작점
console.timeLog("시간측정");
// 중간점
console.timeEnd("시간측정");
// 끝점

console.assert(true, "참");
// 앞에꺼가 참인지 거짓인지 판단해서 참일때는 냅두고 거짓일때만 출력한다
// 오류같은거 있나 확인용으로 쓴다
console.assert(false, "거짓");

console.count("몇번 ?");
console.count("몇번 ?");
console.countReset("몇번 ?");
console.count("몇번 ?");
console.count("몇번 ?");

console.table({ name: "표", data: "출력" });

console.error("에러출력");

let a = 12;
global.a = 15;
