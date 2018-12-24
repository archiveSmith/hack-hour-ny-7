const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const hackHourModule = require('../challenges/add-linked-list');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile('public/index.html', 'utf8', (err, data) => {
    if (err) return res.end(err);
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Node server running at http://${hostname}:${port}/`);
});
