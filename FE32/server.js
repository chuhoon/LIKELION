const res = require('express/lib/response');
const http = require('http');

http
  .createServer((req, res) => {
    // req 요청, res 응답
    // 200번 : 잘 보냈을 때
    // 404번 : 잘 보내지 못했을 때
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Hello World~!!!</p>');
  })
  .listen(3000, () => {
    // 서버가 완료 되었을 때 포트번호 3000
    console.log('3000번 포트 서버 접속 완료!');
  });
