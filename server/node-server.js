const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} & ${req.url}`);
  
  const parsedUrl = url.parse(req.url);
  const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
  let pathname = path.join(__dirname, sanitizePath);

  fs.exists(pathname, exist => {
    if (!exist) {
      res.statusCode = 404;
      res.end(`File ${pathname} was not found!`);
      return;
    }
    
    if (fs.statSync(pathname).isDirectory()) {
      pathname = 'public/index.html';
    }

    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}.`);
      }
      else {
        const ext = path.parse(pathname).ext;
        res.statusCode = 200;
        res.setHeader('Content-type', mimeType[ext] || text/plain);
        res.end(data);
      }
    }); // End of fs.readFile
  }); // End of fs.exists
}); // End of server

server.listen(port, hostname, () => {
  console.log(`Node server running at http://${hostname}:${port}/`);
});

  // res.writeHead(200, {'Content-type': 'text/html'});
  // fs.readFile('public/index.html', 'utf8', (err, data) => {
  //   if (err) return res.end(err);
  //   res.end(data);
  // });