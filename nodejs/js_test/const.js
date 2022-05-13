// const(상수)
// 1. 값을 '재정의'할 수 없는 변수 선언 방식
// 2. 값을 재할당할 수 없음 - 타입에러 발생
// 3. 중괄호 스코프(블록 레벨 스코프)를 가진다. 즉, 중괄호가 있는 블록 내에 선언된 변수는 무조건 "지역변수"가 된다.

const hello = "first hello";
// hello = "second hello"; 상수를 이미 정의가 되어있다는 타입 에러 발생

if (true) {
  const hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello
