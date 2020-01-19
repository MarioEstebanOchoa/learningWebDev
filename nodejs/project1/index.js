const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('Hola mundo');
    res.end();
}).listen(3000);