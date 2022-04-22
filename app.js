var http = require('http');

var server = http.createServer(function(request response) {
resquest.writeHead(200,{'Content-Type': 'text/plain'});
response.end('NodeJS App');
});
server.listen(3000);
console.log('Server is running at http://localhost:3000/');
