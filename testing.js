let rpsRoutine = 0;
let squareRoutine = 0;
let gamestart = 0;
let gamblingspeed = 40;

const rpsInterval = setInterval(() => {
  document.getElementById("imgdiv").innerHTML = `<img src="./${
    rpsRoutine++ % 3
  }.png" />`;
}, 500);

const squareInterval = setInterval(() => {
  setTimeout(() => {
    document
      .getElementById(`item${squareRoutine % 16}`)
      .classList.add("squarepick");
  }, gamblingspeed);
  document
    .getElementById(`item${squareRoutine % 16}`)
    .classList.remove("squarepick");
  squareRoutine++;
}, gamblingspeed);
