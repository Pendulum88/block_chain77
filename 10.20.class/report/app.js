const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const { send } = require("process");
const backList = [];

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

app.post("/list", (req, res) => {
  backList.push(req.body.names);
  res.send(backList[backList.length - 1]);
  res.end();
  console.log(backList);
});

// app.post("/list/delete", (req, res) => {
//   backList.push(req.body.names);
//   res.send(backList[backList.length - 1]);
//   res.end();
//   console.log(backList);
// });

app.listen(app.get("port"), () => {
  console.log("망할서버열음");
});
