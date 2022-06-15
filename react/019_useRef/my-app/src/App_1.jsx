import React, { useState, useEffect, useRef } from "react";

function Counter() {
  // useState는 비동기적으로 실행하기 때문에 뒤의 코드가 먼저 혹은 동시에 실행 될 여지가 있어서, 순서대로 실행되어야 한다면 useEffect를 사용한다.
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  // 블록레벨 스코프는 함수가 끝나면 휘발되지만 useRef를 쓰면 휘발되지 않는다.
  let countThree = useRef(0);
  // 일반 지역변수는 블록레벨 스코프이기 때문에 휘발됨
  let countFour = 0;
  console.log(countThree);

  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count); // 비동기 -> useEffect로 추적하면 동기 가능
  };
  // 랜더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo); // 비동기
  };
  // 왜 클릭하면 값은 바뀌지 않고 위의 useState가 적용된 것을 클릭했을 때 이전에 눌렸던 수치가 적용이 되는가?
  // useRef : 클릭하면 변수의 값은 증가하나 랜더링을 하지않는다.
  // 즉, useRef를 몇번 누르는데 렌더링이 되지않기 때문에 값은 바뀌지않고 이후에 useState인 count/countTwo를 누르면 컴포넌트 Counter가 전체 렌더링 되기 때문에 기존에 증가했던 수치만큼 증가해서 반영되는 것!
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1;
    console.log(countThree.current);
  };

  // 랜더링도 되지않고 다른 state가 변해서 재랜더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1;
    console.log(countFour);
  };

  useEffect(() => {
    console.log("count가 감시되고 있습니다.");
    console.log(`감시된 변수 : ${count}`);
  }, [count]); // count가 변경되는 것을 감시
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
