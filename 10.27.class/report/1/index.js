// npm init
// npm i express express-session morgan dotenv cookie-parser mysql2 sequelize
// npm i -D nodemon sequelize-cli
// npx sequelize init
// migrations seeders 폴더 삭제
// package.json "start": "nodemon app"
// 이 파일 작성, public폴더 및 index.html 작성
// config.json 수정
// .env생성
// models/table1.js 작성
// models/index.js 수정

const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./models/index.js");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
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

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(app.get("port"), () => {
  console.log("서버오픈");
});
