const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 8080);
// app.set(키, 값)으로 express 객체에 변수 저장, app.get 으로 가져올수 있다
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "../../../project")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      htppOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.listen(app.get("port"), () => {
  console.log("서버오픈");
});
