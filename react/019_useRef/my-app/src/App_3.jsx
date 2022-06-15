import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  let emailInput = useRef(null);
  let pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();
    // console.log(document.querySelectorAll("input"));
    // 이렇게 document.querySelector 등을 이용해서 가져오면 컴포넌트가 어디 들어갈지 예측할 수 없기 때문에 유지가 어렵다.
    setEmailValue(document.querySelectorAll("input")[0]);
    setPwValue(document.querySelectorAll("input")[1]);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;
