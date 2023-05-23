// Dependencies
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

// Data from database
const users = [
  { id: 1, fullName: 'John Doe', email: 'john@gmail.com' },
  { id: 2, fullName: 'Jane Doe', email: 'jane@gmail.com' },
  { id: 3, fullName: 'Sam Smith', email: 'sam@gmail.com' },
];

// Create a server
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile(publicDir + '/index.html', (err, content) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } else {
        console.log(err.message);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h2>500 Server Error</h2>');
      }
    });
  } else if (req.url === '/about') {
    fs.readFile(publicDir + '/about.html', (err, content) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } else {
        console.log(err.message);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h2>500 Server Error</h2>');
      }
    });
  } else if (req.url === '/contact') {
    fs.readFile(publicDir + '/contact.html', (err, content) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } else {
        console.log(err.message);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h2>500 Server Error</h2>');
      }
    });
  } else if (req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>404 Page Not Found</h2>');
  }
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
