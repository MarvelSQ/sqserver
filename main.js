const http = require('http');
const router = require('./router')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
//console.log(router.getName({name:'haha'}));
let routerA = new router()
let user = new routerA.User('haha1',19)
console.log(routerA.getName(user));
