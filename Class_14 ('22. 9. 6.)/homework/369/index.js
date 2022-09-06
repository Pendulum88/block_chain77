let count = prompt("369게임 시뮬레이터입니다\n반복횟수를 입력해주세요");
let countL = count.length;
let clap = "짝";

for (let i = 1; i <= count; i++) {
  let stringI = i.toString();
  let numThree = 0;
  for (let j = 0; j < countL; j++) {
    if (stringI[j] == 0) {
      continue;
    } else if (stringI[j] % 3 == 0) {
      numThree++;
    }
  }
  if (numThree == 0) {
    console.log(i);
  } else {
    let output = clap.repeat(numThree);
    console.log(`${output} (${stringI})`);
  }
}
