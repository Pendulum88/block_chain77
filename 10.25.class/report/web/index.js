const editBtns = document.getElementById("edit-btns");
const logoutBtns = document.getElementById("logout-btns");
const confirmBtns = document.getElementById("confirm-btns");
const cancelBtns = document.getElementById("cancel-btns");
const loginedId = document.getElementById("logined-id-area-input");
const loginedPw = document.getElementById("logined-pw-area-input");
let isOnline = false;
let tempUserId = null;

document.getElementById("post").onsubmit = async function (e) {
  e.preventDefault();
  if (isOnline) {
    if (!e.target["title-area"].value) {
      e.target["title-area"].focus();
      return;
    }
    if (!e.target["text-area"].value) {
      e.target["text-area"].focus();
      return;
    }
    try {
      const data = await axios.post("/board/add", {
        title: e.target["title-area"].value,
        text: e.target["text-area"].value,
        writer: tempUserId,
        uptime: new Date().toLocaleString(),
      });
    } catch (err) {
      console.error(err);
    }
    e.target["title-area"].value = e.target["text-area"].value = "";
    loadList();
  } else {
    alert("로그인을 해주세요");
  }
};

async function loadList() {
  const data = await axios.get("/board/send");
  const divTitle = document.createElement("div");
  const divText = document.createElement("div");
  const divWriter = document.createElement("div");
  const divUptime = document.createElement("div");
  const divPost = document.createElement("div");
  divPost.classList.add("div-post");
  divTitle.innerText = "제목 : " + data.data[0].title;
  divText.innerText = "내용 : " + data.data[0].text;
  divWriter.innerText = "작성자 : " + data.data[0].writer;
  divUptime.innerText = "작성일시 : " + data.data[0].uptime;
  document.body.append(divPost);
  divPost.append(divTitle);
  divPost.append(divText);
  divPost.append(divWriter);
  divPost.append(divUptime);
}

document.getElementById("create").onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["create-id-area"].value) {
    e.target["create-id-area"].focus();
    alert("[계정생성] ID를 입력해 주세요");
    return;
  } else if (!e.target["create-pw-area"].value) {
    e.target["create-pw-area"].focus();
    alert("[계정생성] PW를 입력해 주세요");
    return;
  }
  try {
    const data = await axios.post("/board/user/create", {
      id: e.target["create-id-area"].value,
      pw: e.target["create-pw-area"].value,
    });
    if (data.data) {
      alert("계정 생성 완료");
      e.target["create-id-area"].value = e.target["create-pw-area"].value = "";
    } else {
      alert("중복된 ID입니다");
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("login").onsubmit = async function (e) {
  e.preventDefault();
  if (isOnline) return;
  if (!e.target["login-id-area"].value) {
    e.target["login-id-area"].focus();
    alert("[로그인] ID를 입력해 주세요");
    return;
  } else if (!e.target["login-pw-area"].value) {
    e.target["login-pw-area"].focus();
    alert("[로그인] PW를 입력해 주세요");
    return;
  }
  try {
    const data = await axios.post("/board/user/login", {
      id: e.target["login-id-area"].value,
      pw: e.target["login-pw-area"].value,
    });
    if (data.data) {
      alert("로그인 완료");
      tempUserId = data.data.onlineId;
      isOnline = true;
      e.target["login-id-area"].value = e.target["login-pw-area"].value = "";
      loginedId.value = tempUserId;
      loginedPw.value = "******";
    } else {
      alert("ID 또는 PW를 확인해주세요");
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("logout").onsubmit = async function (e) {
  e.preventDefault();
  if (!tempUserId) {
    alert("로그인을 해주세요");
    return;
  }
  isOnline = false;
  tempUserId = null;
  loginedId.value = loginedPw.value = "";
  alert("로그아웃 됐습니다");
};

function toggle() {
  editBtns.classList.toggle("hidden");
  logoutBtns.classList.toggle("hidden");
  confirmBtns.classList.toggle("hidden");
  cancelBtns.classList.toggle("hidden");
  loginedId.toggleAttribute("disabled");
  loginedPw.toggleAttribute("disabled");
}

function userEdit() {
  if (!loginedId.value || !loginedPw.value) {
    alert("로그인을 해주세요");
    return;
  }
  loginedPw.value = "";
  toggle();
}

async function userEditConfirm() {
  if (!loginedPw.value) {
    alert("변경할 PW를 입력해주세요");
    return;
  }
  const data = await axios.post("/board/user/edit", {
    pastId: tempUserId,
    nowId: loginedId.value,
    nowPw: loginedPw.value,
  });
  if (data.data) {
    tempUserId = loginedId.value;
    loginedPw.value = "******";
    toggle();
    alert("정보수정 완료");
  } else {
    alert("중복된 ID입니다");
  }
}

function userEditCancel() {
  loginedId.value = tempUserId;
  loginedPw.value = "******";
  toggle();
}
