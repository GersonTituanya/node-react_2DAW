const http = require('http');
var fs = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var lectura = fs.readFileSync('texto.txt')
  res.write(lectura);
  res.end('\nFin del programa')
});

//server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
//});