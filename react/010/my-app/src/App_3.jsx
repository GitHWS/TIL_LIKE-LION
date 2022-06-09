import React, { useState } from "react"; // *

function Resume(props) {
  // * [변수, 변수를 변경할 수 있는 유일한 함수] = useState(변수의 초기값)
  let [like, setLike] = useState(false);

  function handleClickLike() {
    if (!like) {
      setLike("👍");
    } else {
      setLike("");
    }
    console.log(like);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like</button>
      <span>{like}</span>
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
