let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, bulletImage, charactorImage;
let charactorImageX = canvas.width / 2 - 32;
let charactorImageY = canvas.height - 130;
let charactorWidth = 64;
let charactorHeight = 64;
let bulletList = [];
let bulletWidth = 14;
let bulletHeight = 22;
let delay = 200;
let shot;
let rubyList = [];
let rubywidth = 80;
let rubyheight = 80;
let columbounce;
let rowbounce;

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "./assets/bg.png";
  bulletImage = new Image();
  bulletImage.src = "./assets/bullet.png";
  charactorImage = new Image();
  charactorImage.src = "./assets/canon.png";
  rubyImage = new Image();
  rubyImage.src = "./assets/ruby1.png";
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    charactorImage,
    charactorImageX,
    charactorImageY,
    charactorWidth,
    charactorHeight
  );

  for (let i = 0; i < bulletList.length; i++) {
    ctx.drawImage(
      bulletImage,
      bulletList[i].x,
      bulletList[i].y,
      bulletWidth,
      bulletHeight
    );
  }

  for (let i = 0; i < rubyList.length; i++) {
    ctx.drawImage(
      rubyImage,
      rubyList[i].x,
      rubyList[i].y,
      rubywidth,
      rubyheight
    );
  }
}

function main() {
  // 메인함수
  render();
  for (let i = 0; i < bulletList.length; i++) {
    bulletList[i].update();
  }
  for (let i = 0; i < rubyList.length; i++) {
    rubyList[i].update();
  }
  muddler = parseInt(Math.random() * 2);
  requestAnimationFrame(main);
}

function fire() {
  shot = setInterval(() => {
    createBullet();
  }, delay);
}

function holdfire() {
  clearInterval(shot);
}

function createBullet() {
  let magazine = new Bullet();
  magazine.init();
}

function Bullet() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2;
    this.y = charactorImageY - bulletHeight;
    bulletList.push(this);
  };
  this.update = function () {
    this.y -= 16;
  };
}

function createRuby() {
  let enemy = new Ruby();
  enemy.init();
}

function Ruby() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.x = 50;
    this.y = 0;
    rubyList.push(this);
  };
  this.update = function () {
    if (this.y > canvas.height - 180) {
      columbounce = false;
    } else if (this.y == 0) {
      columbounce = true;
    }
    if (this.x < 0) {
      rowbounce = true;
    } else if (this.x > canvas.width - rubywidth) {
      rowbounce = false;
    }
    if (columbounce) {
      this.y += 6;
    } else {
      this.y -= 6;
    }
    if (rowbounce) {
      this.x += 6;
    } else {
      this.x -= 6;
    }
  };
}

addEventListener("mousemove", function (e) {
  charactorImageX = e.clientX - 332;
  // ↓ canvas 밖으로 나가지 못하도록 예외처리
  if (charactorImageX <= 0) {
    charactorImageX = 0;
  } else if (charactorImageX >= canvas.width - charactorWidth) {
    charactorImageX = canvas.width - charactorWidth;
  }
});

loadImage();
main();
fire();
createRuby();
