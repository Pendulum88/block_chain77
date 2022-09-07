const cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
// 카드 1~8까지 쌍으로 8페어 16장

// const cards = [
//   "a",
//   "a",
//   "b",
//   "b",
//   "c",
//   "c",
//   "d",
//   "d",
//   "e",
//   "e",
//   "f",
//   "f",
//   "g",
//   "g",
//   "h",
//   "h",
// ];

for (let i = 0; i < 150; i++) {
  const firstC = parseInt(Math.random() * cards.length);
  // 첫번째 숫자 선택 : 0~15 랜덤
  const secondC = parseInt(Math.random() * cards.length);
  // 두번째 숫자 선택 : 0~15 랜덤
  const temp = cards[firstC];
  // 첫번째 카드를 임시 저장
  // 원래 배열에서 아까 뽑은 firstC 랜덤숫자의 자리에 해당하는 수를 temp에 저장
  cards[firstC] = cards[secondC];
  // 첫번째 카드 자리에 두번째 카드를 저장
  // 원래 배열에서 아까 뽑은 secondC 랜덤숫자의 자리에 해당하는 수를 firstC에 저장
  cards[secondC] = temp;
  // 두번째 카드 자리에 temp를 저장
  // 35번줄에 나온 temp를 secondC에 저장
  // 이걸 반복
}
console.log(cards);
