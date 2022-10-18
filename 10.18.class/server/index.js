// npm init 엔터
// 패키지 제이슨 파일에서 스타트를 node index.js로 정의한다 또는 nodemon app
// 그다음 실행시 npm start

// const cusMath = require("./cusMath");
// 외부 모듈을 가져올때는 require를 사용한다

// console.log(cusMath.sum(2, 3));
// console.log(cusMath.mul(2, 3));
// 9번줄의 mul 클릭후 F12 누르면 얘가 본체가 어딨는지 찾아간다

// 하단콘솔내용
// npm i express express-session dotenv morgan cookie-parser 엔터
// 패키지 제이슨파일에 디펜던시즈에 5개 라이브러리 저장된거 확인
// npm i -D nodemon 엔터
// 데브디펜던시즈에 노드몬 확인
// 데브디펜던시즈의 : 개발할때만 사용할 라이브러리

// 라이브러리 : 어떠한 기능에 대한 코드의집합
// 함수 : 기능을 해, 함수가 모이면 ? 라이브러리
// console.log log 라는 메서드를 가지고 있는 내장객체
// 외부에서 가져온다면 ?
// 패스나 fs는 위쪽에서 적어야지 쓸수 있음
// 이렇게 외부에서 뭔가를 가져오는걸 라이브러리라고한다
// 패키지와 모듈과 라이브러리 셋다 거의 같다고 하는데 어떤차이가 있는건지 한번 알아보자
// 외부 공유될땐 라이브러리라고 많이하고 우리끼리만 쓸때는 모듈이라고 많이 부름
// 객체는 애초에 있는거니깐 가져올필요가 없는거고

const express = require("express");
// 서버 생성을 위한 라이브러리 << 노드_모듈스 폴더에서 가져온다
const session = require("express-session");
// 세션을 위한 라이브러리
// 세션 : 쿠키랑 같은 기능을 한다
// 세션 : 텍스트를 임시로 저장한다. 그럼 왜 쿠키랑 개념이 다른가?
// 쿠키는 로컬에 저장한다, 즉 브라우저에서 관리한다
// 세션은 서버에 저장한다, 즉 서버에서 관리한다
const morgan = require("morgan");
// 로그를 위한 라이브러리
const dotenv = require("dotenv");
// 환경 설정 파일을 로드하기 위한 라이브러리
const path = require("path");
// 경로 내장 모듈
const cookieParser = require("cookie-Parser");
// 쿠키를 위한 라이브러리 << 세션과 같이 나중에
// 쿠키 : 생각보다 많이 볼거야, 쿠키 허락 해주겠냐? 이런거
// 쿠키 : 사용자의 정보를 임시로 저장한다 << 허락(승인)을 받는 이유
// 원래의 쿠키는 뭐냐 ? 데이터를 임시로 저장한 공간
// 여기서 데이터란? 간단한 텍스트(이미지 영상 등등은 포함되지 않는다)
// 쿠키랑 대비되는것은 ? 캐시
// cache 캐시 : 영상, 이미지 등을 포함한 임시 저장 공간 (캐시안에 쿠키가 있는게 아니라 그냥 별도의 공간이다)
// 캐시는 파일로 저장된다 쿠키는 단순히 텍스트로 저장된거고

dotenv.config();
// 환경 설정 파일 로드
// .env파일

const app = express();
// 서버 생성
// app : 서버에 대한 정보를 갖고있는 객체
app.set("port", process.env.PORT || 8080);
// 서버 내의 프로퍼티 초기화
// process : 프로그램에 대한 정보를 갖고있다
// process.env : 환경변수이다
console.log(app.get("port"));

app.use((req, res, next) => {
  // use : 미들 웨어 등록
  // 미들웨어 : 프로그램 실행에 있어서 중간에 포함되는 작업
  // 처음 서버에 접근하면 해당 코드가 실행된다
  // 자세한 내용은 나중에
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  // morgan을 사용할때 combined는 배포용으로 사용된다
  else morgan("dev")(req, res, next);
  // dev는 개발모드로 사용된다
});

app.use("/", express.static(path.join(__dirname, "public")));
// / : 서버의 root 즉, 서버에 접근 시에 라우터가 없을때
// 웹상에서의 라우터 : 서버 내의 폴더(루트에 생성된 폴더)
// 서버의 하위 페이지를 구현할때 사용한다
// *****/router 식으로 표현한다
// static : 전역, 기본적으로 연결할 폴더를 설정한다
// public 폴더로 연결한다
// 아무것도없는 루트경로로 접속하면 퍼블릭폴더의 인덱스html로 연결시켜주는 코드다

app.use(express.json());
// 데이터를 주고 받을때 제이슨 형식을 사용한다
// 안넣으면 텍스트(string)방식으로 된다

app.use(express.urlencoded({ extended: false }));
// querystring을 파싱할때 사용할 방법을 설정
// false : 모듈을 사용하지 않겠다

app.use(cookieParser(process.env.COOKIE_SECRET));
// 쿠키 파싱(아래에서 암호화가 들어가 있어서)

app.use(
  session({
    // 세션 설정
    resave: false,
    // 요청마다 세션을 재설정 할것인가?
    saveUninitialized: false,
    // 요청에 대해 세션에 작업할 것인가?
    secret: process.env.COOKIE_SECRET,
    // 암호화 << 후에 자세히 할 예정
    cookie: {
      // 쿠키는 어떻게 저장할 것인가?
      httpOnly: true,
      // http에서만 사용한다
      secure: false,
      // https인가 ?
    },
    name: "session-cookie",
    // 쿠키에서의 이름
  })
);

app.listen(app.get("port"), () => {
  // 서버를 시작한다 즉, 요청을 받기 시작한다
  console.log("서버를 열었습니다");
});
// 여기서     "start": "nodemon app" 수정
// npm start >> 서버열었습니다 확인
// 그다음 브라우저에서 localhost:8080하면 아까 만들어놓은 public폴더의 index.html 파일이 열린다

// 웹서버
// 애플리케이션 서버 : 데이터를 주고받는서버
// was : 웹 애플리케이션 서버 : 둘다
// Node.js : 자바스크립트를 돌려주는 런타임

// 여기까지가 서버의 기본 설정
