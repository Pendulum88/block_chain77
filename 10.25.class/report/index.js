const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const boardList = [];
const userList = [];
let tempUserId;

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

app.post("/board/add", (req, res) => {
  boardList.unshift(req.body);
  console.log(boardList);
  res.send();
});

app.get("/board/send", (req, res) => {
  res.send(boardList);
});

app.post("/board/user/create", (req, res) => {
  let iscorrect = false; // 중복확인
  userList.forEach((elem) => {
    if (elem.id == req.body.id) {
      iscorrect = true;
    }
  });
  if (!iscorrect) {
    // 아이디중복안됨
    userList.unshift(req.body);
    res.send(true);
  } else {
    // 아이디중복
    res.send(false);
  }
  console.log(userList);
});

app.post("/board/user/login", (req, res) => {
  let iscorrect = false; // ID및 PD 일치여부 확인
  userList.forEach((elem) => {
    if (elem.id == req.body.id && elem.pw == req.body.pw) {
      tempUserId = elem.id;
      iscorrect = true;
    }
  });
  if (iscorrect) {
    console.log("로그인 승인");
    res.send({
      status: 200,
      onlineId: tempUserId,
    });
  } else {
    console.log("로그인 기각");
    res.send(false);
  }
  console.log(userList);
});

app.post("/board/user/edit", (req, res) => {
  let iscorrect = false; // 중복확인
  userList.forEach((elem) => {
    if (elem.id == req.body.nowId) {
      iscorrect = true;
    }
  });
  if (!iscorrect) {
    // 아이디중복안됨
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id == req.body.pastId) {
        userList[i].id = req.body.nowId;
        userList[i].pw = req.body.nowPw;
        tempUserId = userList[i].id;
      }
    }
    for (let i = 0; i < boardList.length; i++) {
      if (boardList[i].writer == req.body.pastId) {
        boardList[i].writer = req.body.nowId;
      }
    }
    res.send(true);
  } else {
    // 아이디중복
    res.send(false);
  }
  console.log(userList);
});

app.listen(app.get("port"), () => {
  console.log("망할 서버 열음");
});
