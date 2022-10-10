let canvas;
let ctx;

canvas = document.createElement("canvas");
document.body.appendChild(canvas);
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;

let backgroundImage, bulletImage, charactorImage;
let charactorWidth = 58;
let charactorHeight = 58;
let charactorImageX = canvas.width / 2 - charactorWidth / 2;
let charactorImageY = canvas.height - 130;
let bulletList = [];
let bulletWidth = 14;
let bulletHeight = 22;
let delay = 500;
let shot;
let rubyList = [];
let rubywidth = 80;
let rubyheight = 80;
let rubyNeed = 3;
let score = 0;
let level = 1;
let rotation = 2;
let count = 0;
let rotationValue = 0;
let pause = false;
let gameOver = false;
let gameOverSwitch = false;
let bulletPower = 1;

function bulletPowerUp() {
  bulletPower++;
}

function delayDown() {
  if (delay == 30) return;
  delay -= 10;
  holdFire();
  openFire();
}

function delayUp() {
  delay += 10;
  holdFire();
  openFire();
}

addEventListener("keydown", function (e) {
  if (e.keyCode == 32) pauseResume();
});

function gameOverSW() {
  if (gameOverSwitch) {
    gameOverSwitch = false;
  } else if (!gameOverSwitch) {
    gameOverSwitch = true;
  }
}

function pauseResume() {
  if (pause) {
    openFire();
    pause = false;
  } else if (!pause) {
    holdFire();
    pause = true;
  }
}

function levelup() {
  level = level + 1;
}

function toRadian(rad) {
  return (rad * Math.PI) / 180;
}

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
  gameOverImage = new Image();
  gameOverImage.src = "./assets/gameOver.png";
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  // ctx.fillText(`SCORE : ${score}`, 20, 50);
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

  document.getElementById("power").innerHTML = `power : ${bulletPower}`;
  document.getElementById("score").innerHTML = `score : ${score}`;
  document.getElementById("level").innerHTML = `level : ${level}`;
  document.getElementById("delay").innerHTML = `delay : ${delay}`;
}

function rubyRender() {
  for (let i = 0; i < rubyList.length; i++) {
    ctx.drawImage(
      rubyList[i].rubyImage,
      rubyList[i].x,
      rubyList[i].y,
      rubywidth,
      rubyheight
    );
    ctx.fillText(rubyList[i].hp, rubyList[i].x + 20, rubyList[i].y + 50);
    ctx.font = "30px normal";
  }
  // rotationValue += 0.01;
}

// context.save();
// context.setTransform(1, 0, 0, 1, 0, 0);
// context.translate(350, 350);
// context.scale(scaleValue, scaleValue);
// context.rotate(toRadian(rotationValue));
// context.strokeRect(-50, -50, 100, 100);
// context.restore();
// scaleValue += 0.001;
// rotationValue += 1;
// requestAnimationFrame(draw);

function main() {
  // ↑ 메인함수
  if (gameOver) {
    ctx.drawImage(gameOverImage, 0, canvas.height / 3, canvas.width, 80);
    return;
  }
  if (!pause) {
    render();
    rubyRender();
    for (let i = 0; i < bulletList.length; i++) {
      bulletList[i].update();
      bulletList[i].checkHit();
    }
    for (let i = 0; i < rubyList.length; i++) {
      rubyList[i].update();
      if (rubyList[i].hp < 1) {
        rubyList.splice(i, 1);
      }
    }
    level = 1 + parseInt(score / 100);
  }
  requestAnimationFrame(main);
}

function openFire() {
  shot = setInterval(() => {
    createBullet();
  }, delay);
}

function holdFire() {
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
  this.checkHit = function () {
    if (this.y < -bulletHeight) {
      bulletList.splice(this, 1);
    }
    for (let i = 0; i < rubyList.length; i++) {
      if (
        rubyList[i].x - bulletWidth / 2 < this.x &&
        this.x < rubyList[i].x + rubywidth - bulletWidth / 2 &&
        rubyList[i].y < this.y &&
        this.y < rubyList[i].y + rubyheight
        // ↑ 충돌 판정
      ) {
        bulletList.splice(this, 1);
        rubyList[i].hp = rubyList[i].hp - bulletPower;
        score = score + bulletPower;
      }
    }
  };
}

function createRuby() {
  setInterval(() => {
    if (rubyList.length < rubyNeed) {
      let enemy = new Ruby(rubyList.length);
      enemy.init();
    } else return;
  }, 200);
}

function Ruby() {
  this.x = 0;
  this.y = 0;
  this.hp = 10 * level;
  count = (count + 1) % 4;
  this.rubyImage = new Image();
  this.rubyImage.src = `./assets/ruby${count + 1}.png`;

  this.init = function () {
    this.x = randomInt(0, canvas.width - rubywidth);
    this.y = -70;
    rubyList.push(this);
  };
  let rowbounce;
  let gravity = 0;
  // ↑ 코드 구조상 각각의 인스턴스가 하나의 중력의 영향을 받으면 오류가 생기므로 지역변수로 선언하였음
  const xmove = randomInt(7, 3);
  // ↑ 각각의 인스턴스 마다 x축 이동 속도를 다르게 하기위해 랜덤값 정의
  // 사용된 연산은 최솟값과 최댓값을 정의하는 공식을 사용했음 Math.random() * (MAX - MIN + 1) + MIN
  this.update = function () {
    this.y = this.y + gravity;
    // ↑ 인스턴스는 중력의 영향으로 아래로 떨어진다
    gravity = gravity + 0.12;
    //  ↑ 중력가속도 구현, 최초에는 gravity++ 로 하였으나, 계수 조정을 위해 변수 재정의 코드를 따로 빼놓았음
    if (gravity >= 6) gravity = 6;
    // ↑ 중력의 최대치 제한
    if (this.y >= canvas.height - 180) {
      // ↑ 땅에 닿으면
      gravity = -8;
      // ↑ 중력의 역전(관성의 법칙 구현)
      gravity--;
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

    if (
      this.x + 80 - 19 > charactorImageX + 19 &&
      charactorImageX + charactorWidth - 19 > this.x + 19 &&
      this.y + 75 > charactorImageY &&
      gameOverSwitch
    ) {
      gameOver = true;
    }

    // 캐릭끝336 = 루비끝256
    // 캐릭처음0 = 루비처음

    // 캐릭Y570 = 루비 최저도달520 (+80)

    // 캐릭 가로세로 64
    // 루비 가로세로 80
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
openFire();
createRuby();

// 교수님 오더
// UI는 HTML과 CSS를 이용하여 구현하기
// 캔버스 하단에 캐릭터정보(딜레이, 총알 수, 파워,)와 여러 정보(스테이지, 적 HP 최대값 등) 띄우기
// 그리고 띄운 값들을 버튼을 클릭(마우스로 조종하니까 키보드 입력을 받던지)해서 주작할수 있게 하기
// 세로축 충돌시 입사각 반사각 해서 일정하게 튕기는데, 이거를 랜덤하게 바꿔보기

// 이펙트 구현
// 인스턴스 회전
// 일시정지버튼
// 분열
// 코인드랍
// 코인출력
// 특수아이템추가
// 인스턴스와캐릭터의충돌구현
// 충돌시게임오버기능추가
// 인스턴스HP구체화
// 인스턴스생성구조조절
// 인스턴스랜덤마찰계수추가
// 딜레이 총알수 스테이지 등등 정보 표시 및 컨트롤
// 인스턴스피격이펙트구현
// 인스턴스HP위치조정(3자리,2자리,1자리 일때 정중앙 오게)
// HP변할시 텍스트에 대한 효과 구현

// 스코어 올라가면 level 올라가게 구현하기 (체계화)
// 두번씩 딜 들어가는 버그 있음
// 레벨업버튼 제대로 작동하게 로직 재구성
