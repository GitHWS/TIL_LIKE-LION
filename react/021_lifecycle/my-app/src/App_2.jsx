import React, { useEffect, useState } from "react";

function getName() {
  console.log("사실은 겁나 오래기다리는중...");
  return "개리";
}

function App() {
  // 함수()를 넘기면 리턴값을 넘기는 것
  // 함수로 받았을 때 초기의 딱 한번만 실행(lazy initialize)
  // 원범님 답변 : 컴포넌트 안에서 함수호출을 하면 렌더링이 될때마다 계속 실행이 됩니다. 그런데 useState안에 넘겨준 값은 최초 한번만 초기화 되기때문에 함수호출을 Hook에 위임하는것으로 1번만 실행되는 것입니다.
  const [name, setName] = useState(getName());
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      {/* 왜 변하는 건 num인데 getName이 같이 호출되는 것인가? 이유는 위에 */}
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
    </>
  );
}

export default App;
