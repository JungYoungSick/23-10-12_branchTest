const http = require('http');

const server = http.createServer((req,res) => {
  res.writeHead (200, {"Content-Type": "text/plain"});
  res.write('향마루');
  res.end();
});

server.listen(3500, (err)=> {
  if(!err) {
    console.error("서버 미작동")
  } else{
    console.log("3500 포트에 돌아감 http://localhost:3500");
  }
});

// 충돌이 일어나게 실험하는 File 테스트
// new test