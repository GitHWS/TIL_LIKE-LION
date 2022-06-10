import React, { useState } from "react"; // *

function Resume(props) {
  // * [변수, 변수를 변경할 수 있는 유일한 함수] = useState(변수의 초기값)
  const [like, setLike] = useState(0);

  function handleClickLike() {
    setLike(like + 1); // like = like + 1, setLike를 하면 like를 쓰는 모든 곳이 재렌더링
    console.log(like);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;
