// npm init
// npm i -D nodemon sequelize-cli
// npm i express express-session morgan dotenv cookie-parser mysql2 sequelize socket.io
// package.json start 추가
// npx sequelize init
// config.json 수정
// models폴더 index.js 수정
// .env 생성
// 본 js 작성
// socket.js 작성
// index.html 작성

// 추가기능 npm remove cookie-parse 등으로 라이브러리 삭제 가능
// 이거 해놓고 깃으로 받으면 안깔려있는데 npm install 하면 알아서 다깔림

const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./models/index.js");
const socket = require("./socket.js");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV) morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.static(path.join(__dirname, "front")));
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
    name: "sddfilfd",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

const server = app.listen(app.get("port"), () => {
  console.log("server start");
});

socket(server);
