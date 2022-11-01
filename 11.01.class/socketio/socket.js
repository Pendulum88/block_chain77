const socket = require("socket.io");

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    ws.on("message", (data) => {
      // ↑ 메시지 받기 (2)
      // 프론트쪽에서 메시지라는 이름으로 받은 데이터를 처리한다
      // 이름이 다르면 매칭되지 않는다
      console.log(data);
      // 위에서 받은
      // ws.emit("messageRes", data);
      // ↑ 받은메시지 다시보내기 (3)
      io.emit("messageRes", data);
      // ws.emit은 연결된 프론트엔드에게 보낸다
      // io.emit은 연결된 모든 프론트엔드에게 보낸다

      ws.broadcast.emit("messageRes", "메시지도착");
      // 보낸 프론트엔드를 제외하고 나머지 모든 프론트엔드에 데이터를 보낸다
    });
    ws.on("disconnect", () => {
      console.log("disconnection");
      io.emit("disconnect1", "상대방이나감");
    });
  });
};
