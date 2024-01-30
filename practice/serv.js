const http = require('http');
const routed = require('./routing');
const server = http.createServer(routed);

server.listen(3000);