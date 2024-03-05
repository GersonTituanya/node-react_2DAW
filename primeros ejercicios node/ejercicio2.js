const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

    server.setMaxListeners(30);
    setTimeout(escribir,2000)

    function escribir(){
      for (let i = 0; i < 10; i++) {
      console.log('Node.js es muy chulo\n')
      }
    }

  res.end('Fin de programa\n');
});


//server.listen(port, hostname, () => {
 // console.log(`Server running at http://${hostname}:${port}/`);
//});

