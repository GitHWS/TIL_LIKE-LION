// var(변수)
// 1. function scope(함수 내의 변수 선언만 지역변수), 다른 스코프(if문, for문 등)에서는 지역변수가 아닌 '전역변수'로 선언이 된다.
// 2. var 키워드로 선언했으나 다시 var 키워드를 이용하여 같은 식별자명으로 재선언 가능
var hello = "hello";
var hello = "hello hello";

function sayHello() {
  var hello = "hello hello hello";
  console.log(`전역변수인 ${hello}`); // hello hello hello
}

if (true) {
  var hello = "hello hello hello hello";
}

sayHello();
console.log(`if문의 ${hello}`); // hello 라는 로그가 출력
