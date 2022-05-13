// arrow-function : function 키워드보다 간단히 함수 표현 가능

// 화살표함수와 동일 코드
// function foo() {
//   console.log("arrow function");
// }

// 화살표함수 - 매개변수도 정상적으로 사용 가능
const foo = (x, y) => {
  console.log(x, y);
  return x + y;
};

// 리턴문이 하나라면 중괄호와 return 생략가능
// const foo = (x) => x;

console.log(foo("hello ", "arrow function"));
console.log(foo(3, 5));
