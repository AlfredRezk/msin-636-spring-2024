const http= require('http');
const colors= require('colors');

const handler = require('./routes')

const PORT = 3000;
const server = http.createServer(handler)
server.listen(PORT, console.log('Server running'.green.bgYellow))