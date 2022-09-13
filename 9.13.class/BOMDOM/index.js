console.log(window.location);
// location은 현재 주소에 대한 내용을 담고있다
// window가 뭐길래 주소 내용을 담고있는가 ?
// window는 BOM(Browser Object Model)이다
// 브라우저의 정보들을 갖고있다

console.log(location);
// location만 해도 똑같이 나온다
// window는 root 객체이다
// root 는 최상위 폴더/객체/클래스 등을 뜻한다

console.log(window.navigator);
// 생각보다 자주 쓸지도 모른다

console.log(window.navigator.userAgent);
// browser와 OS관련된 정보가 정의되어 있다
// 즉, 현재 브라우저나 OS등을 확인할수 있다
// userAgent를 정규 표현식을 사용해 원하는 정보만 가져올 수도 있다
// (다만, (나중에배울)라이브러리를 사용해서 쉽게 처리가 가능하다)
// PS. 애플 계열은 IOS, iPhone, iPad, MAC으로만 나타난다

console.log(document.head);
// 적혀있는 그대로 head의 정보를 받아온다
// document : HTML파일 구조를 저장하는 객체
// document는 DOM(document Object Model)이다
// HTML 구조의 root이다

console.log(document);

console.dir(document);
// console.log로 나오지 않는것은 dir로 확인해보자
// console.log 확인시 html 구조가 나오면 dir로 확인하는 경우가 있다
// console에 대해서는 Node.js에서 다시...
// BOM / DOM feat.MVC(Model View Controller)

// Node, Tag, Element란 무엇인가?
// Tag : HTML에서 사용하는 명령어의 이름을 뜻했다 ex) HTML, body, div...
// Tag는 여는 태그와 닫는 태그로 사용한다 <div></div>
// Element : 여는태그와 닫는 태그를 모두 포함하는 내용이다 << 라고 했었다
// 더 정확히는, Dom(document)에서 정의되는 Tag의 내용이다
// ex) document.getElementById('name') << name을 id로 갖는 Tag를 찾는다
// 더 정확히는, Element를 찾는다
// Tag && Element의 차이는 무엇인가? Tag는 이름 그 자체다 Element는 객체다
// 객체 : 키와 값으로 이루어진 데이터 모음
// 즉, Javascript에서 HTML 구조를 수정하거나 내용을 추가하거나 등등에서 사용하는 Tag에 대한 객체다
// HTML 파일에서 Tag(여는태그, 자식들 포함)에 사용된 내용들을 모두 포함하는 것이 Element다

// const 블록7기 = {
//   김성진: { name: 김성진, age: 27, gender: 남 },
//   // 중괄호 밖에서 김성진 : <<< 키 , 중괄호 안 : 값
//   // 중괄호 안에서 name : <<< 키, 김성진 : 값
//   염예나: { name: 염예나, age: 22, gender: 여 }
// };
// 블록7기.김성진.name;

// const document = {
//   getElementById: (id) => {},
// };
// 우리가 쓰는 document는 이러한 형식을 띄고 있는 객체이다
// 객체 안에 있는 함수는 메서드(method)라고 부른다
// 객체의 키는 프로퍼티(property)라고 부른다

console.log(document.getElementById("test").outerHTML);
// innerHTML : 여는태그와 닫는태그 사이의 데이터를 문자열로 받는다
// outerHTML : 여는태그와 닫는태그를 모두 포함하여 데이터를 문자열로 받는다 (따라서 사용할일이 많이 없다)

console.log(document.getElementsByClassName("test-class").outerHTML);
// 클래스로 받아올땐 getElements 이다

console.log(document.getElementById("test").id);
console.log(document.getElementById("test").style.border);
// 인식 되고 안되고 차이가 있음 확인해보니 head쪽 style 탭에다가 하면 안되더라

document.getElementById("test").style.border = "10px solid red";
console.dir(document.getElementById("test"));

// 상속 : 상속하는 객체의 정보(프로퍼티, 메서드 모두 포함)를 갖는 다른 객체를 만드는 행위
// A = {a, b, c} => B가 A를 상속한다 => B = {a, b, c}
const person = { name: "", age: 0, gender: 0 };
const kim = { name: "김성진", age: 27, gender: 1 };
const yeom = { name: "염예나", age: 22, gender: 4 };
const jung = { name: "정재훈", age: 30, gender: 1 };
// person을 상속해서 kim, yeom, jung을 만들수 있다(생성할수 있다)

// javascript는 프로토타입 형태로 되어있다
// javascript는 기본적으로 Node를 기준으로 하고있다
// Node를 이용하여 Element, document 등을 생성한다
// 프로토타입 : (일반적으로) 테스트를 위한 임시 객체
// 프로토타입을 업그레이드, 즉 기능을 추가하거나 필요치
// 않은 기능을 삭제하거나 등등 더 좋게 만들어서 다음 것을 만든다
// 75번줄에 대해 콘솔로그 창을 보면 HTMLDivElement > HTMLElement > Element ... 해서 상속의 상속을 받는 구조로 되어있다
// 지금은 이정도로 기억을 해두자
