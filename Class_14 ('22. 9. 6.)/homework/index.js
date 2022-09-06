let str = prompt("반복횟수를 입력하고, 홀수/짝수를 입력하세요");
let strI = parseInt(str);
let strS = str.replace(strI, "");
if (strS == "짝수") {
  for (let i = 1; i < strI; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
} else if (strS == "홀수") {
  for (let i = 1; i < strI; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
