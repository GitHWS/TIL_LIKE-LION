// http 패키지를 사용하겠다라는 코드, require는 해당 패키지를 불러와서 사용 가능하게 하는 역할
const http = require("http");

// 서버를 만들 코드
// req : 요청보낼때의 정보, res: 클라이언트에 응답을 보낼때의 정보
// createServer : 서버를 구축하기 위해 서버를 생성하고 콜백함수로 req와 res를 받아서 요청과 응답을 진행할 수 있도록 하는 함수
http
  .createServer((req, res) => {
    // header값을 추가해서 보내주는 코드
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<p>Hello World!</p>");
  })
  .listen(3000, () => {
    // listen : 서버를 구축 후 해당 포트 내에서 서버를 대기시키는 함수
    console.log("3000번 포트 서버 접속 완료");
  });

// localhost:3000 브라우저에서 접속해보기

// localhost? 현재 컴퓨터 내부 주소, 서버 개발 시 테스트용으로 많이 사용됨, 127.0.0.1(IP)과 동일함
// 포트번호? 서버내 프로세스(하나의 기능들)를 구분하는 번호, 서버에서는 다양한 일(HTTP, DB 등)을 처리한다. 각 포트번호마다 기능이 다르니까 결과도 다르게 나옴
