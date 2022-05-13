// 비구조화 할당
// 객체, 배열 안의 값을 추출해서 변수, 상수에 바로 선언하는 문법

// 객체의 비구조화 할당
const object = {
  a: 1,
  b: 2,
};

// const a = object.a; // 1
// const b = object.b; // 2

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2

// 배열의 비구조화 할당
const array = [1, 2];
const [one, two] = array;

console.log(one); // 1
console.log(two); // 2
