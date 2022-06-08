import "./App.css";

function App() {
  const name = "hojun";

  function age() {
    return 10;
  }
  // 스타일을 변수로 할당해서 적용
  const someStyle = { backgroundColor: "black", color: "white" };
  const 값 = false;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return (
    <div>
      {/* 주석입니다. */}
      {/*
    주
    석
    입
    니
    다.
      */}
      {/* className을 사용하지 않고 class를 사용하면 적용은 되지만 warning이 뜬다. */}
      <h1 className="one">안녕 라이캣 1호!</h1>
      {/* 첫번째 {}는 자바스크립트 문법 때문이고 두번째 {}는 객체(object)의 중괄호이다. , 물론 스타일을 인라인으로 적용할 일을 매우 극소수이다.*/}
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        안녕 라이캣 2호!
      </h1>
      <h1>
        hello {name}, {age()}
      </h1>
      {/* 삼항 연산자도 자주 사용, 특히 로그인에 많이 사용 */}
      <p>{값 ? "one" : "two"}</p>
      <h1 style={someStyle}>hello world</h1>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1 style={{ color: "red" }}>년 : {year}</h1>
        <h1>
          월/일 : {month}/{date}
        </h1>
        <h1>
          시간 : {hour}시 {min}분 {sec}초
        </h1>
      </div>
    </div>
  );
}

// return할 것이 여러 줄이면 무조건 감싸줘야함 = 최상위 태그는 꼭 하나만 존재해야함

export default App;
