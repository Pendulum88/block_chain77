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

function randomInt(max, min) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

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
  // ↑ 메인함수
  render();
  for (let i = 0; i < bulletList.length; i++) {
    bulletList[i].update();
  }
  for (let i = 0; i < rubyList.length; i++) {
    rubyList[i].update();
  }
  requestAnimationFrame(main);
  if (rubyList.length < 3) {
    createRuby();
  }
}

function fire() {
  shot = setInterval(() => {
    createBullet();
  }, delay);
}

function holdfire() {
  // ↑ 발사 딜레이를 변경시, 인터벌을 멈추고 → 딜레이 변수값 변경 → 인터벌 시작 해야 하므로 만들어 놓음
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
    this.x = randomInt(0, canvas.width - rubywidth);
    this.y = 0;
    rubyList.push(this);
  };
  let rowbounce;
  let gravity = 0;
  // ↑ 코드 구조상 각각의 인스턴스가 하나의 중력의 영향을 받으면 오류가 생기므로 지역변수로 선언하였음
  const xmove = randomInt(10, 3);
  // ↑ 각각의 인스턴스 마다 x축 이동 속도를 다르게 하기위해 랜덤값 정의
  // 사용된 연산은 최솟값과 최댓값을 정의하는 공식을 사용했음 Math.random() * (MAX - MIN + 1) + MIN
  this.update = function () {
    if (gravity >= 28) gravity = 28;
    // ↑ 중력의 최대치 제한
    this.y += ++gravity;
    // ↑ 인스턴스는 중력의 영향으로 아래로 떨어진다 (점점 더 빨라지는 중력가속도 구현)
    if (this.y >= canvas.height - 180) {
      // ↑ 땅에 닿으면
      gravity = -gravity;
      // ↑ 중력의 역전(관성의 법칙 구현)
      gravity--;
      // ↑ 이 코드가 없으면 통통 튕길때마다 인스턴스가 도달하는 최대 높이가 점점 줄어든다
    }
    if (this.x <= 0) {
      rowbounce = true;
    } else if (this.x >= canvas.width - rubywidth) {
      rowbounce = false;
    }
    if (rowbounce) {
      this.x += xmove;
    } else {
      this.x -= xmove;
    }
  };
}

addEventListener("mousemove", function (e) {
  charactorImageX = e.clientX - 332;
  // ↑ 캐릭터의 x축을 mousemove를 통해 움직인다
  if (charactorImageX <= 0) {
    charactorImageX = 0;
  } else if (charactorImageX >= canvas.width - charactorWidth) {
    charactorImageX = canvas.width - charactorWidth;
  }
  // ↑ canvas 밖으로 나가지 못하도록 예외처리
});

loadImage();
main();
fire();

// 중력 구현까지 해놨음, 이제 떨어지는 속도 조절하고, 떨어지는 속도가
// 줄어듬에 따라 튀어오르는 높이가 줄어드는데, 높이가 일정이상 올라가게 수정해야함
