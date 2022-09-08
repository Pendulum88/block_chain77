const three = function () {
  const count = parseInt(prompt("3!6!9! 3!6!9! 몇까지 ?"));
  // map을 사용할까? 아니면 %를 주로 사용할까?

  for (let i = 1; i < count; i++) {
    if (
      i.toString().includes("3") ||
      i.toString().includes("6") ||
      i.toString().includes("9")
    ) {
      let number = `${i}`; // let number = i.toString(); (같다)
      // i를 문자열로 변환해준다
      let text = "";
      // "짝"을 입력해서 출력하기 위해 text를 빈 문자열로 초기화한다
      for (let j = 0; j < number.length; ++j) {
        if (!(parseInt(number[j]) % 3) && number[j] != "0") text += "짝! ";
        // 각 숫자 자리가 3의 배수인지 확인하고 0이 아닌지 확인하여 출력할 text문자열에 "짝 !"을 추가한다
      }
      console.log(text);
    } else {
      console.log(i);
    }
  }
};

// 전공자용 코드, 연구해보자
const three1 = function () {
  const count = parseInt(prompt("3!6!9! 3!6!9! 몇까지 ?"));

  for (let i = 0; i < count + 1; i++) {
    let numbers = `${i}`;
    if (numbers.match(/[3,6,9]/)) {
      // 정규표현식 사용, 이후 수업함
      console.log(
        i +
          numbers
            .split("")
            .map((item) => (!(parseInt(item) % 3) && item != "0" ? "짝 !" : ""))
            .join("")
      );
    } else console.log(i);
  }
};
