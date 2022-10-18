// npm init 엔터
// "start": "nodemon app"
// 밑에다가 "type": "module" 추가함
// 타입모듈 : ES6문법을 사용할때 쓴다, 이게 없으면 import가 안된다고 한다

// 밑에다가 npm i express express-session dotenv morgan cookie-parser 입력 엔터
// npm i -D nodemon 엔터

// const express = require("express") 이런애들 대신에
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// 33번줄 작성시 자동으로 작성된다 (17번줄만) 이런게 readFile등 몇개 더 있다고 한다
import objTest, { minus as objMinus } from "./objtest/index.js";
// as는 앞에 export된 이름과 뒤에 여기서 쓸 이름을 정의한다
console.log(objTest.mul(5, 9));
console.log(objMinus(40, 25));

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use("/", express.static(path.join(__dirname, "web")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: { httpOnly: true, secure: false },
    name: "session-cookie",
  })
);

app.listen(app.get("port"), () => {
  console.log("서버열기ES6");
});
