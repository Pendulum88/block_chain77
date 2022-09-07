const cards = [];
let firstclick = 0;
let secondclick = 0;
let cardNum1 = null;
let cardNum2 = null;

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

const delId = function (idNum) {
  document.getElementById(`card${idNum}`).id = "";
};

const setting = function () {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(`card${i}`).innerHTML = cards[i];
  }
};

const hiding = function () {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(`card${i}`).innerHTML = "";
  }
};

const hiding1 = function (hidingNum) {
  document.getElementById(hidingNum).innerHTML = "";
};

const flip = function (cardNum) {
  if (firstclick == 0) {
    firstclick = document.getElementById(`card${cardNum}`).innerHTML =
      cards[`${cardNum}`];
    cardNum1 = cardNum;
  } else if (secondclick == 0) {
    secondclick = document.getElementById(`card${cardNum}`).innerHTML =
      cards[`${cardNum}`];
    cardNum2 = cardNum;
    if (firstclick != secondclick) {
      setTimeout(() => {
        hiding1(cardNum1);
        hiding1(cardNum2);
      }, 1500);
      firstclick = 0;
      secondclick = 0;
      cardNum1 = null;
      cardNum2 = null;
      console.log();
    } else if (firstclick == secondclick) {
      delId(cardNum1);
      delId(cardNum2);
      firstclick = 0;
      secondclick = 0;
      cardNum1 = null;
      cardNum2 = null;
    }
  }
};
