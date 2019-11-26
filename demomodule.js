var http = require('http');
var dt = require ('./firstmodule.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the current date and time is: " + dt.myDateTime());
    res.end();
}).listen(3000);