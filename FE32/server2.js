const res = require('express/lib/response');
const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      // 잘 들어갔을 때 200번
      res.writeHead(200);
      res.end('main url');
    } else if (req.url === '/upload') {
      res.writeHead(200);
      res.end('upload url');
    } else if (req.url === '/delete') {
      res.writeHead(200);
      res.end('delete url');
    } else {
      res.writeHead(404);
      res.end('Not found!!!');
    }
  })
  .listen(3000, () => {
    // 서버가 완료 되었을 때 포트번호 3000
    console.log('3000번 포트 서버 접속 완료!');
  });
