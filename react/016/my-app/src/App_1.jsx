import React from "react";
// 라우트를 사용할 때 npm install react-router-dom@버전으로 설치를 하고 아래의 import를 해준다.
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      {/* 라우트 기본 형으로 아래처럼 작성하고 호스트URL에 붙여보기*/}
      <Route path="/" exact component={Index} />
      <Route path="/one" exact component={One} />
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

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
