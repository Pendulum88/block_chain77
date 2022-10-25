const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const axios = require("axios");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "web")));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

// 쿠키 : 브라우저가 데이터를 임시 저장하는 곳 (이미지 영상 객체 등 X 텍스트 O 형식은 무조건 string) 우리가 넣음
// 세션 : 서버에서 데이터를 임시 저장하는 곳 (이미지 영상 객체 등 X 텍스트 O 형식은 무조건 string) 우리가 넣음
// 캐시 : 이미지와 영상을 저장하는 곳 (형식은 파일) 브라우저가 넣음 보통
// 위 3개 차이점 자세히 알아야함

app.post("/", (req, res) => {
  //   console.log(req.body);
  //   res.end("end");
  //   res.send(req.body); 총괄적으로 보낼때 쓰고
  //   res.json(req.query); 객체형식으로 보낼때 쓴다
  res.json({ ...req.query, ...req.body });
});

app.get("/api", (req, res) => {
  //   res.send(req.query);
  res.json(req.query);
});
// query : 쿼리스트링

app.get("/testing", (req, res) => {
  res.send(`<html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>테스팅</title></head><body>
          <div>테스트중입니다</div>
          <h1>테스트중입니다</h1>
          <h2>테스트중입니다</h2>
          <h3>테스트중입니다</h3>
          <h4>테스트중입니다</h4>
          <h5>테스트중입니다</h5>
        </body></html>`);
});

app.get("/testing1", (req, res) => {
  res.send(`<div>테스트중입니다</div>
          <h1>테스트중입니다</h1>
          <h2>테스트중입니다</h2>
          <h3>테스트중입니다</h3>
          <h4>테스트중입니다</h4>
          <h5>테스트중입니다</h5>`);
});
// 브라우저는 개떡같이 보내도 찰떡같이 만들어준다

app.get("/search", async (req, res) => {
  const data = await axios.get("http://localhost:8080");
  res.send(data.data);
});

app.get("/search/query", async (req, res) => {
  const data = await axios.post("http://localhost:8080", req.query);
  console.log(req.query);
  console.log(typeof req.query);
  res.send(data.data);
});

app.listen(app.get("port"), () => {
  console.log("망할 서버 오픈");
});
