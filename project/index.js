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
let rotationValue = 1;
let pause = false;
let gameOver = false;
let gameOverSwitch = false;
let bulletPower = 1;
let fontSize = 30;
let bulletNum = 1;
const temp = [];
let tempTimeout;
let effectFrame = 0;

function bulletNumberUp() {
  if (bulletNum == 4) return;
  bulletNum++;
}

function bulletPowerUp() {
  bulletPower++;
}

function bulletPowerUpHundred() {
  bulletPower += 100;
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

function delayMax() {
  delay = 30;
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

    if (bulletList[i].y < -bulletHeight) {
      // bullet의 y좌표가 캔버스를 넘어 bulletHeight만큼 가면 삭제
      bulletList.splice(i, 1);
    }
  }

  document.getElementById("power").innerHTML = `power : ${bulletPower}`;
  document.getElementById("score").innerHTML = `score : ${score}`;
  document.getElementById("level").innerHTML = `level : ${level}`;
  document.getElementById("delay").innerHTML = `delay : ${delay}`;
  document.getElementById("number").innerHTML = `number : ${bulletNum}`;
}

function rubyRender() {
  for (let i = 0; i < rubyList.length; i++) {
    ctx.save();
    ctx.translate(rubyList[i].x, rubyList[i].y);
    ctx.rotate(toRadian(rotationValue));
    if (rubyList[i].size == 1) {
      ctx.drawImage(
        rubyList[i].rubyImage,
        -rubyList[i].width / 2,
        -rubyList[i].height / 2,
        rubywidth,
        rubyheight
      );
    } else if (rubyList[i].size == 2) {
      ctx.drawImage(
        rubyList[i].rubyImage,
        -rubyList[i].width / 2 - 11,
        -rubyList[i].height / 2 - 11,
        rubywidth * 1.3,
        rubyheight * 1.3
      );
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
    if (rubyList[i].size == 2) {
      if (0 < rubyList[i].hp && rubyList[i].hp < 10) {
        ctx.fillText(rubyList[i].hp, rubyList[i].x - 9, rubyList[i].y + 12);
      } else if (9 < rubyList[i].hp && rubyList[i].hp < 100) {
        ctx.fillText(rubyList[i].hp, rubyList[i].x - 18, rubyList[i].y + 12);
      } else if (99 < rubyList[i].hp && rubyList[i].hp < 1000) {
        ctx.fillText(rubyList[i].hp, rubyList[i].x - 26, rubyList[i].y + 12);
      } else if (999 < rubyList[i].hp && rubyList[i].hp < 10000) {
        ctx.fillText(
          (rubyList[i].hp / 1000).toFixed(2) + "k",
          rubyList[i].x - 44,
          rubyList[i].y + 12
        );
      } else if (9999 < rubyList[i].hp) {
        ctx.fillText("?", rubyList[i].x - 8, rubyList[i].y + 12);
      }
      // else {
      //   rubyList[i].hp = 9999;
      // }
    }
    if (rubyList[i].size == 1) {
      if (0 < rubyList[i].hp && rubyList[i].hp < 10) {
        ctx.fillText(rubyList[i].hp, rubyList[i].x - 8, rubyList[i].y + 11);
      } else if (9 < rubyList[i].hp && rubyList[i].hp < 100) {
        ctx.fillText(rubyList[i].hp, rubyList[i].x - 18, rubyList[i].y + 11);
      } else if (99 < rubyList[i].hp && rubyList[i].hp < 1000) {
        ctx.fillText(rubyList[i].hp, rubyList[i].x - 24, rubyList[i].y + 11);
      } else if (999 < rubyList[i].hp && rubyList[i].hp < 10000) {
        ctx.fillText(
          (rubyList[i].hp / 1000).toFixed(2) + "k",
          rubyList[i].x - 35,
          rubyList[i].y + 11
        );
      } else if (9999 < rubyList[i].hp) {
        ctx.fillText("?", rubyList[i].x - 8, rubyList[i].y + 12);
      }
    }
    ctx.font = "30px normal";
    rotationValue += 2;
  }
}

function main() {
  // ↑ 메인함수
  effectFrame--;
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
      rubyList[i].isNonEffect();
      rubyList[i].update();
      if (rubyList[i].size == 2 && rubyList[i].hp < 1) {
        rubyList[i].hp = parseInt((randomInt(10, 20) * level) / 2);
        rubyList[i].size = 1;
        const enemy = new Ruby(rubyList.length);
        enemy.size = 1;
        rubyList.push(enemy);
        enemy.x = rubyList[i].x + 30;
        enemy.y = rubyList[i].y - 30;
      } else if (rubyList[i].size == 1 && rubyList[i].hp < 1) {
        rubyList.splice(i, 1);
      }
    }
    level = 1 + parseInt(score / 300);
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
  if (bulletNum == 1) {
    let magazine = new Bullet();
    magazine.init();
  } else if (bulletNum == 2) {
    let magazine = new Bullet();
    magazine.init2(1);
    magazine = new Bullet();
    magazine.init2(2);
  } else if (bulletNum == 3) {
    let magazine = new Bullet();
    magazine.init3(1);
    magazine = new Bullet();
    magazine.init3(2);
    magazine = new Bullet();
    magazine.init3(3);
  } else if (bulletNum == 4) {
    let magazine = new Bullet();
    magazine.init4(1);
    magazine = new Bullet();
    magazine.init4(2);
    magazine = new Bullet();
    magazine.init4(3);
    magazine = new Bullet();
    magazine.init4(4);
  }
}

function Bullet() {
  this.x = 0;
  this.y = 0;

  this.init = function () {
    this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2;
    this.y = charactorImageY - bulletHeight;
    bulletList.push(this);
  };
  this.init2 = function (num) {
    if (num == 1) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 + 8;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    } else if (num == 2) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 - 8;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    }
  };
  this.init3 = function (num) {
    if (num == 1) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 + 16;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    } else if (num == 2) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    } else if (num == 3) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 - 16;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    }
  };
  this.init4 = function (num) {
    if (num == 1) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 + 24;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    } else if (num == 2) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 + 8;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    } else if (num == 3) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 - 8;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    } else if (num == 4) {
      this.x = charactorImageX + charactorWidth / 2 - bulletWidth / 2 - 24;
      this.y = charactorImageY - bulletHeight;
      bulletList.push(this);
    }
  };

  this.update = function () {
    this.y -= 20;
  };
  this.checkHit = function () {
    for (let i = 0; i < rubyList.length; i++) {
      if (rubyList[i].size == 2) {
        if (
          rubyList[i].x - rubyList[i].width / 2 - bulletWidth / 2 - 11 <
            this.x &&
          this.x <
            rubyList[i].x -
              rubyList[i].width / 2 +
              rubywidth -
              bulletWidth / 2 +
              11 &&
          rubyList[i].y < this.y &&
          this.y < rubyList[i].y + rubyheight - rubyList[i].height / 2 + 11
          // ↑ 충돌 판정
        ) {
          bulletList.splice(this, 1);
          rubyList[i].hp = rubyList[i].hp - bulletPower;
          score = score + bulletPower;
          effectFrame = 1;
          rubyList[i].isEffect();
        }
      } else if (rubyList[i].size == 1) {
        if (
          rubyList[i].x - rubyList[i].width / 2 - bulletWidth / 2 < this.x &&
          this.x <
            rubyList[i].x -
              rubyList[i].width / 2 +
              rubywidth -
              bulletWidth / 2 &&
          rubyList[i].y < this.y &&
          this.y < rubyList[i].y + rubyheight - rubyList[i].height / 2
          // ↑ 충돌 판정
        ) {
          bulletList.splice(this, 1);
          rubyList[i].hp = rubyList[i].hp - bulletPower;
          score = score + bulletPower;
          effectFrame = 1;
          rubyList[i].isEffect();
        }
      }
    }
  };
}

function createRuby() {
  setInterval(() => {
    if (rubyList.length < rubyNeed) {
      const enemy = new Ruby(rubyList.length);
      enemy.init();
    } else return;
  }, 200);
}

function Ruby() {
  this.x = 0;
  this.y = 0;
  this.width = 80;
  this.height = 80;
  this.size = 2;
  this.hp = randomInt(10, 20) * level;
  count = (count + 1) % 4;
  this.rubyImage = new Image();
  this.rubyImage.src = `./assets/ruby${count + 1}.png`;
  this.color = this.rubyImage.src;

  this.isEffect = function () {
    if (effectFrame > 0) this.rubyImage.src = "./assets/ruby5.png";
  };

  this.isNonEffect = function () {
    if (effectFrame <= 0) this.rubyImage.src = this.color;
  };

  this.init = function () {
    this.x = randomInt(0, canvas.width - rubywidth);
    // this.x = 100;
    this.y = -80;
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
    gravity = gravity + 0.09;
    //  ↑ 중력가속도 구현, 최초에는 gravity++ 로 하였으나, 계수 조정을 위해 변수 재정의 코드를 따로 빼놓았음
    if (gravity >= 8) gravity = 8;
    // ↑ 중력의 최대치 제한
    if (this.size == 2) {
      if (this.y >= canvas.height - 180 + this.height / 2 - 11) {
        // ↑ 땅에 닿으면
        gravity *= -1;
        // ↑ 중력의 역전(관성의 법칙 구현)
        gravity--;
      }
    } else if (this.size == 1) {
      if (this.y >= canvas.height - 180 + this.height / 2) {
        // ↑ 땅에 닿으면
        gravity *= -1;
        // ↑ 중력의 역전(관성의 법칙 구현)
        gravity--;
      }
    }
    if (this.size == 2) {
      if (this.x - this.width / 2 <= 0 + 11) {
        rowbounce = true;
      } else if (this.x >= canvas.width - rubywidth + this.width / 2 - 11) {
        rowbounce = false;
      }
      if (rowbounce) {
        this.x += xmove;
      } else {
        this.x -= xmove;
      }
    } else if (this.size == 1) {
      if (this.x - this.width / 2 <= 0) {
        rowbounce = true;
      } else if (this.x >= canvas.width - rubywidth + this.width / 2) {
        rowbounce = false;
      }
      if (rowbounce) {
        this.x += xmove;
      } else {
        this.x -= xmove;
      }
    }
    if (this.size == 2) {
      if (
        this.x + 80 - 19 > charactorImageX + 19 + this.width / 2 - 7 &&
        charactorImageX + charactorWidth - 19 >
          this.x + 19 - this.width / 2 - 7 &&
        this.y + 75 - this.height / 2 > charactorImageY - 11 &&
        gameOverSwitch
      ) {
        gameOver = true;
      }
    } else if (this.size == 1) {
      if (
        this.x + 80 - 19 > charactorImageX + 19 + this.width / 2 &&
        charactorImageX + charactorWidth - 19 > this.x + 19 - this.width / 2 &&
        this.y + 75 - this.height / 2 > charactorImageY &&
        gameOverSwitch
      ) {
        gameOver = true;
      }
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
openFire();
createRuby();

// 교수님 오더
// UI는 HTML과 CSS를 이용하여 구현하기
// 캔버스 하단에 캐릭터정보(딜레이, 총알 수, 파워,)와 여러 정보(스테이지, 적 HP 최대값 등) 띄우기
// 그리고 띄운 값들을 버튼을 클릭(마우스로 조종하니까 키보드 입력을 받던지)해서 주작할수 있게 하기
// 세로축 충돌시 입사각 반사각 해서 일정하게 튕기는데, 이거를 랜덤하게 바꿔보기

// 코인드랍
// 코인출력
// 특수아이템추가
// 인스턴스생성구조조절
// 인스턴스랜덤마찰계수추가
// 딜레이 총알수 스테이지 등등 정보 표시 및 컨트롤
// HP변할시 텍스트에 대한 효과 구현

// 스코어 올라가면 level 올라가게 구현하기 (체계화)
// 두번씩 딜 들어가는 버그 있음 >> 가까이 있을때 사거리 안으로 온 첫번째 총알에 적용되더라
// 레벨업버튼 제대로 작동하게 로직 재구성
// 총알 딜레이 맥시멈일때 이펙트 일시적으로 고정되는 현상 있음, 이거 해결하려면 이펙트 적용하는 구조 재조정 필요함
// 분열될때 기존꺼 : 크기작아짐 신규 : 반대로 내려옴 <<<<< 여기서 기존꺼랑 신규가 위로 양옆으로 살짝 튕겨야함
// 인스턴스 중력 및 중력가속도 조정필요
