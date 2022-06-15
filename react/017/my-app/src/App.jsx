import React from "react";
// Link를 사용할 때 정의해줘야함
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const style = {
    margin: "10px",
  };
  return (
    <BrowserRouter>
      {/* Link to="경로"를 입력하면 <a>태그처럼 클릭으로 이동 가능*/}
      {/* 여기서 <a>를 사용하지 않는 이유는 "새로고침"이 되기 때문임 */}
      <Link to="" style={style}>
        Home
      </Link>
      <Link to="/about" style={style}>
        About
      </Link>
      <Link to="/contact" style={style}>
        Contact
      </Link>
      <Link to="/blog" style={style}>
        Blog
      </Link>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/blog" exact component={BlogPage} />
      {/* :name => name은 match의 params의 프로퍼티가 됨 */}
      <Route path="/blogDetail/:id" exact component={BlogDetailPage} />
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>HomePage</h1>;
}

function AboutPage() {
  return <h1>AboutPage</h1>;
}

function ContactPage() {
  return <h1>ContactPage</h1>;
}

function BlogPage() {
  return <h1>BlogPage</h1>;
}

// 중첩 라우터는 match라는 것을 사용, match는 props의 프로퍼티 중 하나
function BlogDetailPage(props) {
  // http://localhost:3000/blogdetail/1#hello
  // 만약 http://localhost:3000/blogdetail/1?key1=value1&key2=value2#hello으로 접속 시 props 내부 프로퍼티인 location에 아래처럼 나옴
  // location:
  //    - hash: "#hello"
  //    - pathname: "/blogdetail/1"
  //    - search: "?key1=value1&key2=value2"
  console.log(props);
  console.log(props.match.params.id);
  return (
    <div>
      <h1>BlogDetailPage</h1>
      <p>{props.match.params.id}번 게시물이 로드되었습니다.</p>
    </div>
  );
}

export default App;
