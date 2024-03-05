const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

    server.setMaxListeners(30);
    setInterval(escribir,2000);

  function escribir(res){
    console.log('Soy un pesado que se ejecuta cada 2 segundos\n')
  }

});

//server.listen(port, hostname, () => {
 // console.log(`Server running at http://${hostname}:${port}/`);
//});
