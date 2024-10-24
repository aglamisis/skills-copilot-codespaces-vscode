// Create web server that listens on port 3000 and serves the comments.html file.

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      console.error(err);
      res.end('Sorry, something went wrong');
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.


