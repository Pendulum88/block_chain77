function shuffle(arr) {
  if (!arr?.length || typeof arr != "object") {
    alert("배열만!");
    return "이상한거 넣지말고 배열만 넣으라고 !";
  }

  for (let i = 0; i < 100; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}
