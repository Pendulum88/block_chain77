let rpsRoutine = 0;
let scoreRoutine = 0;
let multipleoutine = 0;
let getCredit = 0;
let credit = 0;
let score;
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
    score = document.getElementById(`item${scoreRoutine % 16}`).innerHTML;
    multiplyer = document.getElementById(
      `multi${multipleoutine % 5}`
    ).innerHTML;
    multiplePick();
    console.log(`score : ${score}`);
    console.log(`multiplyer : ${multiplyer}`);
    credit = credit - score * multiplyer;
    console.log(
      `[종료] 골드감소 : -${score * multiplyer} 현재골드 : ${credit}`
    );
    startbtn.disabled = false;
    startbtn.style.cursor = "pointer";
    if (credit < 100) {
      rpsimg.innerHTML = "GAME OVER";
      rpsimg.classList.add("blacker");
    }
  } else {
    bgGold("pwin");
    score = document.getElementById(`item${scoreRoutine % 16}`).innerHTML;
    multiplyer = document.getElementById(
      `multi${multipleoutine % 5}`
    ).innerHTML;
    multiplePick();
    console.log(`score : ${score}`);
    console.log(`multiplyer : ${multiplyer}`);
    credit = credit + score * multiplyer;
    console.log(
      `[종료] 골드증가 : +${score * multiplyer} 현재골드 : ${credit}`
    );
    startbtn.disabled = false;
    startbtn.style.cursor = "pointer";
    if (credit < 100) {
      rpsimg.innerHTML = "GAME OVER";
      rpsimg.classList.add("blacker");
    }
  }
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
  if (multiplyer == "X 2") {
    multiplyer = 2;
  } else if (multiplyer == "X 5") {
    multiplyer = 5;
  } else if (multiplyer == "X 10") {
    multiplyer = 10;
  } else if (multiplyer == "X 15") {
    multiplyer = 15;
  } else if (multiplyer == "X 30") {
    multiplyer = 30;
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
        .getElementById(`multi${multipleoutine % 5}`)
        .classList.add("squarepick");
    }, 100);
    document
      .getElementById(`multi${multipleoutine % 5}`)
      .classList.remove("squarepick");
    multipleoutine++;
  }, 100);
};

const excuteShuffle = () => {
  rpsImgIntervalFast = setInterval(() => {
    rpsimg.innerHTML = `<img src="./${parseInt(Math.random() * 3)}.png" />`;
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
        .getElementById(`multi${multipleoutine % 5}`)
        .classList.add("squarepick");
    }, 15);
    document
      .getElementById(`multi${multipleoutine % 5}`)
      .classList.remove("squarepick");
    multipleoutine++;
  }, 15);
};

const brakeShuffle = () => {
  rpsImgIntervalBrake = setInterval(() => {
    rpsimg.innerHTML = `<img src="./${rpsRoutine++ % 3}.png" />`;
  }, rpsBrake);

  scoreIntervalBrake = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`item${scoreRoutine % 16}`)
        .classList.add("squarepick");
    }, scoreBrake);
    document
      .getElementById(`item${scoreRoutine % 16}`)
      .classList.remove("squarepick");
    scoreBrake = scoreBrake * 10;
    scoreRoutine++;
  }, scoreBrake);

  multipleIntervalBrake = setInterval(() => {
    setTimeout(() => {
      document
        .getElementById(`multi${multipleoutine % 5}`)
        .classList.add("squarepick");
    }, multipleBrake);
    document
      .getElementById(`multi${multipleoutine % 5}`)
      .classList.remove("squarepick");
    multipleBrake = multipleBrake * 10;
    multipleoutine++;
  }, multipleBrake);
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
    clearInterval(rpsImgIntervalFast);
    brakeShuffle();
    setTimeout(() => {
      console.log("셋타임아웃 작동 !");
      clearInterval(rpsImgIntervalFast);
      clearInterval(pickMeUpInterval);
      clearInterval(scoreIntervalFast);
      clearInterval(multipleIntervalFast);
      btnDisable();
      bgGold("scissors");
      pointerDefault();
      comPick();
      playerSel = 1;
      decision(comSel, playerSel);
    }, 5000);
  };

  rock.onclick = () => {
    clearInterval(rpsImgIntervalFast);
    clearInterval(pickMeUpInterval);
    clearInterval(scoreIntervalFast);
    clearInterval(multipleIntervalFast);
    btnDisable();
    bgGold("rock");
    pointerDefault();
    comPick();
    playerSel = 2;
    decision(comSel, playerSel);
  };

  paper.onclick = () => {
    clearInterval(rpsImgIntervalFast);
    clearInterval(pickMeUpInterval);
    clearInterval(scoreIntervalFast);
    clearInterval(multipleIntervalFast);
    btnDisable();
    bgGold("paper");
    pointerDefault();
    comPick();
    playerSel = 3;
    decision(comSel, playerSel);
  };
};
