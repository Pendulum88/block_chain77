const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px normal";
const backgroundImage = new Image();
const bulletImage = new Image();
const charactorImage = new Image();
const gameOverImage = new Image();
const coinImage = new Image();
const charactorWidth = 58;
const charactorHeight = 58;
let charactorImageX = canvas.width / 2 - charactorWidth / 2;
const charactorImageY = canvas.height - 130;
const bulletList = [];
const bulletWidth = 14;
const bulletHeight = 22;
let delay = 500;
let shot;
const rubyList = [];
const rubywidth = 80;
const rubyheight = 80;
let rubyNeed = 2;
let score = 0;
let level = 1;
const rotation = 2;
let count = 0;
let rotationValue = 1;
let pause = false;
let gameStart = false;
let gameOver = false;
let bulletPower = 1;
let bulletMulti = 1;
let effectFrame = 0;
let frame = 0;
let fps = 0;
let credit = 0;
const coinWidth = 30;
const coinHeight = 30;
const wallet = [];
const timer = setInterval(() => {
  fps = frame;
  frame = 0;
}, 1000);

function randomSelector(a, b) {
  let result = randomInt(a, b);
  return result;
}

function startButton() {
  gameStart = true;
  openFire();
  createRuby();
  document.getElementById("cts").remove();
}

function bulletMulUp() {
  if (bulletMulti == 4 || credit < 100) return;
  bulletMulti++;
  credit -= 100;
}

function powerUp() {
  if (credit < 1) return;
  bulletPower++;
  credit -= 1;
}

function delayDown() {
  if (delay == 80 || credit < 1) return;
  delay -= 10;
  credit -= 1;
  if (gameStart) {
    holdFire();
    openFire();
  }
}

addEventListener("keydown", function (e) {
  if (e.keyCode == 32) pauseResume();
  else if (e.keyCode == 81) delayDown();
  else if (e.keyCode == 87) powerUp();
  else if (e.keyCode == 69) bulletMulUp();
});

function pauseResume() {
  if (!gameStart) {
    gameStart = true;
    openFire();
    createRuby();
    document.getElementById("cts").remove();
    return;
  }
  if (gameOver) window.location.reload();
  if (pause) {
    openFire();
    pause = false;
  } else {
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
  backgroundImage.src = "./assets/bg.png";
  bulletImage.src = "./assets/bullet.png";
  charactorImage.src = "./assets/canon.png";
  gameOverImage.src = "./assets/gameOver.png";
  coinImage.src = "./assets/coin.png";
}

function baseRender() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    charactorImage,
    charactorImageX,
    charactorImageY,
    charactorWidth,
    charactorHeight
  );
  for (let i = 0; i < rubyList.length; i++) {}
  document.getElementById("power").innerHTML = `Power : ${bulletPower}`;
  document.getElementById("score").innerHTML = `Score : ${score}`;
  document.getElementById("level").innerHTML = `Level : ${level}`;
  document.getElementById("coin").innerHTML = `coin : ${credit}`;
  document.getElementById("delay").innerHTML = `Delay : ${delay}`;
  document.getElementById("number").innerHTML = `Multishot : ${bulletMulti}`;
  document.getElementById("fps").innerHTML = `fps : ${fps}`;
  level = 1 + parseInt(score / 300);
}

function render() {
  for (let i = 0; i < bulletList.length; i++) {
    ctx.drawImage(
      bulletImage,
      bulletList[i].x,
      bulletList[i].y,
      bulletWidth,
      bulletHeight
    );

    if (bulletList[i].y < -bulletHeight) {
      bulletList.splice(i, 1);
    }
  }

  for (let i = 0; i < wallet.length; i++) {
    ctx.drawImage(coinImage, wallet[i].x, wallet[i].y, coinWidth, coinHeight);
    wallet[i].update();
    if (
      (wallet[i].x + coinWidth > charactorImageX &&
        charactorImageX + charactorWidth > wallet[i].x + coinWidth &&
        wallet[i].y + coinHeight > charactorImageY + 20) ||
      (wallet[i].x < charactorImageX + charactorWidth &&
        charactorImageX < wallet[i].x &&
        wallet[i].y + coinHeight > charactorImageY + 20)
    ) {
      credit += wallet[i].value;
      wallet.splice(i, 1);
    }
  }
}

function bulletRender() {
  for (let i = 0; i < bulletList.length; i++) {
    bulletList[i].update();
    bulletList[i].checkHit();
  }
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
    rotationValue += 2;
  }
}

function openFire() {
  createBullet();
  shot = setInterval(() => {
    createBullet();
  }, delay);
}

function holdFire() {
  clearInterval(shot);
}

function Coins() {
  this.value = 1;
  this.x = 0;
  this.y = 0;
  this.gravity = -3;

  this.init = function () {
    wallet.push(this);
  };

  this.update = function () {
    this.y = this.y + this.gravity;
    this.gravity = this.gravity + 0.3;
    if (this.gravity >= 15) this.gravity = 15;
    if (this.y >= canvas.height - 100) {
      this.gravity *= -0.6;
    }
  };
}

function createBullet() {
  if (bulletMulti == 1) {
    let magazine = new Bullet();
    magazine.init();
  } else if (bulletMulti == 2) {
    let magazine = new Bullet();
    magazine.init2(1);
    magazine = new Bullet();
    magazine.init2(2);
  } else if (bulletMulti == 3) {
    let magazine = new Bullet();
    magazine.init3(1);
    magazine = new Bullet();
    magazine.init3(2);
    magazine = new Bullet();
    magazine.init3(3);
  } else if (bulletMulti == 4) {
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
    this.y = -50;
    rubyList.push(this);
    this.gravity = 0;
  };
  let rowbounce;
  if (randomSelector(1, 0)) rowbounce = true;
  else rowbounce = false;

  this.xmove = randomSelector(6, 1);

  this.update = function () {
    this.y = this.y + this.gravity;
    this.gravity = this.gravity + 0.05;
    if (this.gravity >= 5) this.gravity = 5;
    if (this.size == 2) {
      if (this.y >= canvas.height - 180 + this.height / 2 - 11) {
        this.gravity *= -1;
        this.gravity--;
      }
    } else if (this.size == 1) {
      if (this.y >= canvas.height - 180 + this.height / 2) {
        this.gravity *= -1;
        this.gravity--;
      }
    }
    if (this.size == 2) {
      if (this.x - this.width / 2 <= 0 + 11) {
        rowbounce = true;
      } else if (this.x >= canvas.width - rubywidth + this.width / 2 - 11) {
        rowbounce = false;
      }
      if (rowbounce) {
        this.x += this.xmove;
      } else {
        this.x -= this.xmove;
      }
    } else if (this.size == 1) {
      if (this.x - this.width / 2 <= 0) {
        rowbounce = true;
      } else if (this.x >= canvas.width - rubywidth + this.width / 2) {
        rowbounce = false;
      }
      if (rowbounce) {
        this.x += this.xmove;
      } else {
        this.x -= this.xmove;
      }
    }
    if (this.size == 2) {
      if (
        this.x + 80 - 19 > charactorImageX + 19 + this.width / 2 - 7 &&
        charactorImageX + charactorWidth - 19 >
          this.x + 19 - this.width / 2 - 7 &&
        this.y + 75 - this.height / 2 > charactorImageY - 11
      ) {
        gameOver = true;
      }
    } else if (this.size == 1) {
      if (
        this.x + 80 - 19 > charactorImageX + 19 + this.width / 2 &&
        charactorImageX + charactorWidth - 19 > this.x + 19 - this.width / 2 &&
        this.y + 75 - this.height / 2 > charactorImageY
      ) {
        gameOver = true;
      }
    }
  };
}

function main() {
  frame++;
  if (!pause) {
    baseRender();
    if (gameStart && !pause) {
      addEventListener("mousemove", function (e) {
        charactorImageX = e.clientX - 332;
        if (charactorImageX <= 0) {
          charactorImageX = 0;
        } else if (charactorImageX >= canvas.width - charactorWidth) {
          charactorImageX = canvas.width - charactorWidth;
        }
      });
      effectFrame--;
      render();
      rubyRender();
      bulletRender();
      for (let i = 0; i < rubyList.length; i++) {
        rubyList[i].isNonEffect();
        rubyList[i].update();
        if (rubyList[i].size == 2 && rubyList[i].hp < 1) {
          let enemy = new Ruby();
          rubyList.push(enemy);
          enemy.hp = parseInt((randomInt(10, 20) * level) / 2);
          enemy.size = 1;
          enemy.x = rubyList[i].x + 20;
          enemy.y = rubyList[i].y - 20;
          enemy.gravity = -3;
          enemy = new Ruby();
          rubyList.push(enemy);
          enemy.hp = parseInt((randomInt(10, 20) * level) / 2);
          enemy.size = 1;
          enemy.x = rubyList[i].x - 20;
          enemy.y = rubyList[i].y - 20;
          enemy.gravity = -3;
          const coin = new Coins();
          wallet.push(coin);
          coin.x = rubyList[i].x;
          coin.y = rubyList[i].y;
          rubyList.splice(i, 1);
        } else if (rubyList[i].size == 1 && rubyList[i].hp < 1) {
          const coin = new Coins();
          wallet.push(coin);
          coin.x = rubyList[i].x;
          coin.y = rubyList[i].y;
          rubyList.splice(i, 1);
        }
      }
    }
    if (gameOver) {
      ctx.drawImage(gameOverImage, 0, canvas.height / 3, canvas.width, 80);
      return;
    }
  }
  requestAnimationFrame(main);
}

loadImage();
main();
