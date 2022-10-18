// npm init
// nodemon app
// npm i express express-session dotenv morgan cookie-parser
// npm i -D nodemon

// 외부모듈 가져올때 require
const express = require("express");
// 서버생성을 위한 라이브러리
const session = require("express-session");
// 세션을 위한 라이브러리, 세션-서버 쿠키-로컬
const morgan = require("morgan");
// 로그를 위한 라이브러리
const dotenv = require("dotenv");
// 환결설정 파일을 로드하기위한 라이브러리
const cookieParser = require("cookie-parser");
// 쿠키를 위한 라이브러리, 세션-서버 쿠키-로컬
const path = require("path");
// 경로 내장 모듈

dotenv.config();
// 환경 설정 파일 로드
const app = express();
// 서버생성, app : 서버에 대한 정보를 갖고있는 객체
app.set("port", process.env.PORT || 8080);
// 서버 내의 프로퍼티 초기화
// process : 프로그램에 대한 정보를 갖고 있다
// process.env : 환경변수
app.use((req, res, next) => {
  // use : 미들웨어 등록
  // 미들웨어 : 프로그램 실행에 있어서 중간에 포함되는 작업
  // 처음 서버에 접근하면 해당 코드가 실행된다
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  // morgan을 사용할때 combined는 배포용으로 사용된다
  else morgan("dev")(req, res, next);
  // dev는 개발모드로 사용된다
});

app.use("/", express.static(path.join(__dirname, "seven")));
// / : root, static전역
app.use(express.json());
// 데이터를 주고받을때 .json사용
app.use(express.urlencoded({ extended: false }));
// querystring을 파싱할때 사용할 방법을 설정
app.use(cookieParser(process.env.COOKIE_SECRET));
// 쿠키 파싱
app.use(
  session({
    // 세션 설정
    resave: false,
    // 요청마다 세션을 재설정 할것인지
    saveUninitialized: false,
    // 요청에 대해 세션에 작업할 것인지
    secret: process.env.COOKIE_SECRET,
    // 암호화
    cookie: {
      // 쿠키는 어떻게 저장할것인지
      httpOnly: true,
      // http에서만 사용
      secure: false,
      // https인가?
    },
    name: "session-cookie",
    // 쿠키에서의 이름
  })
);

app.listen(app.get("port"), () => {
  // 서버를 시작한다, 요청을 듣기 시작한다
  console.log("서버오픈");
});
