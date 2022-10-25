const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const boardList = [];
const userList = [];

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

app.post("/board/create", (req, res) => {
  userList.unshift(req.body);
  console.log(userList);
  res.send(userList.data);
});

app.listen(app.get("port"), () => {
  console.log("망할 서버 열음");
});
