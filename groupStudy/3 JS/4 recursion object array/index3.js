const str = "abcDeFgHIJKlmn";

console.log(str.indexOf("D"));
// 매개변수로 전달된 텍스트가 어디있나 ?
console.log(str.indexOf("cD"));
// 시작 위치를 찾는다
console.log(str.indexOf("cDY"));
// 전달된 텍스트가 내용에 없을시 -1을 입력한다
console.log(str.length);
// 길이
console.log(str.slice(1, 3));
// (0) a (1) b (2) c (3) D (4) e (5) F (6) g (7) H (8) I (9) J (10) K (11) l (12) m (13) n (14)
//짜르기, 1에서 시작해서 3에서 끝난다
console.log(str.split(/D/));
// 매개변수로 전달된 정규표현식을 기준으로 짜른다
// 정규표현식 : 나중에
console.log(str.split(""));
//하나하나 다 분해함
console.log(str.replace(/D/, "a"));
// 첫번째 매개변수로 정규표현식을 전달하고, 두번째 매개변수로 바꾸고싶은 텍스트를 전달한다
console.log(str.toLowerCase());
//전부 소문자로
console.log(str.toUpperCase());
//전부 대문자로
