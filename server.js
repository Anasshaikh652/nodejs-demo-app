const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!doctype html>
    <html>
      <head><title>Node.js CI/CD Demo</title></head>
      <body>
        <h1>Node.js CI/CD Demo</h1>
        <p>Application is running successfully.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
