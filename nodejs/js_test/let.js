// let(변수)
// 1. 값을 '재정의'할 수 있는 변수 선언 방식
// 2. 같은 식별자명으로 let 키워드를 사용한 변수 재선언은 불가함(이미 선언되어 있다는 문법 에러 발생)
// 3. 중괄호 스코프(블록 레벨 스코프)를 가진다. 즉, 중괄호가 있는 블록 내에 선언된 변수는 무조건 "지역변수"가 된다.

let hello = "first hello";
// hello = "second hello"; 재선언은 불가하나 '재할당' 가능
// let hello = "hello"; 에러 발생

if (true) {
  let hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello
