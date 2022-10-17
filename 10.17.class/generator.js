function* what() {
  // function* : 제너레이터 선언문
  // generator : yield를 사용해서 함수를 중간에 멈추는 함수이다
  try {
    // try : 코드를 실행하되, 문제가 있을 시 catch로 전달한다
    // 문제가 발생할지도 모르는 코드를 사용시 사용한다
    // 문제가발생할지도모르는코드 : 서버에 요청시에 가장 많이 사용한다
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i;
      // yield i : 함수 호출 시 여기서 멈춘다
      // 재호출 시 여기서 시작한다
    }
  } catch (err) {
    // try 코드 실행 시에 문제가 발생 시 해당 문제를 err 매개변수로 받아 실행한다
    console.log(err);
  }
}

let generator = what();
while (!generator.done) {
  //done 프로퍼티는 generator가 끝났는가?에 대한 불린값을 준다
  generator.next();
  // next 메서드는 코드를 실행한다 (단, yield에서 멈춘다)
}
