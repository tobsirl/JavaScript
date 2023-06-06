const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('./index.html').pipe(res);
});

server.listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);
