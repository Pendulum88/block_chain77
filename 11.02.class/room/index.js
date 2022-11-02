// npm init
// npm i -D nodemon
// npm i express socket.io
// "start": "nodemon index.js" nodemon app 과 차이 없다, 그냥 이렇게 써도 된다

const express = require("express");

const socket = require("./socket.js");

const app = express();
app.use("/", express.static(__dirname + "/front"));

const server = app.listen(8080, () => {
  console.log("server start");
});

socket(server);
