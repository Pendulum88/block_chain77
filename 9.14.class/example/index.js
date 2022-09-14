const newOrder = document.getElementById("container");

let i = 1;

const creation = () => {
  if (!document.getElementById("createList").value) {
    alert("날 시험하지마라 '닝겐'\n(내용을 입력해주세요)");
    return;
  }
  newOrder.innerHTML +=
    "<div id=" +
    `cList${i}` +
    " class='cList'>" +
    document.getElementById("createList").value +
    `<button onclick='deleteList(${i})'>삭제하기</button>` +
    "</div>";
  document.getElementById("createList").value = "";
  i++;
};

const deleteList = (num) => {
  document.getElementById("cList" + num).remove();
};

const deleteAll = () => {
  document.getElementById("container").innerHTML = "";
};
