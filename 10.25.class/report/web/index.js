document.getElementById("posting").onsubmit = async function (e) {
  e.preventDefault();
  try {
    const data = await axios.post("/board/add", {
      title: e.target["title-area"].value,
      text: e.target["text-area"].value,
      uptime: new Date().toLocaleString(),
      maxidx: 1,
    });
  } catch (err) {
    console.log(err);
  }
  //   loadList();
  e.target["title-area"].value = e.target["text-area"].value = "";
  loadList();
};

async function loadList() {
  const data = await axios.get("/board/send");
  const divTitle = document.createElement("div");
  const divText = document.createElement("div");
  const divUptime = document.createElement("div");
  const divPost = document.createElement("div");
  divPost.classList.add("div-post");
  divTitle.innerText = "제목 : " + data.data[0].title;
  divText.innerText = "내용 : " + data.data[0].text;
  divUptime.innerText = "작성일시 : " + data.data[0].uptime;
  document.body.append(divPost);
  divPost.append(divTitle);
  divPost.append(divText);
  divPost.append(divUptime);

  document.getElementById("login").onsubmit = async function (e) {
    e.preventDefault();
    try {
      const data = await axios.post("/board/create", {
        id: e.target["id-area"].value,
        pw: e.target["pw-area"].value,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

function listIndex(num) {
  const divListBox = document.createElement("div");
  divListBox.innerText = "123";
  document.body.append(divListBox);
  const divList = document.createElement("div");
  divList.innerText = "count";
  divListBox.append(divList);
}
