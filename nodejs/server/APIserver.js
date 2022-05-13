const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      // http://localhost:3000/에 요청할때
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      // http://localhost:3000/upload에 요청할때
      res.writeHead(200);
      res.end("upload url");
      // http://localhost:3000/delete에 요청할때
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      // 요청할 서버가 없을 때
      res.writeHead(404);
      res.end("Not found!");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료!");
  });
