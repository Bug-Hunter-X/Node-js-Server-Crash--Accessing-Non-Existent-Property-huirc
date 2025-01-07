const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Safe way to access property.  Returns undefined if property doesn't exist
console.log(server?.nonExistentProperty);
//Alternative using the 'in' operator
console.log('nonExistentProperty' in server ? server.nonExistentProperty : undefined); 