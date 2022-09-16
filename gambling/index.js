let rpsRoutine = 0;
let squareRoutine = 0;
let getgold = 0;
let credit = 0;
let gameing = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let comsel;
let playersel;
//1rock 2paper 3scissors

const rpsInterval = setInterval(() => {
  if (!(gameing == 1)) {
    document.getElementById("imgdiv").innerHTML = `<img src="./${
      rpsRoutine++ % 3
    }.png" />`;
  } else {
    clearInterval(rpsInterval);
  }
}, 500);

const squareInterval = setInterval(() => {
  if (!(gameing == 1)) {
    setTimeout(() => {
      document
        .getElementById(`item${squareRoutine % 16}`)
        .classList.add("squarepick");
    }, 100);
    document
      .getElementById(`item${squareRoutine % 16}`)
      .classList.remove("squarepick");
    squareRoutine++;
  } else {
    clearInterval(squareInterval);
  }
}, 100);

const pickplz = () => {
  rock.classList.add("squarepick");
  paper.classList.add("squarepick");
  scissors.classList.add("squarepick");
  setTimeout(() => {
    rock.classList.remove("squarepick");
    paper.classList.remove("squarepick");
    scissors.classList.remove("squarepick");
  }, 70);

  const threeInterval = setInterval(() => {
    rock.classList.add("squarepick");
    paper.classList.add("squarepick");
    scissors.classList.add("squarepick");
    setTimeout(() => {
      rock.classList.remove("squarepick");
      paper.classList.remove("squarepick");
      scissors.classList.remove("squarepick");
      if (playersel) {
        clearInterval(threeInterval);
      }
    }, 70);
  }, 140);
};

const gameStart = () => {
  gameing = 1;

  if (!getgold) {
    credit = 1000;
    getgold++;
  }

  const rpsInterval2 = setInterval(() => {
    if (!playersel) {
      document.getElementById("imgdiv").innerHTML = `<img src="./${
        rpsRoutine++ % 3
      }.png" />`;
    } else {
      clearInterval(rpsInterval2);
    }
  }, 50);

  const squareInterval2 = setInterval(() => {
    if (!playersel) {
      setTimeout(() => {
        document
          .getElementById(`item${squareRoutine % 16}`)
          .classList.add("squarepick");
      }, 10);
      document
        .getElementById(`item${squareRoutine % 16}`)
        .classList.remove("squarepick");
      squareRoutine++;
    } else {
      clearInterval(squareInterval2);
    }
  }, 10);

  document.getElementById("credit").innerHTML = `${credit}G`;
  pickplz();

  document.getElementById("starter").onclick = (e) => {
    e.preventDefault();
  };
  document.getElementById("starter").style.cursor = "default";
  rock.style.cursor = "pointer";
  paper.style.cursor = "pointer";
  scissors.style.cursor = "pointer";
  rock.onclick = () => {
    playersel = 1;
    rock.style.backgroundColor = "gold";
    console.log(`플레이어셀값 : ${playersel}`);
    rock.onclick = (e) => {
      e.preventDefault();
    };
    paper.onclick = (e) => {
      e.preventDefault();
    };
    scissors.onclick = (e) => {
      e.preventDefault();
    };
    rock.style.cursor = "default";
    paper.style.cursor = "default";
    scissors.style.cursor = "default";
  };
  paper.onclick = () => {
    playersel = 2;
    paper.style.backgroundColor = "gold";
    console.log(`플레이어셀값 : ${playersel}`);
    rock.onclick = (e) => {
      e.preventDefault();
    };
    paper.onclick = (e) => {
      e.preventDefault();
    };
    scissors.onclick = (e) => {
      e.preventDefault();
    };
    rock.style.cursor = "default";
    paper.style.cursor = "default";
    scissors.style.cursor = "default";
  };
  scissors.onclick = () => {
    playersel = 3;
    scissors.style.backgroundColor = "gold";
    console.log(`플레이어셀값 : ${playersel}`);
    rock.onclick = (e) => {
      e.preventDefault();
    };
    paper.onclick = (e) => {
      e.preventDefault();
    };
    scissors.onclick = (e) => {
      e.preventDefault();
    };
    rock.style.cursor = "default";
    paper.style.cursor = "default";
    scissors.style.cursor = "default";
  };
};
