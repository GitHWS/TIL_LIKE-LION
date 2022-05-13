function sayHello1() {
  return new Promise((resolve, reject) => {
    resolve("hello!");
  });
}

// async : 함수 앞에 작성, "await"을 사용하겠다라고 선언하는 키워드
// await : promise 자체가 비동기로 동작하기 때문에 await을 입력하지 않으면 밑에 있는 코드가 실행이 될 수 있음
// 즉, await이 붙은 함수를 끝난 후에 아래 코드를 실행하겠다라는 의미
async function test() {
  const hello1 = await sayHello1();
  console.log(hello1);
}

test();
