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

// 중첩 라우터는 match라는 것을 사용
function BlogDetailPage({ match }) {
  console.log(match); // http://localhost:3000/blogDetail/3
  console.log(match.params.id);
  // fetch, axios와 같은 get 요청을 할 수 있는 코드를 작성
  //const url = "http://test.api.weniv.co.kr/mall/" + match.params.id;
  //console.log(url);
  return (
    <div>
      <h1>BlogDetailPage</h1>
      <p>{match.params.id}번 게시물이 로드되었습니다.</p>
    </div>
  );
}

export default App;
