const textInput = document.getElementById("textInput");
const chatWindow = document.getElementById("chatWindow");
const loginForm = document.getElementById("login-form");
const sayhello = document.getElementById("sayhello");
const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");
let isOnline = false;

function socket() {
  const socket = io();
  textInput.onsubmit = function (e) {
    e.preventDefault();
    if (!isOnline) {
      alert("로그인을 해주세요");
      return;
    }
    if (!textWindow.value) {
      return;
    }
    socket.emit("message", {
      text: textWindow.value,
      user: userName.innerHTML,
      uptime: new Date().toLocaleString(),
    });
    // ↑ 서버로 메시지 전달 (1)
    textWindow.value = "";
  };

  socket.on("messageRes1", (data) => {
    const sendDiv = document.createElement("div");
    const textSpan = document.createElement("span");
    sendDiv.innerText = `(${data.uptime})`;
    sendDiv.classList.add("send");
    chatWindow.append(sendDiv);
    textSpan.innerText = data.text;
    textSpan.classList.add("msg-span-left");
    sendDiv.append(textSpan);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });

  socket.on("messageRes2", (data) => {
    const sendDiv = document.createElement("div");
    sendDiv.innerHTML = `<span class="msg-span-right">${
      data.user + " : " + data.text
    }</span>${data.uptime}`;
    sendDiv.classList.add("receive");
    chatWindow.append(sendDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });

  loginForm.onsubmit = function (e) {
    e.preventDefault();
    if (!loginInput.value) return;
    socket.emit("login", loginInput.value);
    loginInput.value = "";
    loginForm.classList.add("hidden");
  };

  socket.on("loginRes", (data) => {
    userName.innerHTML = data;
    alert(`로그인완료, 이름 : ${data}`);
    sayhello.classList.remove("hidden");
    isOnline = true;
  });

  socket.on("loginInfo", (data) => {
    const div = document.createElement("div");
    div.innerText = data + "님이 입장했습니다";
    div.classList.add("info");
    chatWindow.append(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });

  logoutBtn.onclick = function () {
    if (!isOnline) {
      return;
    }
    socket.emit("logout", userName.innerHTML);
    sayhello.classList.add("hidden");
    loginForm.classList.remove("hidden");
    isOnline = false;
    userName.innerHTML = "";
    alert("로그아웃완료");
  };

  socket.on("logoutInfo", (data) => {
    const div = document.createElement("div");
    div.innerText = data + "님이 나갔습니다";
    div.classList.add("info");
    chatWindow.append(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}

socket();
