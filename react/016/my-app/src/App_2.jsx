import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      {/* exact를 통해 path의 중복을 없앤다 - 중복되는 path로 인해 페이지가 동시에 출력되는 것 방지 */}
      {/* 다만 V6부터 exact를 사용하지 않는다.*/}
      <Route path="/" exact component={Index} />
      <Route path="/one" exact component={One} />
      <Route path="/one/ex" exact component={OneExtend} />
      <Route path="/two" exact component={Two} />
      <Route path="/three" exact component={Three} />
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One() {
  return <h1>hello world1</h1>;
}

function OneExtend() {
  return <h1>hello OneExtend</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
