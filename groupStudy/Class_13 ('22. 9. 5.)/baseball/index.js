function gstart() {
  let i;
  let C1, C2, C3;
  let P1, P2, P3;

  function cheats(keys) {
    keys = parseInt(Math.random() * 6);
    if (keys == 0) {
      i++;
      console.log(
        `치트키를 사용하셨습니다. 첫번째 숫자는 ${C1} 입니다\n1회차가 추가되어 ${i}회차가 되었습니다`
      );
    }
    if (keys == 1) {
      i++;
      console.log(
        `치트키를 사용하셨습니다. 두번째 숫자는 ${C2} 입니다\n1회차가 추가되어 ${i}회차가 되었습니다`
      );
    }
    if (keys == 2) {
      i++;
      console.log(
        `치트키를 사용하셨습니다. 세번째 숫자는 ${C3} 입니다\n1회차가 추가되어 ${i}회차가 되었습니다`
      );
    }
    if (keys == 3) {
      i++;
      console.log(
        `치트키를 사용하셨습니다. 하지만 꽝이 걸렸습니다\n1회차가 추가되어 ${i}회차가 되었습니다`
      );
    }
    if (keys == 4) {
      i = i + 2;
      console.log(
        `치트키를 사용하셨습니다. 하지만 꽝이 걸렸습니다\n2회차가 추가되어 ${i}회차가 되었습니다`
      );
    }
    if (keys == 5) {
      i = i - 2;
      console.log(
        `치트키를 사용하셨습니다. 백투더 퓨처!!!\n2회차가 감소하어 ${i}회차가 되었습니다`
      );
    }
  }

  function PDebug() {
    if (P1 == null && P2 == null && P3 == null) {
      return true;
    } else if (P1 == P2 || P1 == P3 || P2 == P3) {
      alert("중복된 숫자가 검출되었습니다 다시 입력해주세요");
      return true;
    } else if (
      10 <= P1 ||
      P1 <= 0 ||
      10 <= P2 ||
      P2 <= 0 ||
      10 <= P3 ||
      P3 <= 0
    ) {
      alert("범위를 벗어난 숫자가 검출되었습니다 다시 입력해주세요");
      return true;
    }
    return false;
  }

  while (C1 == C2) {
    C1 = parseInt(Math.random() * 10);
    C2 = parseInt(Math.random() * 10);
    console.log("C1 C2 랜덤 정의 완료");
    if (C1 == C2) {
      console.log(`중복된 숫자가 있으므로 숫자를 재정의합니다(C12)`);
    }
  }

  C3 = parseInt(Math.random() * 10);
  console.log("C3 랜덤 정의 완료");
  while (C3 == C1 || C3 == C2) {
    console.log(`중복된 숫자가 있으므로 숫자를 재정의합니다(C3)`);
    C3 = parseInt(Math.random() * 10);
    console.log("C3 랜덤 정의 완료");
  }
  console.log(`컴퓨터가 선택을 완료했습니다`);

  for (i = 0; i < 9; ) {
    P1 = null;
    P2 = null;
    P3 = null;
    console.log(`${++i}회차 시작`);
    while (PDebug()) {
      P1 = parseInt(
        prompt(
          "첫번째 숫자를 입력해 주세요\n설명\n1. 세번의 숫자를 선택하게 됩니다\n2. 각 숫자는 중복되면 안됩니다\n3. 0~9 까지의 숫자만 입력해주세요"
        )
      );
      P2 = parseInt(
        prompt(
          "두번째 숫자를 입력해 주세요\n설명\n1. 세번의 숫자를 선택하게 됩니다\n2. 각 숫자는 중복되면 안됩니다\n3. 0~9 까지의 숫자만 입력해주세요"
        )
      );
      P3 = parseInt(
        prompt(
          "세번째 숫자를 입력해 주세요\n설명\n1. 세번의 숫자를 선택하게 됩니다\n2. 각 숫자는 중복되면 안됩니다\n3. 0~9 까지의 숫자만 입력해주세요"
        )
      );
      if (P1 == 7 && P2 == 7 && P3 == 7) {
        cheats();
      }
    }

    console.log(`${P1} ${P2} ${P3}`);

    let strike = 0;
    let ball = 0;
    let out = 0;

    if (C1 == P1) {
      ++strike;
    } else if (C1 == P2) {
      ++ball;
    } else if (C1 == P3) {
      ++ball;
    } else {
      ++out;
    }

    if (C2 == P2) {
      ++strike;
    } else if (C2 == P1) {
      ++ball;
    } else if (C2 == P3) {
      ++ball;
    } else {
      ++out;
    }

    if (C3 == P3) {
      ++strike;
    } else if (C3 == P1) {
      ++ball;
    } else if (C3 == P2) {
      ++ball;
    } else {
      ++out;
    }

    console.log(
      `${i}회차 결과\n스트라이크 : ${strike} 볼 : ${ball} 아웃 : ${out}`
    );

    if (strike == 3) {
      console.log(`축하합니다 ${i}회차에 승리했습니다`);
      break;
    }

    if (i >= 10) {
      console.log(
        `게임종료, 패배하였습니다\n컴퓨터의 숫자는 C1 : ${C1} C2 : ${C2} C3 : ${C3} 이였습니다`
      );
      break;
    }
  }
}
