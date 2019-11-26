var http = require('http');

http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World12!');
}).listen(3000);
