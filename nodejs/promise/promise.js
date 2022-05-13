// promise의 3가지 상태

// pending - 대기 상태, promise를 호출하면 나오는 상태
// fulfilled - 이행 상태(성공)
// rejected - 실패 상태

function sayHello() {
  return new Promise((resolve, reject) => {
    // 성공했을 때 resolve로 호출
    resolve("hello!");
    // 실패했을 때 reject로 호출
    reject(new Error());
  });
}

// then을 통해 promise 실행 가능
sayHello()
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
  })
  .catch((error) => {
    console.log(error);
  });
