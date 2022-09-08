let cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}

cards = shuffle(cards, 300);
// 카드를 섞어주는 함수(shuffle.js)
// 매개변수는 하나만 들어가는게 아니다, 여러개 들어갈수있다.
// 콤마로 구분만 해주면된다. 순서 주의(매개변수 자체의 순서는 일반적으로 상관없다)
console.log(cards);

let firstCardIdx = -1;
let secondCardIdx = -1;

function selectNum(cardNum) {
  console.log("firstCardIdx : " + firstCardIdx);
  console.log("secondCardIdx : " + secondCardIdx);
  const tempElem = document.getElementById("card" + cardNum);
  const firstElem = document.getElementById("card" + firstCardIdx);
  // 첫번째 선택한 카드의 태그가 정의된다
  const secondElem = document.getElementById("card" + secondCardIdx);
  // 매개변수로 받은 cardNum은 id의 'card' 뒤에 붙은 숫자와 동일하게 되어있으므로
  // cardNum과 'card'를 붙여서 id를 찾아옵니다
  if (tempElem.innerHTML) return;
  // 우리가 선택한 div에 내용물이 들어있으면 함수 돌리지마라
  // break는 for while switch에서 씀
  // 함수를 끝낼꺼면 return
  if (firstCardIdx > -1 && secondCardIdx > -1) {
    // 카드 두장을 모두 선택했는가?
    if (cards[firstCardIdx] != cards[secondCardIdx]) {
      // 카드 두장이 다른가 ?
      firstElem.innerHTML = "";
      secondElem.innerHTML = "";
      // 카드를 다시 뒤집는다
    } else {
      firstElem.style.backgroundColor = "lightcoral";
      secondElem.style.backgroundColor = "lightcoral";
    }
    firstCardIdx = -1;
    secondCardIdx = -1;
    // 카드의 위치에 저장했던 값들을 원복시킨다
  }

  if (firstCardIdx < 0) {
    // 첫번째 카드를 선택하지 않았는가?
    firstCardIdx = cardNum;
    // 첫번째 카드의 위치(배열기준 위치 : 0~15)를 정의한다
    tempElem.innerHTML = cards[cardNum];
  } else if (secondCardIdx < 0) {
    // 두번째 카드를 선택하지 않았는가?
    secondCardIdx = cardNum;
    tempElem.innerHTML = cards[cardNum];
  }
  //   else if (cards[firstCardIdx] != cards[secondCardIdx]) {
  //     firstElem.innerHTML = "";
  //     secondElem.innerHTML = "";
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   } else {
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   }
}
// 찾은 클릭당한 태그에 내용으로 cards(랜덤으로 배치한 카드들) 중에
// (cardNumber -1)번째(컴퓨터는 0부터 숫자를 세니까)를 찾아 출력하도록 한다
// 그냥 매개변수 자체를 0부터 시작하면 사실 쓸데가 없다
// 보여줄려고 헷갈리지 말라고 교수님이 일부러 이렇게 함
// 헷갈린다그래서 0으로 바꿈 노가다
