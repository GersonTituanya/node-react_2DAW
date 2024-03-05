var  fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  var ejercicio1 = require('./ejercicio1');
  var ejercicio2 = require('./ejercicio2');
  var ejercicio3 = require('./ejercicio3');
  var ejercicio4 = require('./ejercicio4');
  var ejercicio5 = require('./ejercicio5');

  console.log(ejercicio1)
  console.log(ejercicio2)
  console.log(ejercicio3)
  console.log(ejercicio4)
  console.log(ejercicio5)

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});