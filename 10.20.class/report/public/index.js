let backListLength = 0;

document.forms["todo-form"].onsubmit = (e) => {
  e.preventDefault();
  axios
    .post("/list", {
      names: document.forms["todo-form"]["do-name"].value,
    })
    .then((data) => {
      const li = document.createElement("li");
      const deleteItemBtns = document.createElement("button");
      const putItemBtns = document.createElement("button");
      const frontList = document.getElementById("list");
      const selection = document.createElement("select");
      const complete = document.createElement("option");
      const fail = document.createElement("option");
      const ing = document.createElement("option");
      const stanby = document.createElement("option");
      li.innerHTML = data.data;
      putItemBtns.append("수정");
      deleteItemBtns.append("삭제");
      complete.append("완료");
      fail.append("포기");
      ing.append("진행중");
      stanby.append("진행대기");
      selection.append(stanby);
      selection.append(ing);
      selection.append(complete);
      selection.append(fail);
      frontList.append(li);
      li.append(selection);
      li.append(putItemBtns);
      li.append(deleteItemBtns);
      deleteItemBtns.onclick = deleteItem;
      putItemBtns.onclick = putItem;
    });
  document.getElementById("do-name").value = null;
};
// setAttribute()를 이용해서 ID할당, 해당 ID를 호출해서 선택자로 쓰자
// 선택자를 이용해서 해당 객체에 접근하고, 해당 객체를 삭제, 수정할수 있도록 만들자

const listFilter = document.getElementById("listFilter");
const listItem = document.getElementsByTagName("li");
function filtering() {
  const sel = listFilter.options[listFilter.selectedIndex].text;
  for (let i = 0; i < document.getElementById("list").children.length; i++) {
    if (listItem[i].children[0].value === sel || sel === "모두") {
      listItem[i].style.display = "list-item";
    } else {
      listItem[i].style.display = "none";
    }
  }
}

function deleteItem() {
  //   button.parentNode.firstChild.data
  //   axios.post("/list/delete", {
  //     names: document.forms["todo-form"]["do-name"].value,
  //   });
}

function putItem() {
  console.log("dosomething2");
}
