let rpsRoutine = 0;
let scoreRoutine = 0;
let multipleoutline = 0;
let getCredit = 0;
let credit = 0;
let score;
let winlose;
let rpsBrake = 20;
let scoreBrake = 10;
let multipleBrake = 15;
let multiplyer;
let rpsImgInterval;
let scoreInterval;
let multipleInterval;
let rpsImgIntervalFast;
let scoreIntervalFast;
let multipleIntervalFast;
let pickMeUpInterval;
let rpsImgIntervalBrake;
let scoreIntervalBrake;
let multipleIntervalBrake;
let comSel = null; // 0:rock 1:scissors 2:paper
let playerSel = null; // 1:scissors 2:rock 3:paper
const rpsimg = document.getElementById("imgdiv");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const startbtn = document.getElementById("gamestartbtn");

const decision = (comnum, playernum) => {
  if (
    (comnum == 0 && playernum == 2) ||
    (comnum == 1 && playernum == 1) ||
    (comnum == 2 && playernum == 3)
  ) {
    bgGold("pdraw");
    clearInterval(multipleIntervalFast);
    clearInterval(scoreIntervalFast);
    credit = credit + 100;
    console.log("[비김] 골드반환 : +100");
    startbtn.disabled = false;
    startbtn.style.cursor = "pointer";
  } else if (
    (comnum == 0 && playernum == 1) ||
    (comnum == 1 && playernum == 3) ||
    (comnum == 2 && playernum == 2)
  ) {
    bgGold("plose");
    winlose = -1;
    brakescore();
  } else {
    bgGold("pwin");
    winlose = 1;
    brakescore();
  }
};

const decisionWinLose = () => {
  score = document.getElementById(`item${scoreRoutine % 16}`).innerHTML;
  multiplyer = document.getElementById(`multi${multipleoutline % 5}`).innerHTML;
  multiplePick();
  if (winlose == -1) {
    console.log(
      `[종료] 골드증감 : -${score * multiplyer}, 현재골드 : ${credit}`
    );
    credit = credit - score * multiplyer;
  } else if (winlose == 1) {
    console.log(
      `[종료] 골드증감 : +${score * multiplyer}, 현재골드 : ${credit}`
    );
    credit = credit + score * multiplyer;
  }
  if (credit < 100) {
    rpsimg.innerHTML = "GAME OVER";
    rpsimg.classList.add("blacker");
  }
  startbtn.disabled = false;
  startbtn.style.cursor = "pointer";
  document.getElementById("credit").innerHTML = `${credit}G`;
};

const comPick = () => {
  if (rpsimg.innerHTML == '<img src="./0.png">') {
    comSel = 0;
  } else if (rpsimg.innerHTML == '<img src="./1.png">') {
    comSel = 1;
  } else if (rpsimg.innerHTML == '<img src="./2.png">') {
    comSel = 2;
  }
};

const multiplePick = () => {
  if (multiplyer == "X 5") {
    multiplyer = 5;
  } else if (multiplyer == "X 10") {
    multiplyer = 10;
  } else if (multiplyer == "X 15") {
    multiplyer = 15;
  } else if (multiplyer == "X 20") {
    multiplyer = 20;
  } else if (multiplyer == "X 40") {
    multiplyer = 40;
  }
};

const pointerDefault = () => {
  rock.style.cursor = "default";
  paper.style.cursor = "default";
  scissors.style.cursor = "default";
};

const btnDisable = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
};

const btnEnable = () => {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
};

const bgGold = (str) => {
  document.getElementById(str).style.backgroundColor = "gold";
};

const bgWhite = () => {
  document.getElementById("rock").style.backgroundColor = "white";
  document.getElementById("paper").style.backgroundColor = "white";
  document.getElementById("scissors").style.backgroundColor = "white";
  document.getElementById("pwin").style.backgroundColor = "white";
  document.getElementById("plose").style.backgroundColor = "white";
  document.getElementById("pdraw").style.backgroundColor = "white";
};

const stanbyShuffle = () => {
  rpsImgInterval = setInterval(() => {
    rpsimg.innerHTML = `<img src="./${rpsRoutine++ % 3}.png" />`;
  }, 500);

  scoreInterval = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`item${scoreRoutine % 16}`)
        .classList.add("squarepick");
    }, 100);
    document
      .getElementById(`item${scoreRoutine % 16}`)
      .classList.remove("squarepick");
    scoreRoutine++;
  }, 100);

  multipleInterval = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`multi${multipleoutline % 5}`)
        .classList.add("squarepick");
    }, 100);
    document
      .getElementById(`multi${multipleoutline % 5}`)
      .classList.remove("squarepick");
    multipleoutline++;
  }, 100);
};

const excuteShuffle = () => {
  rpsImgIntervalFast = setInterval(() => {
    rpsimg.innerHTML = `<img src="./${rpsRoutine++ % 3}.png" />`;
  }, 20);

  scoreIntervalFast = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`item${scoreRoutine % 16}`)
        .classList.add("squarepick");
    }, 10);
    document
      .getElementById(`item${scoreRoutine % 16}`)
      .classList.remove("squarepick");
    scoreRoutine++;
  }, 10);

  multipleIntervalFast = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`multi${multipleoutline % 5}`)
        .classList.add("squarepick");
    }, 15);
    document
      .getElementById(`multi${multipleoutline % 5}`)
      .classList.remove("squarepick");
    multipleoutline++;
  }, 15);
};

const brakeImg = () => {
  rpsImgIntervalBrake = setInterval(() => {
    rpsimg.innerHTML = `<img src="./${rpsRoutine++ % 3}.png" />`;
  }, 200);

  setTimeout(() => {
    clearInterval(rpsImgIntervalBrake);
    rpsImgIntervalBrake = setInterval(() => {
      rpsimg.innerHTML = `<img src="./${rpsRoutine++ % 3}.png" />`;
    }, 450);
  }, 2500);

  setTimeout(() => {
    clearInterval(rpsImgIntervalBrake);
    rpsImgIntervalBrake = setInterval(() => {
      rpsimg.innerHTML = `<img src="./${rpsRoutine++ % 3}.png" />`;
    }, 1000);
  }, 5000);

  setTimeout(() => {
    clearInterval(rpsImgIntervalBrake);
    comPick();
    decision(comSel, playerSel);
  }, 7100);
};

const brakescore = () => {
  clearInterval(scoreIntervalFast);
  scoreIntervalBrake = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`item${scoreRoutine % 16}`)
        .classList.add("squarepick");
    }, 100);
    document
      .getElementById(`item${scoreRoutine % 16}`)
      .classList.remove("squarepick");
    scoreRoutine++;
  }, 100);

  setTimeout(() => {
    clearInterval(scoreIntervalBrake);
    scoreIntervalBrake = setInterval(() => {
      setTimeout(() => {
        document
          .getElementById(`item${scoreRoutine % 16}`)
          .classList.add("squarepick");
      }, 100);
      document
        .getElementById(`item${scoreRoutine % 16}`)
        .classList.remove("squarepick");
      scoreRoutine++;
    }, 300);
  }, 2500);

  setTimeout(() => {
    clearInterval(scoreIntervalBrake);
    scoreIntervalBrake = setInterval(() => {
      setTimeout(() => {
        document
          .getElementById(`item${scoreRoutine % 16}`)
          .classList.add("squarepick");
      }, 100);
      document
        .getElementById(`item${scoreRoutine % 16}`)
        .classList.remove("squarepick");
      scoreRoutine++;
    }, 700);
  }, 5000);

  setTimeout(() => {
    clearInterval(scoreIntervalBrake);
    clearInterval(multipleIntervalFast);
    brakeMultiple();
  }, 7000);
};

const brakeMultiple = () => {
  multipleoutline = 0;
  let index2 = parseInt(Math.random() * 20 + 10);
  let index3 = parseInt(Math.random() * 2 + 3);
  multipleIntervalBrake = setInterval(() => {
    if (multipleoutline > 80) {
      clearInterval(multipleIntervalBrake);
      multipleIntervalBrake = setInterval(() => {
        if (multipleoutline > 80 + index2) {
          clearInterval(multipleIntervalBrake);
          multipleIntervalBrake = setInterval(() => {
            if (multipleoutline > 80 + index2 + index3) {
              clearInterval(multipleIntervalBrake);
              decisionWinLose();
            } else {
              document
                .getElementById(`multi${multipleoutline % 5}`)
                .classList.remove("squarepick");
              document
                .getElementById(`multi${++multipleoutline % 5}`)
                .classList.add("squarepick");
            }
          }, 450);
        } else {
          document
            .getElementById(`multi${multipleoutline % 5}`)
            .classList.remove("squarepick");
          document
            .getElementById(`multi${++multipleoutline % 5}`)
            .classList.add("squarepick");
        }
      }, 90);
    } else {
      document
        .getElementById(`multi${multipleoutline % 5}`)
        .classList.remove("squarepick");
      document
        .getElementById(`multi${++multipleoutline % 5}`)
        .classList.add("squarepick");
    }
  }, 15);
};

const pickMeUp = () => {
  pickMeUpInterval = setInterval(() => {
    rock.classList.add("rpspick");
    paper.classList.add("rpspick");
    scissors.classList.add("rpspick");
    setTimeout(() => {
      rock.classList.remove("rpspick");
      paper.classList.remove("rpspick");
      scissors.classList.remove("rpspick");
    }, 70);
  }, 140);
};

stanbyShuffle();

startbtn.style.cursor = "pointer";

const gameStart = () => {
  if (!getCredit) {
    credit = 1000;
    getCredit++;
    console.log(`[첫시작] 골드증가 : +1000 가진골드 : ${credit}`);
  } else if (getCredit && credit < 100) {
    console.log("당신은 골드를 모두 탕진하였습니다");
    return;
  }

  credit = credit - 100;

  document.getElementById("credit").innerHTML = `${credit}G`;

  console.log(`[시작] 골드감소 : -100 가진골드 : ${credit}`);

  bgWhite();

  startbtn.disabled = true;

  btnEnable();

  startbtn.style.cursor = "default";

  clearInterval(scoreInterval);
  clearInterval(rpsImgInterval);
  clearInterval(multipleInterval);

  excuteShuffle();

  pickMeUp();

  rock.style.cursor = "pointer";
  paper.style.cursor = "pointer";
  scissors.style.cursor = "pointer";

  scissors.onclick = () => {
    playerSel = 1;
    btnDisable();
    pointerDefault();
    clearInterval(rpsImgIntervalFast);
    clearInterval(pickMeUpInterval);
    bgGold("scissors");
    brakeImg();
  };

  rock.onclick = () => {
    playerSel = 2;
    btnDisable();
    pointerDefault();
    clearInterval(rpsImgIntervalFast);
    clearInterval(pickMeUpInterval);
    bgGold("rock");
    brakeImg();
  };

  paper.onclick = () => {
    playerSel = 3;
    btnDisable();
    pointerDefault();
    clearInterval(rpsImgIntervalFast);
    clearInterval(pickMeUpInterval);
    bgGold("paper");
    brakeImg();
  };
};
