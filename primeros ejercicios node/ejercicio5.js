var  fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

console.log('id del proceso: ', process.pid);
console.log('título del proceso: ', process.title);
console.log('versión de node: ', process.version);
console.log('sistema operativo: ', process.platform);

});

//server.listen(port, hostname, () => {
 // console.log(`Server running at http://${hostname}:${port}/`);
//});