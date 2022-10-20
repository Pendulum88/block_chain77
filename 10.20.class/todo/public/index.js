// 프론트엔드
const todoList = document.getElementById("list");
function getList() {
  axios.get("/api/list").then((data) => {
    todoList.innerHTML = "";
    data.data.list.forEach((todo) => {
      const tempElem = document.createElement("li");
      tempElem.innerHTML = todo;
      todoList.append(tempElem);
    });
  });
}
getList();

document.forms["todo-form"].onsubmit = (e) => {
  // todo-form : index.html form id
  e.preventDefault(); // 기본 이벤트를 막는다

  // XMLHttpRequest => fetch/ajax => axios
  // http 모듈 => express

  axios
    .post("/api/list", {
      name: document.forms["todo-form"]["do-name"].value,
      time: new Date().toLocaleString(),
    })
    .then((data) => {
      getList();
    });
  // axios.post('라우터', 서버의 req.body)
  // 저 데이터를 보낸다
};
// get post 둘다 보내고 받을수 있는데
// 겟은 다 보이고 포스트는 눈에 안보임
// 겟은 쿼리스트링을 쓰고 포스트는 바디를 쓴다
