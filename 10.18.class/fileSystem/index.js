const fs = require("fs");
const path = require("path");

// console.log("dirname : " + path.dirname(__filename));
// // 파일경로
// console.log("extname : " + path.extname(__filename));
// // 파일확장자
// console.log("basename : " + path.basename(__filename));
// // 파일이름
// console.log("path : " + path.join(__dirname, "..", "..", "10.14.class"));
// // 경로를 합친다
// // path란 경로에 대해서 관리하는 모듈이다

// fs.writeFile("./test.txt", "안녕하세요", (data) => {
//   console.log(data);
// });
// // 파일을 생성한다

// fs.readFile("./test.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log(data.toString());
// });

// const fsProm = fs.promises;

// fsProm
//   .writeFile("./test1.txt", "프라미스~")
//   .then(() => {
//     return fsProm.readFile("./test1.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.writeFileSync("./test2.txt", "싱크확인");

let data = fs.readFileSync("./test.txt");
console.log("data : " + data.toString());
data = fs.readFileSync("./test1.txt");
console.log("data1 : " + data.toString());
data = fs.readFileSync("./test2.txt");
console.log("data2 : " + data.toString());

async function readFileSyncFunc(filePath) {
  const data = await fs.promises.readFile(filePath);
  console.log("test : " + data);
}

readFileSyncFunc("./test2.txt");

// fs.createReadStream()
// 정보 찾아보기

console.log(__filename);
// 파일 이름을 포함한 경로
console.log(__dirname);
// 현재 파일 경로
// dir : directory
// 위 변수들은 ES6에 없다

// import fs from "fs";
// ES6 문법이다

// ES6는 최신버전이 맞지만, 전부다 ES6를 사용하고 있는것은 아니다
// 지금 우리가 하고있는것도 ES6 이전의 것들을 배우고 있는것이다
