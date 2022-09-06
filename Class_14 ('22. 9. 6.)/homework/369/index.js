let count = prompt("369게임 시뮬레이터입니다\n반복횟수를 입력해주세요");
let countL = count.length;
let clap = "짝";

for (let i = 1; i <= count; i++) {
  let stringI = i.toString();
  let numThree = 0;
  for (let ii = 0; ii < countL; ii++) {
    if (stringI[ii] == 0) {
      continue;
    } else if (stringI[ii] % 3 == 0) {
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
