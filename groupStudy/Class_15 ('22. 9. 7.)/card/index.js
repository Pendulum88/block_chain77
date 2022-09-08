const cards = [];
let firstClick = 0;
let secondClick = 0;
let cardNum1;
let cardNum2;

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}

for (let i = 0; i < 250; i++) {
  const firstC = parseInt(Math.random() * cards.length);
  const secondC = parseInt(Math.random() * cards.length);
  const temp = cards[firstC];
  cards[firstC] = cards[secondC];
  cards[secondC] = temp;
}

const disabled = function (idNum) {
  document.getElementById(`card${idNum}`).onclick = "";
};

const setting = function () {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(`card${i}`).innerHTML = cards[i];
  }
};

const hidingAll = function () {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(`card${i}`).innerHTML = "";
  }
};

const hidingOne = function (hidingAllNum) {
  document.getElementById(`card${hidingAllNum}`).innerHTML = "";
};

const flip = function (cardNum) {
  if (firstClick == 0) {
    firstClick = document.getElementById(`card${cardNum}`).innerHTML =
      cards[`${cardNum}`];
    cardNum1 = cardNum;
  } else if (secondClick == 0) {
    secondClick = document.getElementById(`card${cardNum}`).innerHTML =
      cards[`${cardNum}`];
    cardNum2 = cardNum;
    if (firstClick != secondClick) {
      setTimeout(() => {
        hidingOne(cardNum1);
        hidingOne(cardNum2);
      }, 1500);
      firstClick = 0;
      secondClick = 0;
    } else if (firstClick == secondClick) {
      disabled(cardNum1);
      disabled(cardNum2);
      firstClick = 0;
      secondClick = 0;
    }
  }
};
