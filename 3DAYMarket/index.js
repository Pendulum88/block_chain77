const express = require("express");
const session = require("express-session");

const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");

const { sequelize } = require("./models/index.js");
const routes = require("./routes/index.js");
const socket = require("./socket.js");

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
    name: "seed",
  })
);

app.use("/api", routes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("디비가연결되었습니다.");
  })
  .catch((err) => {
    console.error(err);
  });

const server = app.listen(app.get("port"), () => {
  console.log("server start");
});

socket(server);
