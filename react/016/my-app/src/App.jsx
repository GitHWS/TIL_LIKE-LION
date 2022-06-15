import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  // 실무적으로 데이터를 받을 경우 아래에 value로 들어가게 됨
  const value = {
    name: "hojun",
    age: "32",
    one: "10",
    two: "20",
    three: "30",
    four: "40",
  };
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/one" exact component={One} />
      <Route path="/one/ex" exact component={OneExtend} />
      <Route path="/two" component={Two} />
      {/* props 전달 해줄 때 {...value}처럼 전개구문으로도 사용 가능(많이 사용) */}
      <Route path="/three" render={() => <Three {...value} />} />
      <Route path="/four">
        <Four {...value} />
      </Route>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world</h1>;
}

function One() {
  return <h1>hello world</h1>;
}

function OneExtend() {
  return <h1>hello world one extend</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three({ name, age }) {
  // console.log(props)
  // console.log(name, age);
  return (
    <h1>
      제 이름은 {name}입니다. 제 나이는 {age}입니다.
    </h1>
  );
}

function Four({ one, two, three, four }) {
  return (
    <h1>
      {one} {two} {three} {four}
    </h1>
  );
}

export default App;
