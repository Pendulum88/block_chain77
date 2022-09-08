let firstbox = null;
let secondbox = null;

function btns(_num) {
  if (firstbox == null) {
    firstbox = _num;
    console.log(`firstbox의 값은 ${firstbox} 입니다`);
    document.getElementById("numconsol").value = `${firstbox} ${secondbox}`;
  } else if (secondbox == null) {
    secondbox = _num;
    console.log(`secondbox의 값은 ${secondbox} 입니다`);
    document.getElementById("numconsol").value = `${firstbox} ${secondbox}`;
  } else {
    firstbox = secondbox;
    secondbox = _num;
    console.log(`firstbox의 값은 ${firstbox} 입니다`);
    console.log(`secondbox의 값은 ${secondbox} 입니다`);
    document.getElementById("numconsol").value = `${firstbox} ${secondbox}`;
  }
}

function rset() {
  firstbox = null;
  secondbox = null;
  console.log("리셋 완료");
  return;
}

function operf(oper) {
  if (firstbox == null || secondbox == null) {
    console.log("숫자를 완전히 입력해주세요");
  } else if (firstbox == 0 && secondbox == 0 && oper == 3) {
    console.log("0을 0으로 나눌 수 없습니다");
  } else if (secondbox == 0 && oper == 3) {
    console.log("∞");
  } else {
    switch (oper) {
      case 1:
        console.log(firstbox + secondbox);
        return;
      case 2:
        console.log(firstbox - secondbox);
        return;
      case 3:
        console.log(firstbox / secondbox);
        return;
      case 4:
        console.log(firstbox * secondbox);
        return;
    }
  }
}
