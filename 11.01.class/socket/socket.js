// HTTP 통신 : 80번 포트 사용, 클라이언트가 요청을 하고 서버가 응답한다
// 요청과 응답 : 요청이 없으면 서버가 응답을 보낼수 없다 (서버가 마음대로 데이터나 정보를 못보낸다)
// 이러한 방식이 아닌 서버에서도 마음대로 데이터를 보낼 수 있도록 하는 방식이 Socket 통신이다
// 소켓 자체는 보통 C++, C, Java 등으로 구현한다, 즉 프로그램에서 사용된다
// 웹에서도 이러한 방식이 필요하다고 느껴서 만들어진게 Web Socket이다
// 요즘은 거의 쓰이지 않지만 기초적인 라이브러리가 ws

const WebSocket = require("ws");

module.exports = (server) => {
  const socket = new WebSocket.Server({ server });
  // 소켓을 연결한다 hand shaking
  // 무언가 안뜨더라도, 확인이 안되더라도 연결은 계속 되어있다 close전까지
  let count = 0;
  socket.on("connection", (ws, req) => {
    console.log("Socket Start");
    ws.on("message", (msg) => {
      console.log(msg.toString());
    });
    ws.interval = setInterval(() => {
      ws.send(count++);
      // 프론트로 데이터를 전송한다
    }, 1100);
    ws.on("close", () => {
      clearInterval(ws.interval);
      console.log("disconnection");
    });
  });
};
