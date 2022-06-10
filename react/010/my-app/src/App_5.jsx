import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (id === "") {
      alert("아이디를 입력해!");
    }
    if (pw === "") {
      alert("비밀번호를 입력해!");
    }
    alert(`id : ${id}, pw : ${pw}`);
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value); // 계속해서 변경해주는 부분, id = e.target.value
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value); // 계속해서 변경해주는 부분, pw = e.target.value
  };

  return (
    <form onSubmit={LoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} />{" "}
        {/* 변경할 때마다 실행 */}
      </label>
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />{" "}
        {/* 변경할 때마다 실행 */}
      </label>
      <button type="submit">로그인</button>
    </form>
  );
};

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Login />
    </div>
  );
}

export default App;
