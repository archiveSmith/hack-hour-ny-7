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
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile('public/index.html', 'utf8', (err, data) => {
    if (err) return res.end(err);
    res.end(data);
  });
}); // End of server

server.listen(port, hostname, () => {
  console.log(`Node server running at http://${hostname}:${port}/`);
});

    // // Convert the url string in the req object into a new object with url information
  // const parsedUrl = url.parse(req.url);
  // // Cleaning up pathname in parsedUrl object
  // const sanitizedPath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
  // // Joining the current directory with the sanitizedPath and assigning it to variable named pathname
  // let pathname = path.join(__dirname, sanitizedPath);
  // console.log('pathname >>>', pathname);
  // // Check to see if pathname variable exist in File System
  // fs.exists(pathname, exist => {
  //   // If the pathname does not exist then change status code to 404 and end the response
  //   if (!exist) {
  //     res.statusCode = 404;
  //     res.end(`File ${pathname} was not found!`);
  //     return;
  //   }
  //   // Check to see if the pathname is in the Directory
  //   if (fs.statSync(pathname).isDirectory()) {
  //     pathname = 'public/index.html';
  //   }
  //   // Serve the pathname variable
  //   fs.readFile(pathname, (err, data) => {
  //     if (err) {
  //       res.statusCode = 500;
  //       res.end(`Error getting file: ${err}.`);
  //     }
  //     else {
  //       const ext = path.parse(pathname).ext;
  //       res.statusCode = 200;
  //       res.setHeader('Content-type', mimeType[ext] || text/plain);
  //       res.end(data);
  //     }
  //   }); // End of fs.readFile
  // }); // End of fs.exists