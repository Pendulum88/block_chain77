const socket = require("socket.io");
let userOne = null;
let userTwo = null;

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    ws.on("message", (data) => {
      // ↑ 프론트가 보낸 메시지 받음 (2)
      console.log(data);
      // ws.emit은 연결된 프론트엔드에게 보낸다
      // io.emit은 연결된 모든 프론트엔드에게 보낸다

      ws.emit("messageRes1", data);
      // 보낸쪽
      ws.broadcast.emit("messageRes2", data);
      // 보낸쪽 말고 다른쪽
      // ↑ 받은메시지 다시보내기 (3)
    });
    ws.on("login", (data) => {
      if (!userOne) {
        userOne = data;
        ws.emit("loginRes", userOne);
        io.emit("loginInfo", userOne);
      } else {
        userTwo = data;
        ws.emit("loginRes", userTwo);
        io.emit("loginInfo", userTwo);
      }
    });
    ws.on("logout", (data) => {
      if (data === userOne) {
        io.emit("logoutInfo", data);
        userOne = null;
        console.log("userOne 로그아웃");
      }
      if (data === userTwo) {
        io.emit("logoutInfo", data);
        userTwo = null;
        console.log("userTwo 로그아웃");
      }
    });
  });
};
